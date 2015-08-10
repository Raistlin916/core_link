let React = require('react');
let mui = require('material-ui');
let DropDownMenu = mui.DropDownMenu;
let TextField = mui.TextField;
let ButtonSelects = require('./button_selects');
let QPSChart = require('../echarts/qps_chart');



let DetailChart = React.createClass({
  getInitialState: function () {
    return {
      dataRangeSelectIndex: null,
      contrastSelectIndex: null,
      pageIndex: 0
    }
  },

  render: function () {
    let rowStyle = {margin: '40px auto'};

    let dateRangeItems = [
      {id: 0, label: '一天'},
      {id: 1, label: '一周'},
      {id: 2, label: '一月'},
      {id: 3, label: '三月'}
    ];
    let contrastItems = [
      {id: 0, label: '一天前'},
      {id: 1, label: '一周前'},
      {id: 2, label: '一月前'},
      {id: 3, label: '三月前'}
    ];
    let pages = [
      { payload: '1', text: '支付页（收银台）' },
      { payload: '2', text: '支付跳转' },
      { payload: '3', text: '订单确认' },
      { payload: '4', text: '报存地址' },
      { payload: '5', text: '到店自提list' },
      { payload: '6', text: '到店自提book' },
      { payload: '7', text: '支付操作' },
    ];


    contrastItems.forEach(function (item, i) {
      item.disabled = this.state.dataRangeSelectIndex != 0;
    }.bind(this));

    let dateRange = dateRangeItems[this.state.dataRangeSelectIndex];
    let contrastItem = contrastItems[this.state.contrastSelectIndex];
    let page = pages[this.state.pageIndex];

    return (
      <div>
        <div style={rowStyle}>
          <label>监控页面选择：</label>
          <DropDownMenu menuItems={pages} onChange={this.handlePageChange} />
          <div style={{display: 'inline-block'}}>
            <ButtonSelects items={dateRangeItems} onChange={this.handleDateRangeChange}/>
          </div>
        </div>
        <div style={rowStyle}>
          <label>对比数据选择：</label>
          <ButtonSelects items={contrastItems} onChange={this.handleContrastItemChange}/>
        </div>
        <div style={rowStyle}>
          <label>QPS趋势图：</label>
          <QPSChart />
        </div>
        <div style={rowStyle}>
          <label>RT趋势图</label>
          <QPSChart />
        </div>
      </div>
    )
  },

  handleDateRangeChange: function (item, index) {
    this.setState({
      dataRangeSelectIndex: index
    });
  },

  handleContrastItemChange: function (item, index) {
    this.setState({
      contrastSelectIndex: index
    });
  },

  handlePageChange: function (elem, index, item) {
    this.setState({
      pageIndex: index
    });
  }
});

module.exports = DetailChart;