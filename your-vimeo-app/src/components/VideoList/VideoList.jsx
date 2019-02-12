import React, { Component } from 'react';
import './VideoList.css';
import VideoListItems from '../VideoListItems';

class VideoList extends Component {
    
    handleClick = (e) => {
        e.preventDefault();        
        this.props.searchSubmit('random');
    }
    
    render() {
        const {posts} = this.props;

	    return (
            <div className="app-content p-wrap"> 
                <h2 className="c-list-heading">Results</h2> 
                <div className="c-list">
                    {posts.map((item, i) =>
                        <VideoListItems key={i} posts={item}> </VideoListItems>
                    )}
                </div>
                <div className="c-lucky">
                    <button type="button" onClick={this.handleClick} className="c-lucky-btn btn-invisible">
                            <span className="screen-reader-text">"I'm feeling lucky"</span>
                            I'm feeling lucky
                    </button>
                </div>                
            </div>            
        );
	};
}

export default VideoList;
