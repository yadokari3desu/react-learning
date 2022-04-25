import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ul>
      <li>住所: {this.props.address}</li>
      <li>緯度: {this.props.lat}</li>
      <li>経度: {this.props.lng}</li>
    </ul>);
  }
}

SearchResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

SearchResult.defaultProps = {
  address: '',
  lat: 0.0,
  lng: 0.0,
};

export default SearchResult;

