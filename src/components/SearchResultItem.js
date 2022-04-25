import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchResultItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<p>
      住所: {this.props.address}<br />
      緯度: {this.props.lat}<br />
      経度: {this.props.lng}<br />
    </p>);
  }
}

SearchResultItem.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

SearchResultItem.defaultProps = {
  address: '',
  lat: 0.0,
  lng: 0.0,
};

export default SearchResultItem;

