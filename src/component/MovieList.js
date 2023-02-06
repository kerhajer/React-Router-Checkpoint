import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
const MovieList = ({ movies, addFavouriteMovie }) => {

	return (
		<div style={{ display: 'flex', justifyContent: 'start' }}>
			{movies.map((movie) => (
				<div className='image-container d-flex justify-content-start m-3'>

					<Card className="bg-dark text-white" style={{ width: '300px', higth: '400px' }} >
						<Card.Img style={{ higth: '300px' }} src={movie.Poster} />
						<div
							onClick={() => { { addFavouriteMovie(movie) } }}
							className='overlay d-flex align-items-center justify-content-center'>
								
							<span className='mr-2'> add to favorites </span>
							<svg
								width='1em'
								height='1em'
								viewBox='0 0 16 16'
								class='bi bi-heart-fill'
								fill='red'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
								/>
							</svg>


						</div>
						<span style={{ display: 'flex', gap: '30px' }}>               <Card.Title >{movie.Type}</Card.Title>
							<Card.Title       >   {movie.Year}  </Card.Title></span>

							<Box style={{ display: 'flex', gap: '30px' }} sx={{ width: 500 }}>
							<BottomNavigationAction as={Link} to={`/movies/${movie.imdbID}`} label="PLAY" icon={<PlayCircleFilledIcon style={{ color: 'white' }} />} />


							<BottomNavigationAction as={Link} to={`/movies/${movie.imdbID}`} label="plus d'info" icon={<InfoIcon style={{ color: 'white' }} />} />
						</Box>
						<Card.Body>
							<Card.Text style={{ higth: '100px' }} >
								{movie.Description}
							</Card.Text>
						</Card.Body>

						<Rating name="read-only-10" value={movie.Rate} readOnly max={10} />

					</Card>
				</div>
			))}
		</div>
	);
};

export default MovieList;