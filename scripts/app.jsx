require('normalize.css');
let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let RouteHandler = Router.RouteHandler;
let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


let App = React.createClass({

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
        <div style={{width: '1000px', margin: '40px auto'}}>
          <RouteHandler></RouteHandler>
        </div>
      </div>
    )
  },

});


module.exports = App;