require('normalize.css');
let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let IconButton = mui.IconButton;
let RouteHandler = Router.RouteHandler;
let Link = require('react-router').Link;


var ReactAdd = require('react/addons');
var PureRenderMixin = ReactAdd.addons.PureRenderMixin;
var NavigationClose = React.createClass({
  displayName: 'NavigationClose',

  mixins: [PureRenderMixin],

  render: function () {
    var contentStyle = {
      backgroundImage:'url(http://dn-kdt-static.qbox.me/v2/image/intro/logo@2x.png)',
      height:'24px',
      width: '60px',
      backgroundSize: 'cover'
    };
    return (
     <div style={contentStyle}></div>
    )
  }

});

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

    var toMainPage = function () {
      location.hash = '#';
    };

    var mainStyle = {
      width: '1000px',
      margin: '40px auto'
    };
    return (
      <div style={contentStyle}>
        <AppBar 
          title="核心链路数据监控" 
          iconElementLeft={<IconButton><NavigationClose /></IconButton>} 
          onLeftIconButtonTouchTap={toMainPage}/>
        
        <div style={mainStyle}>
          <RouteHandler></RouteHandler>
        </div>
      </div>
    )
  },

});


module.exports = App;