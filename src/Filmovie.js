import MovieList from './component/MovieList';
import Addmovie from './component/addmovie';
import Filtre from './component/filtre';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';
import SelectGenre from './component/SelectGenre';


const Filmovie = ({ movies, setMovies }) => {

	const [favourites, setFavourites] = useState([]);
    const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
	};

    const AddNewmovie = (x) => {
        setMovies([...movies, x]);
    };

    const [search, setSearch] = useState("")
    const [genre, setGenre] = useState("")

    const [rate, setRate] = useState(0)
    return (

        <div className='container-fluid movie-app'>
            <div className='row'>
                <Navbar bg="dark" variant="dark">
                    <Container style={{ margin: '0' }}>
                        <Navbar.Brand style={{ color: 'red' }} href="#home" > 
                        <img
                            alt="Pop Corn in red box"
                            src="/cinema.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"/>FILMY</Navbar.Brand>
                       
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/New">New</Nav.Link>
                            <Nav.Link as={Link} to="/">My list</Nav.Link>
                        </Nav>

                        <Filtre search={setSearch} rate={setRate} />
                    </Container>
                </Navbar>
                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px' }} >

                    <Addmovie AddNewmovie={AddNewmovie} />
                    <span>Films</span >
                    <SelectGenre movies={movies} genre={setGenre} />

                </div>
                <MovieList  	
					addFavouriteMovie={addFavouriteMovie}
                 movies={movies.filter(movie => movie.Title.toLocaleLowerCase().includes(search) && movie.Rate >= rate && movie.Type.includes(genre))} />
              <div className='row d-flex align-items-center mt-4 mb-4'>
			         <h1>   Favourites</h1>
			   </div>
			   <div className='row'>
				<MovieList  movies={favourites} />
			    </div>

            </div>



        </div>
    );
};
export default Filmovie;