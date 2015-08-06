var React = require('react');
var echarts = require('echarts');
require('echarts/chart/bar');

var Echarts = React.createClass({
    renderChart: function () {
        if (!this.props.config) {
            throw new Error('Config has to be specified, for the Highchart component')
        }

        var config = this.props.config;
        var node = this.refs.chart.getDOMNode();

        if (!config.chart) {
            config = React.addons.update(config, {chart: {$set: {}}})
        }

        config = React.addons.update(config, {chart: {renderTo: {$set: node}}});

        // 基于准备好的dom，初始化echarts图表

        var myChart = echarts.init(node);
        // 为echarts对象加载数据

        myChart.setOption(config);
    },

    componentDidMount: function () {
      this.renderChart();
    },

    render: function () {
      var height = {height: '200px', width: '200px', display: 'inline-block'};
      return <div ref="chart" style={height} />
    }
});
module.exports = Echarts;