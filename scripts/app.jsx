require('normalize.css');
let React = require('react');
let Router = require('react-router');
let mui = require('material-ui');
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar;
let IconButton = mui.IconButton;
let RouteHandler = Router.RouteHandler;
let Link = require('react-router').Link;


let NavigationClose = React.createClass({

  goIndex: function() {
    window.location.hash = '';
  },

  render: function () {
    let contentStyle = {
      backgroundImage:'url(./images/logo@2x.png)',
      height: '35px',
      width: '30px',
      backgroundSize: 'cover',
      position: 'relative',
      top: '-5px'
    };

    return (
     <div style={contentStyle} onClick={this.goIndex}></div>
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
    let contentStyle = {
      'fontFamily': "PingHei, STHeitiSC-Light, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    };

    let toMainPage = function () {
      location.hash = '#';
    };

    let mainStyle = {
      width: '1200px',
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