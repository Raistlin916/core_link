let React = require('react');
let Dashboard = require('./dashboard/dashboard');
let injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

React.render(
  <Dashboard/>,
  document.getElementById('main')
);