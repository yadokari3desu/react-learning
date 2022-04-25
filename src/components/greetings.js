import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Greetings class component
 */
class Greetings extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  /**
   * handle on click event
   */
  handleOnClick() {
    this.setState({count: this.state.count+1});
  };

  /**
   * render
   * @param {*} props
   * @return {Component}
   */
  render() {
    return (<div onClick={() => this.handleOnClick()}>
      Hello, {this.props.name}: {this.state.count}
    </div>);
  }
}

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greetings;
