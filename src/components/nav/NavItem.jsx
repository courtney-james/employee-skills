var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;

class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = { hover: false };
    }
    
    mouseOver(e) {
        this.setState({ hover:true });
    }
    mouseOut(e) {
        this.setState({ hover:false });
    }

    render () {
        return (
            <li className={this.state.hover ? "active" : ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <Link style={this.props.aStyle} to={this.props.href}>{this.props.title}</Link>
            </li>
        );
    }
};

module.exports = NavItem;