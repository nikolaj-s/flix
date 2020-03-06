import React from 'react';
import './loading.css'
export class Loading extends React.Component {
    render() {
        return (
            <div id="loading">
                <img src="./favicon.ico" alt="loading" />
                <h1>FLIX</h1>
            </div>
        )
    }
}