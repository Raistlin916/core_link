require('normalize.css');
let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let RouteHandler = Router.RouteHandler;
let Link = require('react-router').Link;


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
    var contentStyle = {
      'fontFamily': "PingHei, STHeitiSC-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    };
    return (
      <div style={contentStyle}>
        <AppBar title="核心链路数据监控"/>
        
        <div style={{width: '1000px', margin: '40px auto'}}>
          <RouteHandler></RouteHandler>
        </div>
      </div>
    )
  },

});


module.exports = App;