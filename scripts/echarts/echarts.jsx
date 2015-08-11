var React = require('react');
var echarts = require('echarts');


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

    componentDidUpdate: function () {
      this.renderChart();
    },

    componentDidMount: function () {
      this.renderChart();
    },

    render: function () {
      var style = {height: '400px', width: '800px'};
      return <div ref="chart" style={style} />
    }
});
module.exports = Echarts;