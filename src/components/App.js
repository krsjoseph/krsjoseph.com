import React, { Component } from 'react'
import Social from './Social'
import Work from './WorkHistory'
import Header from './Header'
import UnderConstruction from './UnderConstruction'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header name="Krs Joseph" title="Developer"/>
        <p>This site is <em><b>"under construction"</b></em> and <em><b>may</b></em> not ever be completed.</p>
        <UnderConstruction />
        <p>Currently Lead Developer @ Infotech Caribbean</p>
        <p>Past</p>
        <Work />
        <p>Find me on:</p>
        <Social />
        <p>Find the code for this site here: <a href="https://github.com/krsjoseph/krsjoseph.com">Github Repo</a></p>
      </div>
    );
  }
}

export default App
