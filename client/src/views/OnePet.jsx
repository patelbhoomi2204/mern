import { Link, navigate} from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const OnePet = props => {
  const [pet, setPet] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(()=> {
    axios.get(`http://localhost:8000/api/pet/${props._id}`)
      .then(res => setPet(res.data.onePet))
  }, [update])
  const removePet = _id => {
      axios.delete(`http://localhost:8000/api/pet/delete/${_id}`)
      .then(
        setUpdate(!update),
        navigate('/')
      )
      .catch(err => console.log(err))
    }
    return(
      <div>
      <h5><Link to="/">Back to home</Link></h5>
      {
        pet ?
        <>
          <button onClick={() => removePet(props._id)} className="btn btn-danger">Adopt {pet.petName}</button>
          <h4>Details about: {pet.petName}</h4>
          <div className="formC">
            <h6>Pet type: {pet.petType}</h6>
            <h6>Pet description: {pet.petDescription}</h6>
            <h6>Skills:</h6>
            <div className="skills">
              <h6>{pet.skill1}</h6>
              <h6>{pet.skill2}</h6>
              <h6>{pet.skill3}</h6>
            </div>
          </div>
        </> : ""
      }
      </div>

    )
  }

export default OnePet;