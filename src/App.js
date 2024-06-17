
import Navbar from './components/Navbar';
import Songs from './components/Songs';
import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            search: "",
            search1:"",
            progress:0
        }
    }
    searches = async () => {
        console.log(this.state.search1)
        let newText = this.state.search1.split(" ");
        this.setState({ search: newText.join("") })

    }
    setProgress=(progress)=>
    {
        this.setState({progress:progress})
    }
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                   
                    <div className='container'>
                    <LoadingBar color='#f11946'
                    height={3}
                    progress={this.state.progress}
                    />
                        <h1 className='text-center'>Song <span style={{color:'green'}}>{this.state.search}</span></h1>
                        <div className='row justify-content-center my-3'>
                            <div className='col-md-6'>
                                <div className='input-group'>
                                    <input className="form-control " type="text" placeholder="Search" onChange={async (e) => { this.setState({ search1: e.target.value }) }} id='search' aria-label="Search" />
                                    <div className='input-group-append mx-3'>
                                        <Link to="/search" ><button className='btn btn-outline-success  my-2 my-sm-0' type='submit' onClick={this.searches} >search</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Routes>
                        <Route path='/search' element={<Songs key={this.state.search} setProgress={this.setProgress} searchText={this.state.search} />} />
                        <Route path='/' element={<Songs key={"latest"} setProgress={this.setProgress} searchText={"latest"} />} />
                    </Routes>

                </Router>


            </div>
        )
    }
}
