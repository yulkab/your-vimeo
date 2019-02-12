import React, { Component } from 'react';
import {timeSince} from './../../utils/timeSince';
import './VideoListItems.css';

class VideoListItems extends Component {

    render(){	
		const {posts} = this.props,
		 	title = posts.name,
			bgImg = {backgroundImage: 'url(' + posts.pictures.sizes[1].link + ')'},
			link = posts.link,
			channelTitle = posts.user.name,
			channelUrl = posts.user.link,
			created = timeSince(posts.created_time)

	    return (
			<div className="c-list-item">
				<a href={link} target="_blank" className="c-list-item--img" title="Go to the Video">
					<div role="img" aria-label="The Video Snapshot." style={bgImg}>							
						{/* <img alt={title} src={imgUrl} /> */}						
					</div>
				</a>	
				<div className="c-list-item--text">	
					<h3>{title}</h3>
					<a href={channelUrl} target="_blank"  title="Go to the Video">{channelTitle}</a>					
					<div>
						<span>466M views</span>
						<span><span className="m-hide"> posted </span><span className="m-show"> - </span> {created} ago</span>						
					</div>									
				</div>			
			</div>
		);
	}
}

export default VideoListItems;
