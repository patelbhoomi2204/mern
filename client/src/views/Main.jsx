import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import PetRow from '../components/PetRow';
import axios from 'axios';

const Main = props => {
  const [pet, setPet] = useState();

  useEffect(()=> {
    axios.get("http://localhost:8000/api/pet")
      .then(res => setPet(res.data.allPet))
  }, [])
  return(
    <>
        <h5><Link to="/pet/new">add a pet to the shelter</Link></h5>
        <h3>These pets are looking for a good home!</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
            pet ?
            pet.sort((a,b) => {
              const typeA = a.petType.toUpperCase(),
                    typeB = b.petType.toUpperCase();
              if (typeA < typeB) {
                return -1;
              }
              if (typeA > typeB) {
                return 1;
              }
              return 0;
            }).map((m, i) => {
              return <PetRow pet={m} key={i}></PetRow>
            }) : ""
          }
        </tbody>
      </table>
    </>
  )
}

export default Main;