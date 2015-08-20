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
    content: '核心链路',
    style: {
      width: '40px'
    }
  },
  feature: {
    content: '功能点',
    style: {
      width: '100px'
    }
  },
  URL: {
    content: 'URL',
    style: {
      width: '200px'
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
  },
  URT: {
    content: 'URT'
  },
  URTtrend: {
    content: '趋势'
  }
};
let colOrder = ['core', 'feature', 'URL', 'RT', 'RTtrend', 'URT', 'URTtrend', 'QPS', 'QPStrend'];
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
      let id = item.id;
      item.QPStrend = ~~((1 - item.QPScontrast/item.QPS) * 100);
      item.RTtrend = ~~((1 - item.RTcontrast/item.RT) * 100);
      item.URTtrend = ~~((1 - item.URTcontrast/item.RT) * 100);

      Object.keys(item).forEach(function (k) {
        if (k == 'feature') {
          item[k] = {
            content: <Link to="detail" params={{id: id}}>{item[k]}</Link>,
            style: {
              width: '100px'
            }
          };
        } else if (k == 'QPS' || k == 'RT' || k == 'URT') {
          item[k] = {
            content: item[k] == null ? <span>null</span> : item[k]
          };
        } else if(k == 'URL') {
          item[k] = {
            content: item[k],
            style: {
              width: '200px'
            }
          };
        } else if (k == 'QPStrend' || k == 'RTtrend' || k == 'URTtrend') {
          item[k] = {
            content: <ArrowSpan data={item[k]} reverse={k=='QPStrend'}/>
          };
        } else if (k == 'core') {
          item[k] = {
            content: item[k],
            style: {
              width: '40px'
            }
          };
        } else {
          item[k] = {
            content: item[k]
          };
        };

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
