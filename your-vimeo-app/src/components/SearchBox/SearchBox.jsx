import React, { Component } from 'react';
import './SearchBox.css';
class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {query: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({query: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchSubmit(this.state.query);
    }

    render() {
        return (
            <div className="c-form">
                <form onSubmit={this.handleSubmit}>
                <label className="screen-reader-text" id="search-label" htmlFor="search-input">Search for:</label>
                    <input
                        type="text"
                        value={this.state.query}
                        name="search-input"
                        id="search-input"
                        aria-labelledby="search-label"
                        placeholder="Find your favourite videos..."
                        onChange={this.handleChange} />

                    <button type="submit" className="c-form--submit btn-invisible">
                        <span className="screen-reader-text">Search</span>
                        <img src="assets/search.svg" alt="search button"/>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBox;