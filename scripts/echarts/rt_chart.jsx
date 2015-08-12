let React = require('react');
let Echarts = require('./echarts');
let apiAddress = require('../config').apiAddress;
let pagesData = require('../config').pages;
let moment = require('moment');
require('echarts/chart/line');
require('echarts/chart/bar');


module.exports = React.createClass({
  getInitialState: function () {
    return {
      chartData: [{
        keys: [],
        values: []
      }]
    };
  },
  render: function(){
    let chartData = this.state.chartData;

    let config = {
      showLoading: false,
      tooltip: {
          show: true
      },
      toolbox: {
        show : true,
        feature : {
          dataZoom : {show: true},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true}
        }
      },
      legend: {
        data: chartData.map(function(item){
          return item.name;
        })
      },
      xAxis : [
        chartData[0] && {
          data: chartData[0].keys
        }
      ],
      yAxis : [
          {
            position : 'left',
            name : 'rt'
          }
      ],
      series : chartData.map(function (item) {
        return {
          name: item.name,
          type: 'line',
          data: item.values
        }
      }),
      noDataLoadingOption: {
        effect: 'ring'
      }
    };

    return (
      <div>
        <Echarts config={config} />
      </div>
    );
  },

  updateChart: function (config) {
    let pageData = pagesData[config.pageIndex];
    let service = pageData.service;
    let method = pageData.method;

    const day = 1000*24*60*60;
    let t = [day, day*7, day*30, day*30*3][config.dateRangeSelectIndex];
    let tName = ['一天', '一周', '一月', '三月'][config.dateRangeSelectIndex];
    if(t == undefined){
      return;
    }

    let requestOption = {
      business: 'youzan_core_service',
      stime: parseInt((new Date - t)/1000),
      etime: parseInt((new Date)/1000),
      aggregator: 'sum',
      metrics: ['rt'],
      tags:{service: service, method: method}
    };

    let p = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });

    let p2;

    if (config.contrastSelectIndex != undefined) {
      requestOption.stime -= ([day, day*7, day*30, day*30*3][config.contrastSelectIndex])/1000;
      p2 = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });
    }

    p = $.when(p, p2);

    p.then(function (res1, res2) {
      let data = res1[0].result[0].dps;
      let kv = this.separateKV(data);
      let chartData = [{
        name: tName,
        keys: kv.keys.map(function (item) {
          return moment(item*1000).format('MM-DD hh');
        }),
        values: kv.values.map(function(item){
          return item;
        })
      }];

      if(res2){
        let kv2 = this.separateKV(res2[0].result[0].dps);

        chartData.push({
          name: ['一天', '一周', '一月', '三月'][config.contrastSelectIndex] + '前',
          keys: kv2.keys.map(function (item) {
            return moment(item*1000).format('MM-DD HH:mm');
          }),
          values: kv2.values.map(function(item){
            return item;
          })
        })
      }
      
      this.setState({
        chartData: chartData
      });
      this.forceUpdate();
    }.bind(this));
  },

  separateKV: function (obj) {
    let keys = Object.keys(obj).map(function (key) {
      return key;
    });
    let values = Object.keys(obj).map(function (v) {
      return obj[v];
    });

    return {
      keys: keys,
      values: values
    }
  },

  componentDidMount: function () {
    this.updateChart(this.props);
  },

  componentWillReceiveProps: function (nextProps) {
    this.updateChart(nextProps);
  },

  shouldComponentUpdate: function() {
    return false;
  }
});