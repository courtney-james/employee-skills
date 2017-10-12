var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;



var Base = require('./components/BasePage.jsx');
var Home = require('./components/HomePage.jsx');
var Profile = require('./components/ProfilePage.jsx');

var Routes = (
    <Router>
        <div>
            <Route path="/" component={Base} />
            <Route exact path="/" component={Home} />
            <Route path="/profile/:profileId" component={Profile} />
        </div>
    </Router>
);

module.exports = Routes;
