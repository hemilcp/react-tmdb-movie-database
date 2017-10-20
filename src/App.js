import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      movieID: 550
    }
  }

  render() {
    return (
        <div>
          <Card data={this.state} />
          Hello world
        </div>
      );
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    
  }

  fetchApi(url){

    fetch(url).then((res) => res.json()).then((data) => {
      this.setState({
        movieID: data.id,
        original_title: data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        homepage: data.homepage,
        poster: data.poster_path,
        production: data.production_companies,
        production_countries: data.production_countries,
        genre: data.genres,
        release: data.release_date,
        vote: data.vote_average,
        runtime: data.runtime,
        revenue: data.revenue,
        backdrop: data.backdrop_path
      })
    });
  }

  fetchMovieID(movieID){
    let url = 'https://api.themoviedb.org/3/movie/${movieID}?&api_key=f27c71861f12d7410195cd681a70fa8b'
    this.fetchApi(url);
  }

  componentDidMount(){
    let url = 'https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=f27c71861f12d7410195cd681a70fa8b'
    this.fetchApi(url);
  }
}

export default App;
