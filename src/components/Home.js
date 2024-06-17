// import React, { useState } from 'react'
import Songslist from './Songslist'
import React, { Component } from 'react'

export default class Songs extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
           
            song:[],
            loading:false
        }
    }
    // searches = async () => {
    //     console.log(this.search)
    //     let newText=this.state.search.split(" ");
    //     this.setState({search:newText.join("")})
    //     let url = `https://v1.nocodeapi.com/rautp/spotify/ejxNcuQXtrBlQYPR/search?q=${this.state.search}`
    //     const response = await fetch(url);
    //     var data = await response.json();
    //     console.log(data.albums.items)
    //     this.setState({song:data.albums.items})
    //     this.setState({loading:true})

    // }
    componentDidMount=async()=>
        {
            let url = `https://v1.nocodeapi.com/rautp/spotify/ejxNcuQXtrBlQYPR/search?q=${this.props.searchText}`
            const response = await fetch(url);
            var data = await response.json();
            console.log(data.albums.items)
            this.setState({song:data.albums.items})
        }
  render() {
    return (
        <div className='container my-3'>
{/*             
        <h1 className='text-center'>Song</h1>
        <div className='row justify-content-center my-3'>
            <div className='col-md-6'>
                <div className='input-group'>
        <input className="form-control " type="text" placeholder="Search" onChange={async (e) => { this.setState({search:e.target.value}) }} id='search' aria-label="Search" />
       <div className='input-group-append mx-3'>
        <button className='btn btn-outline-success  my-2 my-sm-0' type='submit' onClick={this.searches} >search</button>
        </div>
        </div>
        </div>
        </div> */}
        <div className='row '>
            {Object.keys(this.state.song).map((element) => {
                console.log(this.state.song)
                return <div className='col-md-4 my-3' key={this.state.song[element].external_urls.spotify}>
                    <Songslist songImages={this.state.song[element].images[0].url} artist={this.state.song[element].artists[0].name} release={this.state.song[element].release_date} name={this.state.song[element].name} songUrl={this.state.song[element].external_urls.spotify} />
                </div>
            })
            // :props.song1.map((element) => {
            //     return <div className='col-md-4 my-3' key={element.external_urls.spotify}>
            //         <Songslist songImages={element.images[0].url} artist={element.artists[0].name} release={element.release_date} name={element.name} songUrl={element.external_urls.spotify} />
            //     </div>})
                }
        </div>
    </div>
    )
  }
}

