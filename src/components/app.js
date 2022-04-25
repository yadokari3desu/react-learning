import React, {Component} from 'react';
import Greetings from './greetings';

/**
 * class App component
 */
class App extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      name: 'Clicker',
    };
  }

  /**
   * handle name change event
   * @param {string} name
   */
  handleNameChange(name) {
    this.setState({
      name,
    });
  }

  /**
   * render components
   * @return {Component}
   */
  render() {
    return (<div>
      <input
        type="text"
        value={this.state.name}
        onChange={(event) => this.handleNameChange(event.target.value)}
      />
      <Greetings name={this.state.name} />
    </div>);
  }
}

export default App;
