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
    return {
      dataRangeSelectIndex: null,
      contrastSelectIndex: null
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

    contrastItems.forEach(function (item, i) {
      item.disabled = this.state.dataRangeSelectIndex != 0;
    }.bind(this));

    return (
      <div>
        <div style={rowStyle}>
          <label>监控页面选择：</label>
          <DropDownMenu menuItems={menuItems} />
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
  }
});

module.exports = DetailChart;