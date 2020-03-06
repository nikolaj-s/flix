import React from 'react';
import styleSheet from './video.css';
import {VideoInfo} from '../Infopage/info';


const x = window.matchMedia("(orientation: portrait)")

export class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoClicked: false,
            infoDisplay: false
        }
        this.onClick = this.onClick.bind(this);
        this.onmouseout = this.onmouseout.bind(this);
        this.onmouseover = this.onmouseover.bind(this);
    }
    showInfo() {
        if (this.state.infoDisplay === true) {
            this.setState({infoDisplay: false})
        } else {
          
        }
    }
    componentWillUpdate(prevProps, prevState) {
        this.showInfo();
    }
    onClick(e) {
        console.log(this.props);
        this.props.changevid(this.props.name, this.props.src)
    }
    onmouseout(e) {
        if (this.state.videoClicked === true) {
        } else {
            const video = e.target;
            video.pause();
        }
    }
    onmouseover(e) {
        if (x.matches) {
        } else {
        const video = e.target;
            video.play();  
        }
    }
    
    render() {
        
        return (
            <div   className="videoBody">
                {this.props.src ? <video onClick={this.onClick}  onMouseOver={this.onmouseover} onMouseOut={this.onmouseout} id="video" className="video" src={this.props.src} muted preload="true" loop/> : <div></div> }
                
                
                <h4 className="videoName">{this.props.name}</h4>
                {this.state.infoDisplay ? <VideoInfo className="info" name={this.props.name} /> : null}
            </div> 
            
        )
    }
}


