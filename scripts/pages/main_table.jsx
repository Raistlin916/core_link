let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    let rowData = [
      {linkName: {content: <Link to="links" params={{name: 'register'}}>注册</Link>}
        , QPS: {content:'1000'}, trend: {content: '10%'}, RT: {content:'0.5'} },
      {linkName: {content: <Link to="links" params={{name: 'order'}}>下单</Link>}
        , QPS: {content: '1500'}, trend: {content: '5%'}, RT: {content:'0.3'} },
      {linkName: {content: <Link to="links" params={{name: 'goods'}}>商品市场</Link>}
        , QPS: {content: '1200'}, trend: {content: '5%'}, RT: {content:'0.4'} },
    ];


    //转换数字   
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
      height: '300px',
      rowData: rowData
    };

    // Column configuration
    let headerCols = {
      linkName: {
        content: '核心链路'
      },
      QPS: {
        content: 'QPS'
      },
      trend: {
        content: '趋势'
      },
      RT: {
        content: 'RT'
      }
    };
    let colOrder = ['linkName', 'QPS', 'trend', 'RT'];

    return (
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        {...this.state} />
      )
  }
});
