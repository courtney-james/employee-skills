var React = require('react');
var NavBar = require('./nav/NavBar.jsx');

var navLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "My Profile",
        href: "/profile/55" 
    },
    {
        title: "Edit Profile",
        href: "/profile/67" 
    }
];

class BasePage extends React.Component {
    render () {

        var style = {
            paddingTop: 20
        }

        return (
            <div>
            <NavBar bgColor="#2c3e50" titleColor="#3097d1" linkStyle="pills" navData={navLinks}/>
            {this.props.children}
            </div>
        );
    }
};

module.exports = BasePage;