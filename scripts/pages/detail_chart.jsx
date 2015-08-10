let React = require('react');
let mui = require('material-ui');
let DropDownMenu = mui.DropDownMenu;
let TextField = mui.TextField;
let ButtonSelects = require('./button_selects');
let QPSChart = require('../echarts/qps_chart');

let menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];



let DetailChart = React.createClass({
  getInitialState: function () {
    var dateRangeItems = [
      {id: 0, label: '一天'},
      {id: 1, label: '一周'},
      {id: 2, label: '一月'},
      {id: 3, label: '三月'}
    ];
    var contrastItems = [
      {id: 0, label: '一天前'},
      {id: 1, label: '一周前'},
      {id: 2, label: '一月前'},
      {id: 3, label: '三月前'}
    ];
    return {
      dateRangeItems: dateRangeItems,
      contrastItems: contrastItems
    }
  },

  render: function () {
    var rowStyle = {margin: '40px auto'};

    return (
      <div>
        <div style={rowStyle}>
          <label>监控页面选择：</label>
          <DropDownMenu menuItems={menuItems} />
          <div style={{display: 'inline-block'}}>
            <ButtonSelects items={this.state.dateRangeItems} onChange={this.handleDateRangeChange}/>
          </div>
        </div>
        <div style={rowStyle}>
          <label>对比数据选择：</label>
          <ButtonSelects items={this.state.contrastItems} onChange={this.handleContrastItemChange}/>
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

  handleContrastItemChange: function (item, index) {

  },

  handleDateRangeChange: function (item, index) {
    if (index == 0) {
      this.setState({
        contrastItems: this.state.contrastItems.map(function (item, i) {
          item.disabled = false;
          //item.isChecked = index == i;
          return item;
        })
      });
    } else {
      this.setState({
        contrastItems: this.state.contrastItems.map(function (item, i) {
          item.disabled = i != 0;
          //item.isChecked = i == 0;
          return item;
        })
      });
    }
  }
});

module.exports = DetailChart;