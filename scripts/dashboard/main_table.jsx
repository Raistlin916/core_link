let React = require('react');
let mui = require('material-ui');
let Table = mui.Table;

module.exports = React.createClass({
  render: function () {
    let rowData = [
      {linkName: {content: '注册'}, QPS: {content:'1000'}, trend: {content: '10%'}, RT: {content:'0.5'} },
      {linkName: {content: '下单'}, QPS: {content: '1500'}, trend: {content: '5%'}, RT: {content:'0.3'} },
      {linkName: {content: '商品市场'}, QPS: {content: '1200'}, trend: {content: '5%'}, RT: {content:'0.4'} },
    ];


    //转换数字
    function wrapNum() {
      rowData.forEach(function(item) {
        for(var key in item){
          var value = item[key].content;
          if(React.Children.count(value) === 1){
            if(!isNaN(value)){
              value = <span>{value}</span>;
            }
          }
          item[key].content = value;
        }
      })
    };
    wrapNum(rowData);
    
    // State
    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: false,
      deselectOnClickaway: true,
      displayRowCheckbox: false,
      displaySelectAll: false,
      height: '300px',
      rowData: rowData
    };

    // Column configuration
    let headerCols = {
      linkName: {
        content: '核心链路'
      },
      QPS: {
        content: 'QPS'
      },
      trend: {
        content: '趋势'
      },
      RT: {
        content: 'RT'
      }
    };
    let colOrder = ['linkName', 'QPS', 'trend', 'RT'];

    return (
        <Table
        headerColumns={headerCols}
        columnOrder={colOrder}
        {...this.state} />
      )
  }
});
