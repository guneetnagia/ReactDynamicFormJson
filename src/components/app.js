import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Questions from '../containers/Questions';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Submit a Clearance Request" />
        <Questions />
        <Footer title="" />
      </div>
    );
  }
}
