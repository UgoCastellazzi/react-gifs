import React, { Component } from "react";

import Form from './formsearch.jsx';
import Gif from './gif.jsx';
import Giflist from "./giflist.jsx";
import giphy from "giphy-api";

class App extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          gifs: [],    
          selectedGifId: "MDgEcS8CqqDxB2YClD"
        }
      }
    
    search = (query) => {
      giphy("JREHBp1mriJJ8Uy68nMuUjNQCaIQbAOf").search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        this.setState({
          gifs: res.data
        })
     });
    }

    selectGif = (id) => {
      this.setState({
        selectedGifId: id
      });
    }
  
    render () {
    return (
      <div>
        <div className="left-scene">
          <Form searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    )
  }
}

export default App;
