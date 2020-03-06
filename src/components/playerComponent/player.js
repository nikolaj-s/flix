import React from 'react';
import './player.css';

export class Player extends React.Component {
    
    render() {
        return (
            <div className="videoplayer">
                <video controls className="vidplayer" src={this.props.video} />
                <h2 className="vidplayerTitle">{this.props.title}</h2>
            </div>
        )
    }
}