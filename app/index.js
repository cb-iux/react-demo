var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI

/*
class App extends React.Component {
  render() {
    return (
      <div>
        REACT DEMO!
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
*/


class HelloUser extends React.Component {
  render() {
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
}
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
