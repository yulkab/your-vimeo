import React, { Component } from 'react';
import './Navbar.css';
import SearchBox from '../SearchBox';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    passQueryString = (query) => {
        this.props.searchSubmit(query);
    }

    render() {
        return (
            <header className="c-header">
                <div className="c-header-wrap p-wrap">
                    <div>
                        <a href="/" className="c-header-logo" title="YourVimeo">
                            <img src="assets/logo.svg" alt="YourVimeo Logo"/>
                            <span>YourVimeo</span>
                        </a>    
                    </div>
                    <div>
                        <SearchBox searchSubmit={this.passQueryString} /> 
                    </div>                                                                                            
                </div>                    
            </header>
        );
    }
}

export default Navbar;