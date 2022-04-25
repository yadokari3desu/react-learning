import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
      place2: 'hoge',
    };
  }

  handlePlaceChange(event) {
    this.setState({
      place: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.place, this.state.place2);
  }

  render() {
    return (<form onSubmit={event => this.handleSubmit(event)}>
      <input type="text" value={this.state.place} onChange={event => this.handlePlaceChange(event)} />
      <button type="submit">検索</button>
    </form>);
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
