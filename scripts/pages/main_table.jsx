let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let ArrowSpan = require('../components/arrow_span');
let TableMixin = require('./table_mixin');

let tableConfig = {
  fixedHeader: true,
  stripedRows: false,
  showRowHover: true,
  selectable: true,
  multiSelectable: false,
  deselectOnClickaway: true,
  displayRowCheckbox: false,
  displaySelectAll: false,
  height: '600px'
};
let headerCols = {
  core: {
    content: '核心链路'
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
  },
  URT: {
    content: 'URT'
  },
  URTtrend: {
    content: '趋势'
  }
};
let colOrder = ['core', 'RT', 'RTtrend', 'URT', 'URTtrend', 'QPS', 'QPStrend'];

module.exports = React.createClass({
  
  mixins: [TableMixin],

  render: function () {
    let rowData = JSON.parse(JSON.stringify(this.state.rowData));

    let rowData1 = rowData.filter(function (item) {
      return item.core == '下单';
    });

    let rowData2 = rowData.filter(function (item) {
      return item.core == '登录';
    });

    rowData = [rowData1, rowData2].map(function (item) {
      return item.reduce(function (a, b) {
        a.QPS += b.QPS;
        a.RT += b.RT;
        a.URT += b.URT;
        a.QPScontrast += b.QPScontrast;
        a.RTcontrast += b.RTcontrast;
        a.URTcontrast += b.URTcontrast;
        return a;
      });
    });

    rowData.forEach(function (item) {
      item.QPStrend = ~~((1 - item.QPScontrast/item.QPS) * 100);
      item.RTtrend = ~~((1 - item.RTcontrast/item.RT) * 100);
      item.URTtrend = ~~((1 - item.RTcontrast/item.RT) * 100);

      Object.keys(item).forEach(function (k) {
        if (k == 'core') {
          item[k] = {
            content: <Link to="links" params={{name: 'all'}}>{item[k]}</Link>
          };
        } else if (k == 'QPS' || k == 'RT' || k == 'URT') {
          item[k] = {
            content: item[k] == null ? <span>null</span> : item[k]
          };
        } else if (k == 'QPStrend' || k == 'RTtrend' || k == 'URTtrend') {
          item[k] = {
            content: <ArrowSpan data={item[k]} reverse={k=='QPStrend'} />
          };
        } else {
          item[k] = {
            content: item[k]
          };
        };
      });
    });
    

    //转换数字   
    hack.wrapNum(rowData);

    return (
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        rowData={rowData}
        {...tableConfig} />
      )
  }
});
