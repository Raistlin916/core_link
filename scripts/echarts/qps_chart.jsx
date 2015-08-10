var React = require('react');
var Echarts = require('./echarts');
require('echarts/chart/line');

var config = {
  tooltip : {
    trigger: 'axis'
  },
  legend: {
    data:['一天']
  },
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
      data : ['周一','周二','周三','周四','周五','周六','周日']
    }
  ],
  yAxis : [
    {
      type : 'value'
    }
  ],
  series : [
    {
      name:'一天',
      type:'line',
      stack: '总量',
      data:[120, 132, 101, 134, 90, 230, 210]
    }
  ]
};


module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <Echarts config={config} />
      </div>
    );
  }
});