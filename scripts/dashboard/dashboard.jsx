require('normalize.css');
require('./dashboard.css');
let React = require('react');
let mui = require('material-ui');
let MainTable = require('./main_table');
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;

let Dashboard = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render: function () {

    return (
      <div>
        <AppBar title="核心链路数据监控" />
        <div style={{margin: '20px auto', width: '1000px'}}>
          <MainTable/>
        </div>
      </div>
    )
  },

});


module.exports = Dashboard;