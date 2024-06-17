import React, { Component } from 'react'

export default class Songslist extends Component {
    render() {
        let { songUrl, songImages, name, artist, release } = this.props;
        return (
            <div >
                <div className="card" style={{ width: "18rem" }}>
                    <img src={songImages} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name.slice(0, 25)}...</h5>
                        <h6 className="card-text"> {artist}</h6>
                        <p className="card-text"> {release}</p>
                        <a rel='noreferrer' href={songUrl} target="_blank" className="btn btn-primary">Play Song</a>
                    </div>
                </div>
            </div>
        )
    }
}
