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
    let rowData = this.state.rowData;

    rowData.forEach(function (item) {
      Object.keys(item).forEach(function (k) {
        if (k == 'feature') {
          item[k] = {
            content: <Link to="detail" params={{id: 'chart'}}>{item[k]}</Link>
          };
        } else {
          item[k] = {
            content: item[k]
          };
        }
      });
     
    })

    hack.wrapNum(rowData);

    // State
    this.state = {
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
        content: 'URL'
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
        {...this.state} />
      )
  },

  componentDidMount: function () {
    // var time = parseInt((new Date)/1000);
    // let requestOption = {
    //   business: 'youzan_core_service',
    //   stime: time,
    //   etime: time,
    //   aggregator: 'sum',
    //   metrics: ["qpm"],
    //   tags:{service: service, method: method}
    // };

    // let p = $.get(apiAddress + '/monitor/pull',
    //   {
    //     query: JSON.stringify(requestOption)
    //   });
  }
});
