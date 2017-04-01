import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import VideosContainer from './VideosContainer';
import {youtubeVideos} from './videoData';
import SearchBar from './SearchBar';

console.log('videoData=',youtubeVideos.items);

class AppHeader extends Component {
  constructor(){
    super();
  }
  render(){
    return(
    <div className="App-header">
      <img src={this.props.pictureURL} className="App-logo" alt="logo" />
      <h2>{this.props.headerText}</h2>
    </div>
    );
  }
}
class App extends Component {
  constructor(){
    super();
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {
      showLogin: true,
      pictureURL: logo
    }
  }
  isLoggedIn(response){
    let pictureURL = response.picture.data.url;
    let name = response.name;
    console.log(response);
    this.setState({showLogin: false, pictureURL: pictureURL,name:name});
  }
  render() {

    let headerText = "Youtube Clone";
    return (
      <div className="App">
        <AppHeader pictureURL={this.state.pictureURL} headerText={headerText}  />
        <div className="App-body fill">
          {this.state.showLogin && <Login isLoggedIn={this.isLoggedIn} /> }
          {(!this.state.showLogin) && <span> Welcome {this.state.name} </span> }
          <hr/>
          {(!this.state.showLogin) &&
            <div>
              <SearchBar />
              
             <VideosContainer videoList={youtubeVideos.items}  />
            </div>

           }
        </div>
      </div>

    );
  }
}

export default App;
