import React from 'react';
import { Link } from '@reach/router';

const PetRow = props => {
  return(
    <tr>
      <td>{props.pet.petName}</td>
      <td>{props.pet.petType}</td>
      <td><Link to={`/pet/${props.pet._id}`}>details</Link> | <Link to={`/pet/${props.pet._id}/edit`}>edit</Link></td>
    </tr>
  )
}

export default PetRow;