import React, { Component } from 'react'
import Social from './Social'
import WorkHistory from './WorkHistory'
import Header from './Header'
import UnderConstruction from './UnderConstruction'
import CurrentPosition from './CurrentPosition'
import SubHeader from './SubHeader'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header name="Krs Joseph" title="Developer"/>
        <SubHeader />
        <UnderConstruction />
        <CurrentPosition title="Lead Developer" company="Infotech Caribbean" />
        <WorkHistory />
        <Social />
        <p>Find the code for this site here: <a href="https://github.com/krsjoseph/krsjoseph.com">Github Repo</a></p>
      </div>
    );
  }
}

export default App
