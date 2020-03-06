import React from 'react';
import styleSheet from './settingsButton.css';
import settingsIcon from './settingicon.png';
import {SettingsPage} from '../settingspage/settingspage';

export class SettingsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.clicked === false) {
            console.log('is this working')
            this.setState({clicked: true})
        } else {
            
            this.setState({clicked: false})
        }
    }
    render() {
        return (
            <React.Fragment>
            
            <img onClick={this.handleClick} id="settingsButton" src={settingsIcon} alt="settings" />
            {this.state.clicked ? <SettingsPage /> : null}
            </React.Fragment>
        )
    }
}