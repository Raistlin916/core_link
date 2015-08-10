let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;

module.exports = React.createClass({
  render: function () {
    let rowData = [
      {linkName: {content: <Link to="detail" params={{id: 'wxpay_confirm'}}>下单</Link>}
        , feature: {content: '支付页（收银台）'}, URL: {content: 'http://trade.koudaitong.com/wxpay/confirm'}
        , QPS: {content: 1000}, trend: {content: '5%'}, RT: {content:'0.5'} },
      {linkName: {content: <Link to="detail" params={{id: 'confirm_index'}}>下单</Link>}
        , feature: {content: '支付跳转'}, URL: {content: 'http://trade.koudaitong.com/v2/trade/confirm/index'}
      },
      {linkName: {content: <Link to="detail" params={{id: 'order_confirm'}}>下单</Link>}
        , feature: {content: '订单确认'}, URL: {content: 'http://trade.koudaitong.com/v2/trade/order/confirm'}
      },
      {linkName: {content: <Link to="detail" params={{id: 'save_address'}}>物流</Link>}
        , feature: {content: '报存地址'}, URL: {content: 'http://trade.koudaitong.com/trade/order/address.json'}
      },
      {linkName: {content: <Link to="detail" params={{id: 'selffetch_list'}}>物流</Link>}
        , feature: {content: '到店自提list'}, URL: {content: 'http://trade.koudaitong.com/v2/trade/selffetch/list.json'}
      },
      {linkName: {content: <Link to="detail" params={{id: 'selffetch_book'}}>物流</Link>}
        , feature: {content: '到店自提book'}, URL: {content: 'http://trade.koudaitong.com/v2/trade/selffetch/book.json'}
      },
      {linkName: {content: <Link to="detail" params={{id: 'order_pay'}}>支付</Link>}
        , feature: {content: '支付操作'}, URL: {content: 'http://trade.koudaitong.com/trade/order/pay.json'}
      }
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
