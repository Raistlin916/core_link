require('normalize.css');
let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let IconButton = mui.IconButton;
let AppBar = mui.AppBar;
let RouteHandler = Router.RouteHandler;
let Link = require('react-router').Link;
var zhuxaing = 12
let NavigationClose = <span>{zhuxaing}</span>;

var ReactAdd = require('react/addons');
var PureRenderMixin = ReactAdd.addons.PureRenderMixin;
//var SvgIcon = require('../../svg-icon');
/*
var NavigationClose = React.createClass({
  displayName: 'NavigationClose',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' })
    );
  }

});
*/
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
        <AppBar 
          title="核心链路数据监控"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>} />
        
        <div style={{width: '1000px', margin: '40px auto'}}>
          <RouteHandler></RouteHandler>
        </div>
      </div>
    )
  },

});


module.exports = App;