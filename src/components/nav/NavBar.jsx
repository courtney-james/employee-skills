var React = require('react');
var NavItem = require('./NavItem.jsx');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;

class NavBar extends React.Component{
    render () {

        var navStyle = {
            WebkitBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        };

        if (this.props.bgColor)
            navStyle.background = this.props.bgColor;

        var linkStyle = {}
        var titleStyle = {}

        if (this.props.linkColor)
            linkStyle.color = this.props.linkColor;

        if (this.props.titleColor)
            titleStyle.color = this.props.titleColor;

       function createLinkItem(item, index) {
            return <NavItem key={index} href={item.href} title={item.title} aStyle={linkStyle} />;
        };

        return (
            <div>
                <nav style={navStyle} bsStlye="pills" className="navbar-default">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link style={titleStyle} className="navbar-brand" to="/">TCC Software Solutions</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
                    </div>
                </nav>
            </div>
        );
    }
};

module.exports = NavBar;

