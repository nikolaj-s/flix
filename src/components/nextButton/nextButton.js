import React from 'react';
import styleSheet from './nextButton.css'


export class NextButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onClick(this.props.array)
        
    }
    render() {
        return (
            <h2 onClick={this.onClick} className="nextButton">&#8594;</h2>
        )
    }
}