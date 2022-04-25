import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './SearchResultItem';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<ol>{this.props.results.map((item, idx) => {
        return <li key={idx}><SearchResultItem address={item.address} lat={item.lat} lng={item.lng} /></li>
    })}</ol>);
  }
}

SearchResults.propTypes = {
  results: PropTypes.array,
};

SearchResults.defaultProps = {
  results: [],
};

export default SearchResults;

