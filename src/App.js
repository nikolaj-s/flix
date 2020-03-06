import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/header'
import {VideoRow} from './components/videoRow/videoRow'
import {Videos, retrieveVideos} from './components/videoList/videoList'
import {Player} from './components/playerComponent/player';
import {Loading} from './components/loading/loading'
export class App extends React.Component {
  constructor(props) {
    let randomIndex = Math.floor(Math.random() * (Videos.length -1))
    console.log(randomIndex);
    super(props);
    this.state = {loading: true, vids: Videos, defaultVid: Videos[randomIndex].vid, defaultvidName: Videos[randomIndex].name}
    this.findVideo = this.findVideo.bind(this);
    this.currentvideo = this.currentvideo.bind(this);
  }
  findVideo(data) {
    let array = Videos;
    
    let newArray = [];
    array.find((video) => {
      
      if (video.name.startsWith(data)) {
        
       newArray.push(video);
        
      }
    })
    
      this.setState({vids: newArray})
    
    
  }
  currentvideo(name, video) {
    this.setState({defaultVid: video, defaultvidName: name});
  }
  componentWillMount() {
    
  }
  async componentDidMount() {
    let vids = await retrieveVideos().then(() => {
      this.setState({loading: false});
    })
    Videos.splice(0, 1);
    
    
    
  }
    
    
  
  render() {
    console.log(this.state.vids);
    return (
    this.state.loading ? <Loading /> :
      <div className="App">
        <Router>
          <Header onSearch={this.findVideo} />
          <div className="mainpage">
            <Player title={this.state.defaultvidName} video={this.state.defaultVid} />
            <VideoRow changevid={this.currentvideo} array={this.state.vids} />
          </div>
          
            
          }
        </Router>
    </div>
    )
  }
    
}



export default App;
