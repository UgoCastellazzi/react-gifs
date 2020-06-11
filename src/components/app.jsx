import React, { Component } from "react";

import Form from './formsearch.jsx';
import Gif from './gif.jsx';
import Giflist from "./giflist.jsx";

class App extends Component {
  render () {
    const gifs = [
      { id: "MDgEcS8CqqDxB2YClD" },
      { id: "MDgEcS8CqqDxB2YClD" }
    ];
    return (
      <div>
        <div className="left-scene">
          <Form />
          <div className="selected-gif">
            <Gif id="MDgEcS8CqqDxB2YClD"/>
          </div>
        </div>
        <div className="right-scene">
          <Giflist gifs={gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
