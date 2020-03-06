import React from 'react';
import './search.css'
export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        let value = e.target.value;
        this.props.onSearch(value);
    }
    render() {
        return (<input onChange={this.onChange} className="searchbar" placeholder='search' type="text" />)
    }
}