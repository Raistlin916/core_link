let Router = require('react-router');
let Route = Router.Route;
let App = require('./app');
let React = require('react');

let MainTable = require('./pages/main_table');
let LinksTable = require('./pages/links_table');
let DetailChart = require('./pages/detail_chart');
let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


// declare our routes and their hierarchy
let routes = (
  <Route handler={App}>
    <Route name="main" path="/" handler={MainTable}/>
    <Route name="links" path="/links/:name" handler={LinksTable}/>
    <Route name="detail" path="/detail/:id" handler={DetailChart}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('main'));
});
