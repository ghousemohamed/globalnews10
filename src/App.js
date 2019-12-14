import React from 'react';
import './App.css';

import NewsCollection from './NewsCollection';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      response: false,
      input: '',
      newsArray: [],
      page: 1
    }
  }
  fetchResponse =() => {
    fetch('http://localhost:3000/pass', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              input: this.state.input,
              page: this.state.page
            })
          })
            .then(response => response.json())
            .then(data => this.setState({newsArray: data.articles}, ()=> {console.log('Logging Now')}))
            .catch(err => console.log(err));
  }  
  refrshResponse =() => {
    fetch('http://localhost:3000/pass', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
              input: '',
              page: this.state.page
            })
          })
            .then(response => response.json())
            .then(data => this.setState({newsArray: []}, ()=> {this.fetchResponse()}))
            .catch(err => console.log(err));
  }

  getResponse = (event) => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    if(this.state.input.length){
      console.log('this side up');
      this.setState({response: true})
      this.fetchResponse();
      event.preventDefault();
      
    }
    else{
      console.log('this side down')
      this.setState({response: false})
    }
}

getNext = () => {
  if(this.state.input.length){
    console.log('this side up');
    this.setState({response: true})
    this.fetchResponse();
    
  }
  else{
    console.log('this side down')
    this.setState({response: false})
  }
}

onInputChange =(event) => {
  this.setState({input: event.target.value});

}
onClick = () => {
  console.log('Does not refreshh');
}
pageClickNext = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
  this.setState({page: this.state.page+1}, ()=> { this.getNext()});
  
}
pageClickPrevious = () => {
  if (this.state.page === 1){

  }
  else{
    window.scrollTo({top: 0, behavior: 'smooth'});
    this.setState({page: this.state.page-1}, ()=> {this.getNext()});
  }
}
  render(){
    return(
      <div>
      <div></div>
        <nav className="navbar fixed-top navbar-expand-lg navbarmain">
    <p className='para' onClick={this.onClick}>GLOBAL NEWS 10</p>
    {this.state.response === true ? <form className="center form-inline my-2 my-lg-0">
    <button type="button" className="btn btn-outline-dark mr2 ma2" onClick={this.pageClickPrevious}>Previous</button>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onInputChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.getResponse}>Search</button>
      <button type="button" className="btn btn-outline-dark mr2 ma2" onClick={this.pageClickNext}>Next</button>
    </form>: 
    <form className="center form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onInputChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.getResponse}>Search</button>
    </form>}
    <button type="button" className="btn btn-outline-success btnsuc">Sign In</button>
</nav>
<div className="navdiv"></div>
      {this.state.response ? <NewsCollection input={this.state.input} newsArray={this.state.newsArray}/>:<div></div>}
    {this.state.response ? <div></div> : <article className='vh-100 dt w-100'><div className='dtc v-mid tc white ph3 ph4-l'><h1 className='f6 f2-m f-subheadline-l fw6 tc'>Search for the latest news sorted by relevance, popularity, source and keywords.</h1></div></article>}

      </div>

    );
  }
}

export default App;

