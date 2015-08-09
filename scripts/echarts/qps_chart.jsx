var React = require('react');
var Echarts = require('./echarts');

var config = {
  tooltip: {
      show: true
  },
  xAxis : [
      {
          type : 'category',
          data : ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          "name":"销量",
          "type":"bar",
          "data":[5, 20, 40, 10, 10, 20]
      }
  ],
  grid: {
    x: 25,
    y: 25,
    x2: 25,
    y2: 25
  }
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