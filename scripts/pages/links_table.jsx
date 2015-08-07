let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    let rowData = [
      {linkName: {content: <Link to="detail" params={{id: '1'}}>注册</Link>}
        , feature: {content: '支付'}, URL: {content: 'http://trade.koudaitong.com/wxpay/confirm'}, QPS: {content: 1000}, trend: {content: '5%'}, RT: {content:'0.5'} },
      {linkName: {content: <Link to="detail" params={{id: '2'}}>下单</Link>}
        , feature: {content: '支付'}, URL: {content: 'http://trade.koudaitong.com/wxpay/confirm'}, QPS: {content: 1000}, trend: {content: '5%'}, RT: {content:'0.5'} }
    ];

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
      feature: {
        content: '功能点'
      },
      URL: {
        content: 'URL'
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
    let colOrder = ['linkName', 'feature', 'URL', 'QPS', 'trend', 'RT'];

    return (
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        {...this.state} />
      )
  }
});
