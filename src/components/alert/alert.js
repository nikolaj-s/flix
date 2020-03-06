import React from 'react';
import './alert.css';

export class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.hideAlert = this.hideAlert.bind(this);
    }
    hideAlert() {
        this.props.hide();
    }
    render() {
            return (
                <div id="alert">
                    <h1>{this.props.errorType}</h1>
                    <h4 onClick={this.hideAlert} className="closeButton">CLOSE</h4>
                </div>
            )
        }
    }
