
// import './App.css';
import Navbar from './components/Navbar';
import Songs from './components/Songs';
import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
export default class App extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
            search:""
        }
    }
    searches = async () => {
        console.log(this.search)
        let newText=this.state.search.split(" ");
        this.setState({search:newText.join("")})

    }
  render() {
    return (
        <div>
            <Router>
                <Navbar/>
                <div className='container'>
            <h1 className='text-center'>Song</h1>
        <div className='row justify-content-center my-3'>
            <div className='col-md-6'>
                <div className='input-group'>
        <input className="form-control " type="text" placeholder="Search" onChange={async (e) => { this.setState({search:e.target.value}) }} id='search' aria-label="Search" />
       <div className='input-group-append mx-3'>
       <Link to="/search" ><button className='btn btn-outline-success  my-2 my-sm-0' type='submit' onClick={this.searches} >search</button></Link>
        </div>
        </div>
        </div>
        </div>
        </div>
                <Routes>
                    {/* <Route path='/' element={<Navbar  />}/> */}
                    <Route path='/search' element={ <Songs  searchText={this.state.search}/>}/>
                   <Route path='/' element={<Home searchText={"latest"}/>}/>
                </Routes>
               
            </Router>
        
       
      </div>
    )
  }
}
