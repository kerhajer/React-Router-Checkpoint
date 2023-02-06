import Form from 'react-bootstrap/Form';

import React from 'react';
import MovieList from './MovieList';



const SelectGenre = ({genre}) => {
    return (

        <div style={{ width: '100px', backgroundColor: 'black', colorText: 'white' }}>

            <Form.Select variant="bg-dark text-white"  style={{ width: '100px',height:'40px' ,backgroundColor: 'black', colorText: 'white' }} onChange={(e) => { genre(e.target.value) }} aria-label="genre">
                <option style={{backgroundColor: 'black', color: 'white'}} >genre</option>
                <option style={{backgroundColor: 'black', color: 'white'}}  value="romance">romance</option>
                <option style={{backgroundColor: 'black', color: 'white'}} value="drama">drama</option>
                <option style={{backgroundColor: 'black', color: 'white'}} value="science-fiction">science-fiction</option>
                <option style={{backgroundColor: 'black', color: 'white'}} value="policiere">policiere</option>
                <option style={{backgroundColor: 'black', color: 'white'}}  value="thrillers">thrillers</option>

            </Form.Select>
        </div>



    )
}
export default SelectGenre
