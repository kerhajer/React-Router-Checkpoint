
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Moredetails from './Moredetails';
import Filmovie from '../Filmovie';
import AboutFilms from './aboutfilms';

const App = () => {


    const [movies, setMovies] = useState(AboutFilms)

	return (

		<Router>
	
		<Routes>
		  <Route path='/' element={<Filmovie movies={movies} setMovies={setMovies}/>}></Route>
		  <Route path='/movies/:idmovie' element={<Moredetails movies={movies}/>}/>
  
		</Routes>
		
	  </Router>
  );
}


export default App;