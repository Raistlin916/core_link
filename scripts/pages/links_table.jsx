let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;
let hack = require('../utils/hack');
let Link = require('react-router').Link;
let ArrowSpan = require('../components/arrow_span');
let TableMixin = require('./table_mixin');

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
      width: '300px'
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


module.exports = React.createClass({
  
  mixins: [TableMixin],

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
                width: '300px'
              }
            };
          } else if (k == 'QPStrend' || k == 'RTtrend') {
            item[k] = {
              content: <ArrowSpan data={item[k]} />
            };
          } else {
            item[k] = {
              content: item[k]
            };
          };
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
  }
});
