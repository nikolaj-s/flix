import React from 'react';
import styleSheet from './header.css'
import icon from './filmx.png'
import {SettingsButton} from '../settingsButton/settingsButton'
import {Search} from '../search/search'

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>FLI<img className="film" src={icon} alt="X"/></h1>
                <Search onSearch={this.props.onSearch} />
                <SettingsButton />
            </div>
        )
    }
}