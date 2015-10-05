var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, RouteHandler, Link} = require('react-router');
var Home = require('./home');
var About = require('./about');



var App = React.createClass({
  render: function () {
    return (
      <div className="grid-frame vertical">
        <div className="title-bar">
          <div className="center title"><a ui-sref="home" href="#!/">zMusic</a></div>
          <span className="left hide-for-medium"><a zf-toggle="sub-nav">Menu</a></span>
          <span className="right"><a ui-sref="settings" href="#!/settings">Sunny Singh</a></span>
        </div>
        <div className="grid-block" zf-closable="panel">
          <div className="grid-block medium-1">
            <ul className="icon-left primary menu-bar vertical condense">
              <li><Link to="home"><span className="fi-social-twitter"></span>Playlists</Link></li>
              <li><Link to="about">Artists</Link></li>
              <li><a href="#">Songs</a></li>
            </ul>
          </div>
          <div className="grid-block medium-11">
            <div className="grid-content">
              <RouteHandler />
            </div>
          </div>
        </div>
      </div>
      // <div id="header" className="shrink collapse grid-content">
      //   <ul className="menu-bar primary">
      //     <li className="hide-for-medium"><a zf-open="sidebar" href="#">Menu</a></li>
      //     <li><a href="#">Link 1</a></li>
      //     <li><a href="#">Link 2</a></li>
      //     <li><a href="#">Link 3</a></li>
      //   </ul>
      // </div>
      // <div className="grid-content">
      //   <div className="grid-container">
      //     <ul className="menu-bar vertical">
      //       <li><a><strong>React Foundation Apps</strong></a></li>
      //       <li><Link to="home">Home</Link></li>
      //       <li><Link to="about">About</Link></li>
      //     </ul>
      //     <RouteHandler />
      //   </div>
      // </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='home' handler={Home}/>
    <Route name='about' handler={About}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

 //React.render(<App />, document.getElementById('app'));

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.body);
});
