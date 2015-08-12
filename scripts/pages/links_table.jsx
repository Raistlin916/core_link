let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let pagesData = require('../config').pages;
let apiAddress = require('../config').apiAddress;

module.exports = React.createClass({
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
          QPStrend: null,
          RT: null,
          RTtrend: null
        };
      })
    }
  },
  render: function () {
    let rowData = JSON.parse(JSON.stringify(this.state.rowData));

    rowData.forEach(function (item) {
      Object.keys(item).forEach(function (k) {
        if (k == 'feature') {
          item[k] = {
            content: <Link to="detail" params={{id: 'chart'}}>{item[k]}</Link>
          };
        } else {
          if (k == 'QPS' || k == 'RT') {
            item[k] = {
              content: item[k] == null ? <span>null</span> : item[k]
            };
          } else if(k == 'URL') {
            item[k] = {
              content: item[k],
              style: {
                width: '200px'
              }
            };
          } else {
            item[k] = {
              content: item[k]
            };
          }
          
        }
      });
     
    })

    hack.wrapNum(rowData);

    let data = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      deselectOnClickaway: true,
      displayRowCheckbox: false,
      displaySelectAll: false,
      height: '600px',
      rowData: rowData
    };

    // Column configuration
    let headerCols = {
      core: {
        content: '核心链路'
      },
      feature: {
        content: '功能点'
      },
      URL: {
        content: 'URL',
        style: {
          width: '200px'
        }
      },
      QPS: {
        content: 'QPS'
      },
      QPStrend: {
        content: '趋势'
      },
      RT: {
        content: 'RT'
      },
      RTtrend: {
        content: '趋势'
      }
    };
    let colOrder = ['core', 'feature', 'URL', 'QPS', 'QPStrend', 'RT', 'RTtrend'];

    return (
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        {...data} />
      )
  },

  componentDidMount: function () {
    setInterval(function () {
      this.updateAllRow();
    }.bind(this), 1000 * 60);

    this.updateAllRow();
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
      metrics: ['qpm', 'rt'],
      tags:{service: service, method: method}
    };

    $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      })
    .then(function (res) {
      let result = res.result;
      let rowData = this.state.rowData;
      let rowItemData = rowData[index];

      try {
        rowData[index].QPS = parseInt(result[0].dps[Object.keys(result[0].dps)[0]]/60);
        rowData[index].RT = parseInt(result[1].dps[Object.keys(result[1].dps)[0]]);
        this.setState({
          rowData: rowData
        });
      } catch(e) {
        console.error(e);
      }
      
    }.bind(this));
  }
});
