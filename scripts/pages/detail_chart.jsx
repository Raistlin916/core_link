let React = require('react');
let mui = require('material-ui');
let DropDownMenu = mui.DropDownMenu;
let TextField = mui.TextField;
let ButtonSelects = require('../components/button_selects');
let Chart = require('../echarts/chart');
let pagesData = require('../config').pages;

let DetailChart = React.createClass({
  getInitialState: function () {
    return {
      dateRangeSelectIndex: 0,
      contrastSelectIndex: null,
      pageIndex: this.props.params.id-1
    }
  },

  render: function () {
    let rowStyle = {margin: '40px auto'};

    let dateRangeItems = [
      {label: '一天'},
      {label: '一周'},
      {label: '一月'},
      {label: '三月'}
    ];
    let contrastItems = [
      {label: '一天前'},
      {label: '一周前'},
      {label: '一月前'},
      {label: '三月前'}
    ];
    let pages = pagesData.map(function (item) {
      return {
        payload: item.id,
        text: item.name
      }
    });


    contrastItems.forEach(function (item, i) {
      item.disabled = this.state.dateRangeSelectIndex != 0;
    }.bind(this));

    let dateRange = dateRangeItems[this.state.dateRangeSelectIndex];
    let contrastItem = contrastItems[this.state.contrastSelectIndex];

    dateRange && (dateRange.isChecked = true);
    contrastItem && (contrastItem.isChecked = true);

    return (
      <div>
        <div style={rowStyle}>
          <label>监控页面选择：</label>
          <DropDownMenu menuItems={pages} onChange={this.handlePageChange} selectedIndex={this.state.pageIndex} />
          <div style={{display: 'inline-block'}}>
            <ButtonSelects items={dateRangeItems} onChange={this.handleDateRangeChange}/>
          </div>
        </div>
        <div style={rowStyle}>
          <label>对比数据选择：</label>
          <div style={{display: 'inline-block'}}>
            <ButtonSelects items={contrastItems} onChange={this.handleContrastItemChange}/>
          </div>
        </div>
        <div style={rowStyle}>
          <label>RT趋势图</label>
          <Chart {...this.state} metrics="RT"/>
        </div>
        <div style={rowStyle}>
          <label>URT趋势图</label>
          <Chart {...this.state} metrics="URT"/>
        </div>
        <div style={rowStyle}>
          <label>QPS趋势图：</label>
          <Chart {...this.state} metrics="qpm" metricsName="QPS" 
            valueMap={function(value){return (value/60).toFixed(2); }}/>
        </div>
      </div>
    )
  },

  handleDateRangeChange: function (item, index) {
    this.setState({
      dateRangeSelectIndex: index,
      contrastSelectIndex: index == 0 ? this.state.contrastSelectIndex : null
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