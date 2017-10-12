var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;

class HomePage extends React.Component {
    render () {
        return (
            <div>
                <h1>Home Page</h1>
                <ul>
                    <li><Link to="/profile/55">My Profile</Link></li>
                    <li><Link to="/profile/67">Edit Profile</Link></li>
                </ul>
            </div>
        );
    }
};

module.exports = HomePage;