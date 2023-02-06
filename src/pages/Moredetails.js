import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';


const Moredetails = ({movies}) => {
  const navigate= useNavigate()
  const {idmovie} = useParams()
  const foundmovie = movies.find(el=> el.imdbID === idmovie)
  console.log(foundmovie)

  
  return (
   <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px' }}>
    <Card  className="bg-dark text-white" style={{ width: '600px', higth: '400px' }} >
       
      <CloseButton style={{color:'white'}}onClick={()=>navigate('/')}/>

      <Card.Text><iframe  width="560" height="315" src={foundmovie.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Card.Text>
      
      
      <Card.Text>{foundmovie.Title}</Card.Text>

      <span style={{display:'flex',gap:'30px'}}><Card.Text >{foundmovie.Type}     </Card.Text> 
      <Card.Text >  {foundmovie.Year}</Card.Text> </span>

        <Card.Text>{foundmovie.Description}</Card.Text>

        <Button  variant="bg-dark text-white" onClick={()=>navigate('/')}>GO BACK TO HOME</Button>

    </Card>
    </div>
  )
}


    export default Moredetails 