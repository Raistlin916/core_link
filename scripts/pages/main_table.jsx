let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let pagesData = require('../config').pages;
let apiAddress = require('../config').apiAddress;

let tableConfig = {
  fixedHeader: true,
  stripedRows: false,
  showRowHover: true,
  selectable: true,
  multiSelectable: false,
  deselectOnClickaway: true,
  displayRowCheckbox: false,
  displaySelectAll: false,
  height: '300px'
};
let headerCols = {
  linkName: {
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
  }
};
let colOrder = ['linkName', 'QPS', 'QPStrend', 'RT', 'RTtrend'];

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
          QPScontrast: null,
          RT: null,
          RTcontrast: null
        };
      })
    }
  },
  render: function () {
    let rowData = [
      {linkName: {content: <Link to="links" params={{name: 'all'}}>下单</Link>}
        , QPS: {content: '1500'}, trend: {content: '5%'}, RT: {content:'0.3'} },
      {linkName: {content: <Link to="links" params={{name: 'all'}}>注册</Link>}
        , QPS: {content:'1000'}, trend: {content: '10%'}, RT: {content:'0.5'} },
      {linkName: {content: <Link to="links" params={{name: 'all'}}>登录</Link>}
        , QPS: {content: '1200'}, trend: {content: '5%'}, RT: {content:'0.4'} },
      {linkName: {content: <Link to="links" params={{name: 'all'}}>微小店选货市场</Link>}
        , QPS: {content: '1500'}, trend: {content: '5%'}, RT: {content:'0.3'} }
    ];


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
