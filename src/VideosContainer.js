import React, { Component } from 'react';

class VideosContainer extends Component {

  componentWillReceiveProps(){

  }
  render(){
    return(
      <div className='row'>
      {this.props.videoList && this.props.videoList.length ?
            this.props.videoList.map(function(video){
              return <div className='col-md-4 col-sm-6 col-xs-12' key={video.url}> {video.name} </div>
            })
            :
            <div><span>No videos to display</span></div>
       }
      </div>
    )
  }
}
export default VideosContainer;
/*
<YoutubeVideo />
*/
