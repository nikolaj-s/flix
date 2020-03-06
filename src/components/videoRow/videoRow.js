import React from 'react';
import styleSheet from './videoRow.css';
import {Video} from '../videos/videos';
import {NextButton} from '../nextButton/nextButton'
import {PrevButton} from '../prevButton/prevButton'


export class VideoRow extends React.Component {
    constructor(props) {
        super(props);
        
        this.nextVideo = this.nextVideo.bind(this);
        this.prevVideo = this.prevVideo.bind(this);
    }
    nextVideo(array) {
        let video = array;
        video.push(video.shift());
        this.setState({array: video})
    }
    prevVideo(array) {
        let video = array;

        video.push(video.unshift(video.length -1));
        
        this.setState({array: video })
    }
    
    render() {
        
        
        return (
        <div >
            <h3 id="top" className="travel">Videos</h3>
            <div className="row">
            {this.props.array.map(object => {
                return <Video changevid={this.props.changevid} key={object.name} name={object.name} src={object.vid} />
                })}
                
            </div>
                
        </div>
        )
    }
}

