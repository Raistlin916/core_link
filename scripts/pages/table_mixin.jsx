let pagesData = require('../config').pages;
let apiAddress = require('../config').apiAddress;

let TableMixin = {
   getInitialState: function () {
    return {
      rowData: pagesData.map(function (item) {
        return {
          core: item.core,
          feature: item.name,
          service: item.service,
          method: item.method,
          URL: item.url,
          QPS: null,
          QPScontrast: null,
          RT: null,
          RTcontrast: null
        };
      })
    }
  },
  componentDidMount: function () {
    this.interval = setInterval(function () {
      this.updateAllRow();
    }.bind(this), 1000 * 30);

    this.updateAllRow();
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  updateAllRow: function () {
    this.state.rowData.forEach(function (item, index) {
      this.fetchItemData(item.service, item.method, index);
    }.bind(this));
  },

  fetchItemData: function (service, method, index) {
    var time = parseInt((new Date)/1000);

    let requestOption = {
      business: 'youzan_core_service',
      stime: time - 120,
      etime: time - 60,
      aggregator: 'sum',
      metrics: ['qpm', 'rt', 'urt'],
      tags:{service: service, method: method}
    };

    let p1 = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });

    requestOption.stime -= 60;
    requestOption.etime -= 60;
    let p2 = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });

    function caculAverage(dps) {
      let sum = 0;
      let ks = Object.keys(dps);
      ks.forEach(function (k) {
        sum += dps[k];
      });
      return sum/ks.length;
    }

    $.when(p1, p2)
      .then(function (res1, res2) {
        let result1 = res1[0].result;
        let result2 = res2[0].result;
        let rowData = this.state.rowData;
        let rowItemData = rowData[index];

        try {
          rowData[index].QPS = parseInt(caculAverage(result1[0].dps)/60);
          rowData[index].RT = parseInt(caculAverage(result1[1].dps));
          rowData[index].URT = parseInt(caculAverage(result1[2].dps));
          rowData[index].QPScontrast = parseInt(caculAverage(result2[0].dps)/60);
          rowData[index].RTcontrast = parseInt(caculAverage(result2[1].dps));
          rowData[index].URTcontrast = parseInt(caculAverage(result2[2].dps));

          this.setState({
            rowData: rowData
          });
        } catch(e) {
          console.error(e);
        }
      }.bind(this));
  }
};

module.exports = TableMixin;