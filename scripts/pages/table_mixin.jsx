let pagesData = require('../config').pages;
let apiAddress = require('../config').apiAddress;
let $ = require('jquery');

let TableMixin = {
  getInitialState: function () {
    return {
      rowData: pagesData.map(function (item) {
        return {
          id: item.id,
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

  tableConfig: {
    fixedHeader: true,
    stripedRows: false,
    showRowHover: true,
    selectable: true,
    multiSelectable: false,
    deselectOnClickaway: true,
    displayRowCheckbox: false,
    displaySelectAll: false,
    height: '600px',
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

  caculAverage: function (dps) {
    let sum = 0;
    let ks = Object.keys(dps);
    ks.forEach(function (k) {
      sum += dps[k];
    });
    return sum/ks.length;
  },

  fetchItemData: function (service, method, index) {
    let caculAverage = this.caculAverage;
    this.fetchMetaData(service, method, 'avg',  ['rt', 'urt'], 0)
      .then(function (res1, res2) {
        let result1 = res1[0].result;
        let result2 = res2[0].result;
        let rowData = this.state.rowData;

        rowData[index].RT = parseInt(caculAverage(result1[0].dps));
        rowData[index].URT = parseInt(caculAverage(result1[1].dps));
        rowData[index].RTcontrast = parseInt(caculAverage(result2[0].dps));
        rowData[index].URTcontrast = parseInt(caculAverage(result2[1].dps));

        this.setState({
          rowData: rowData
        });
      }.bind(this));

      this.fetchMetaData(service, method, 'sum',  ['qpm'])
      .then(function (res1, res2) {
        let result1 = res1[0].result;
        let result2 = res2[0].result;
        let rowData = this.state.rowData;

        rowData[index].QPS = parseInt(caculAverage(result1[0].dps)/60);
        rowData[index].QPScontrast = parseInt(caculAverage(result2[0].dps)/60);

        this.setState({
          rowData: rowData
        });
      }.bind(this));
  },

  fetchMetaData: function (service, method, aggregator, metrics, code) {
    let time = parseInt((new Date)/1000);
    let requestOption = {
      business: 'youzan_core_service',
      stime: time - 120,
      etime: time - 60,
      aggregator: aggregator,
      metrics: metrics,
      tags:{service: service, method: method, code: code}
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

    return $.when(p1, p2);
  }
};

module.exports = TableMixin;