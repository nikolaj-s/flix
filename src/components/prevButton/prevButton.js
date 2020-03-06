import React from 'react';
import styleSheet from './prevButton.css'

export class PrevButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onClick(this.props.array)
    }
    render() {
        return (<h2 onClick={this.onClick} className="prevButton">&#8592;</h2>)
    }
}