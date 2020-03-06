import React from 'react'
import styleSheet from './settingspage.css';
import {postVideo, retrieveVideos} from '../videoList/videoList';
import {Alert} from '../alert/alert';
const axios = require('axios');




export class SettingsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {alert: 'no', message: '', preview: ''}
        this.savingFile = this.savingFile.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.videoPreview = this.videoPreview.bind(this);
    }
    savingFile(e) {
        e.preventDefault();
        let file = document.getElementById('newvideo').files[0];
        let url = document.getElementById('newvideo').value;
        if (!url.endsWith('mp4')) {
            this.setState({alert: 'yes', message: 'File Type Not Supported', preview: ''});
            e.preventDefault();
            
            
        } else {
            let formdata = new FormData();
            formdata.append("video", file);
            axios({
                url: 'http://localhost:3005/api/videos',
                method: "POST",
                data: formdata,
                'Content-Type': 'multipart/form-data'
            }).then((response) => {
                console.log(response);
                if (response.ok) {
                    console.log(response);
                    
                }
                
            })

            
        }
        
    }
    videoPreview() {
        let video = document.getElementById('newvideo').files[0].name;
        this.setState({preview: video});
    }
    hideAlert() {
        this.setState({alert: 'no'})
    }
    render() {
        
      
            return (
                <div className="settingspage">

                    {this.state.alert === 'yes' ? <Alert hide={this.hideAlert} errorType={this.state.message} state={this.state.alert} /> : null}
                    <h2>Settings</h2>
                    <h1>Selected Video: </h1>
                    <h1>{this.state.preview}</h1>
                    <form className="savevid" encType="multipart/form-data">
                        <input onChange={this.videoPreview} name="file" id="newvideo" type="file" multiple />
                        
                        <label for="newvideo" className="fileupload" >Select Video</label>
                        <input onClick={this.savingFile} id="upload" type="submit"  value="UPLOAD"></input>
                    </form>
                </div>
            )
   
      
    }
}
