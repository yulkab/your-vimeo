import React, { Component } from 'react';
import Navbar from '../Navbar';
import VideoList from '../VideoList';
import './App.css';

const API = 'https://api.vimeo.com/videos?sort=likes';
const TOKEN = '&access_token=85aad4903a5917596e768ee253e6b9ab';
const DEFAULT_QUERY = '&query=';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], // API response data
            posts: [], // selected data for render
            n: 3, // number of videos to render
            query: '', // value from search input
            error: false,            
            isLoading: false
        };
    }
    
    // componentDidMount() {
    //     console.log('App.js componentDidMount')
    // }

    onSearchSubmit = (value) => {  
        this.setState({ isLoading: true , query: '', posts: [], error: false })     

        if(value === 'random') { //check if the "I'm feeling lucky" button has been clicked
            this.setState({ query: '' }, this.rerenderVData) 
            return false
        }

        this.setState({ query: value }, this.fetchVData) 
    }

    rerenderVData = () => {        
        if (this.state.n > this.state.data.length) { // check if more elements taken than available
            this.setState({ error: true, isLoading: false })
            return 
        }            
        let shuffled = this.state.data.sort(() => .5 - Math.random());// shuffle 
        let selected = shuffled.slice(0,this.state.n) ; //get sub-array of first n elements AFTER shuffle
        this.setState({posts: selected, isLoading: false })
    }

    fetchVData = () => {
        fetch(API+TOKEN+DEFAULT_QUERY+this.state.query, 
            {
                method: 'get',
                headers: { 'Accept': 'application/json'
            }		    
        })
        .then((response) => {            
            if (response.ok) {
                return response.json();
              } else {
                this.setState({ error: true, isLoading: false, query: '' })                
              }
        }) 
        .then(response => {
            let selected = response.data.slice(0,this.state.n) ; //get sub-array of first n element
            this.setState({ data: response.data, posts: selected, isLoading: false, query: '' })
        })
        .catch((error) => {
            this.setState({ error: true, isLoading: false, query: '' })
        })
      }

    render() {
        const appMessage = <div className="c-app-message p-wrap">{ this.state.error ? <p>There was a problem retrieving the videos. Please try again later.</p> : <p>There are currently no results.</p>}</div>
        const videoList = <VideoList  searchSubmit={this.onSearchSubmit} posts={this.state.posts} />        
        const loading = <div className="c-loading">Loading&#8230;</div>

        return (
            <div className="app-container">
                <div className="app-nav">
                    <Navbar searchSubmit={this.onSearchSubmit} />
                </div>
                <main>               
                    {this.state.isLoading ? loading : null}                  
                    {this.state.posts.length ? videoList : appMessage} 
                </main>                            
            </div>
        );
    }
}

export default App;