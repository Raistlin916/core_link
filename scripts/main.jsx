let Router = require('react-router');
let Route = Router.Route;
let App = require('./app');

let MainTable = require('./pages/main_table');
let LinksTable = require('./pages/links_table');
let DetailChart = require('./pages/detail_chart');

// declare our routes and their hierarchy
let routes = (
  <Route handler={App}>
    <Route path="" handler={MainTable}/>
    <Route name="links" path="/links/:name" handler={LinksTable}/>
    <Route name="detail" path="/detail/:id" handler={DetailChart}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.getElementById('main'));
});
