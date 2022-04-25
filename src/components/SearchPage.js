import React, {Component} from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchResults from './SearchResults';
import { geocode } from '../domain/Geocoder';
import { withParamsAndNavigate } from '../injectParamsAndNavigate';

class SearchPage extends Component {
  /**
   * constructor
   * @param {*} props
   */
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      address: '',
      lat: 0.0,
      lng: 0.0,
      searchResults: [],
    }
  }

  handleSubmit(place, place2) {
    const{params, navigate} = this.props;
    navigate(`/?q=${place}`);
    console.log(place, place2);
    geocode(place)
    .then(({address, lat, lng, searchResults}) => {
      this.setState({
        address,
        lat,
        lng,
        searchResults,
      });  
    })
    .catch(err => alert(err));
  }

  /**
   * render components
   * @return {Component}
   */
  render() {
    return (<div className='search-page'>
      <h1>緯度経度検索</h1>
      <SearchForm
        onSubmit={(place, place2) => this.handleSubmit(place, place2)}
      />
      <h2>SearchResults[0]</h2>
      <SearchResult
        address={this.state.address}
        lat={this.state.lat}
        lng={this.state.lng}
      />
      <h2>SearchResults</h2>
      <SearchResults results={this.state.searchResults}
      />
    </div>);
  }
}

export default withParamsAndNavigate(SearchPage);
