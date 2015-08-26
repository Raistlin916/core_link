let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let ArrowSpan = require('../components/arrow_span');
let TableMixin = require('./table_mixin');


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
  
let groups = [{
  name: '下单（微信）',
  group: [1,2,3,6,12,13,14,15]
},
{
  name: '下单（储蓄卡）',
  group: [1,2,3,6,10,11,12,13,14,15]
},
{
  name: '下单（信用卡）',
  group: [1,2,3,6,7,8,9,12,13,14,15]
},
{ 
  name: '登录（卖家）',
  group: [16,17]
},
{
  name: '登录（买家）',
  group: [18,19] 
}];


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

    rowData = groups.map(function (item) {
      return rowData.filter(function (it) {
        return item.group.some(function (i) {
          return i == it.id;
        });
      });
    });

    rowData = JSON.parse(JSON.stringify(rowData));

    rowData.forEach(function (item, i) {
      item.forEach(function (it) {
        it.core = groups[i].name;
      });
    });

    rowData = rowData.map(function (item) {
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
      item.QPStrend = ~~((item.QPS - item.QPScontrast)/item.QPScontrast * 100);
      item.RTtrend = ~~((item.RT - item.RTcontrast)/item.RTcontrast * 100);
      item.URTtrend = ~~((item.URT - item.URTcontrast)/item.URTcontrast * 100);

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
        {...this.tableConfig} />
      )
  }
});
