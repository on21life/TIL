import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = async keyword => {
    const response = await unsplash.get("/search/photos", {
      params: { query: keyword }
    });
    this.setState({ images: response.data.results }, () => {
      // console.log(this.state.images);
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
