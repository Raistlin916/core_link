let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let pagesData = require('../config').pages;
let apiAddress = require('../config').apiAddress;

// Column configuration
let headerCols = {
  core: {
    content: '核心链路'
  },
  feature: {
    content: '功能点'
  },
  URL: {
    content: 'URL',
    style: {
      width: '350px'
    }
  },
  QPS: {
    content: 'QPS'
  },
  QPStrend: {
    content: '趋势'
  },
  RT: {
    content: 'RT'
  },
  RTtrend: {
    content: '趋势'
  }
};
let colOrder = ['core', 'feature', 'URL', 'QPS', 'QPStrend', 'RT', 'RTtrend'];
let tableConfig = {
  fixedHeader: true,
  stripedRows: false,
  showRowHover: true,
  selectable: true,
  multiSelectable: false,
  deselectOnClickaway: true,
  displayRowCheckbox: false,
  displaySelectAll: false,
  height: '600px',
};

var ArrowSpan = React.createClass({
  render: function() {
    var value = this.props.data,
        addClass = null,
        arrow = null;
    if(!isNaN(value)){
        if(value < 0){
            addClass = {
              color: '#c10000',
              paddingRight: '12px'
            };
            arrow = '↓';
            value += arrow;
        }else{
            addClass = {
              color: '#03b401',
              paddingRight: '12px'
            };
            arrow = '↑';
            value += arrow;
        }
    }
    return (
     <span style={addClass}>{value}</span>
    )
  }  
});


module.exports = React.createClass({
  getInitialState: function () {
    return {
      rowData: pagesData.map(function (item) {
        return {
          core: item.core,
          feature: item.name,
          service: item.service,
          method: item.method,
          URL: item.url,
          QPS: null,
          QPScontrast: null,
          RT: null,
          RTcontrast: null
        };
      })
    }
  },
  render: function () {
    let rowData = JSON.parse(JSON.stringify(this.state.rowData));

    rowData.forEach(function (item) {
      item.QPStrend = ((1 - item.QPScontrast/item.QPS) * 100).toFixed(2);
      item.RTtrend = ((1 - item.RTcontrast/item.RT) * 100).toFixed(2);

      Object.keys(item).forEach(function (k) {
        if (k == 'feature') {
          item[k] = {
            content: <Link to="detail" params={{id: 'chart'}}>{item[k]}</Link>
          };
        } else {
          if (k == 'QPS' || k == 'RT') {
            item[k] = {
              content: item[k] == null ? <span>null</span> : item[k]
            };
          } else if(k == 'URL') {
            item[k] = {
              content: item[k],
              style: {
                width: '350px'
              }
            };
          } else {
            item[k] = {
              content: item[k]
            };
          }
        }
      });

    });


    hack.wrapNum(rowData);

    return (
      <div>
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        rowData={rowData}
        {...tableConfig} />
      </div>
      )
  },

  componentDidMount: function () {
    this.interval = setInterval(function () {
      this.updateAllRow();
    }.bind(this), 1000 * 30);

    this.updateAllRow();
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  updateAllRow: function () {
    this.state.rowData.forEach(function (item, index) {
      this.fetchItemData(item.service, item.method, index);
    }.bind(this));
  },

  fetchItemData: function (service, method, index) {
    var time = parseInt((new Date)/1000);

    let requestOption = {
      business: 'youzan_core_service',
      stime: time - 120,
      etime: time - 60,
      aggregator: 'sum',
      metrics: ['qpm', 'rt'],
      tags:{service: service, method: method}
    };

    let p1 = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });

    requestOption.stime -= 60;
    requestOption.etime -= 60;
    let p2 = $.get(apiAddress + '/monitor/pull',
      {
        query: JSON.stringify(requestOption)
      });

    $.when(p1, p2)
      .then(function (res1, res2) {
        let result1 = res1[0].result;
        let result2 = res2[0].result;
        let rowData = this.state.rowData;
        let rowItemData = rowData[index];
        try {
          rowData[index].QPS = parseInt(result1[0].dps[Object.keys(result1[0].dps)[0]]/60);
          rowData[index].RT = parseInt(result1[1].dps[Object.keys(result1[1].dps)[0]]);
          rowData[index].QPScontrast = parseInt(result2[0].dps[Object.keys(result2[0].dps)[0]]/60);
          rowData[index].RTcontrast = parseInt(result2[1].dps[Object.keys(result2[1].dps)[0]]);
          this.setState({
            rowData: rowData
          });
        } catch(e) {
          console.error(e);
        }
      }.bind(this));
  }
});
