let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;

module.exports = React.createClass({
  render: function () {
    let rowData = [
      {linkName: {content: '注册'}, feature: {content: '支付'}, URL: {content: 'http://trade.koudaitong.com/wxpay/confirm'}, QPS: {content: 1000}, trend: {content: '5%'}, RT: {content:'0.5'} },
      {linkName: {content: '下单'}, feature: {content: '支付'}, URL: {content: 'http://trade.koudaitong.com/wxpay/confirm'}, QPS: {content: 1000}, trend: {content: '5%'}, RT: {content:'0.5'} }
    ];

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
