import Songslist from './Songslist'
import React, { Component } from 'react'

export default class Songs extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            song: [],
            loading: false
        }
    }
    componentDidMount = async () => {
        let url = `https://v1.nocodeapi.com/rautp/spotify/ejxNcuQXtrBlQYPR/search?q=${this.props.searchText}`
        const response = await fetch(url);
        var data = await response.json();
        console.log(data.albums.items)
        this.setState({ song: data.albums.items })
    }
    render() {
        return (
            <div className='container my-3'>
                <div className='row '>
                    {Object.keys(this.state.song).map((element) => {
                        console.log(this.state.song)
                        return <div className='col-md-4 my-3' key={this.state.song[element].external_urls.spotify}>
                            <Songslist songImages={this.state.song[element].images[0].url} artist={this.state.song[element].artists[0].name} release={this.state.song[element].release_date} name={this.state.song[element].name} songUrl={this.state.song[element].external_urls.spotify} />
                        </div>
                    })
                    }
                </div>
            </div>
        )
    }
}

