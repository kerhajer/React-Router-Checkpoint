import Form from 'react-bootstrap/Form';
import {Rating} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Filtre = ({ search ,rate}) => {

    return (
        < >
        <div   >
            <Form.Group  style={{ display:'flex',justifyContent:'start' ,gap :'10px'}}   className="mb-3" > 
                  
            <SearchIcon style={{ marginTop:'10px' }} /> <Form.Control style={{ width: '200px',marginTop:'5px' }}onChange={  (e) => { search(e.target.value) } } placeholder=" search by title "/>
           

            <Rating    style={{ backgroundColor:'white',width: '240px',height:'30px',marginTop:'10px'}}
                onChange={  (e,newvalue) => { rate(newvalue) } }
                name="Rate"
                defaultValue={0} max={10} 

            />
             </Form.Group>
            </div>
        </>

    );
}

export default Filtre;