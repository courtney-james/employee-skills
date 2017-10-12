var React = require('react');


class ProfilePage extends React.Component {
        constructor(props, _railsContext) {
            super(props);
            this.componentDidMount = this.componentDidMount.bind(this);
            this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.state = {profileId: ""};
    }
    componentDidMount () {
        this.setState({profileId: this.props.match.params.profileId});
    }
    componentWillReceiveProps (nextProps) {
        this.setState({profileId: nextProps.match.params.profileId});
    }
    
    render () {
        return (
            <div>
            <h1>Profile Page</h1>
            <h2>Hi, I'm profile number {this.state.profileId}</h2>
            </div>
        );
    }
};

module.exports = ProfilePage;