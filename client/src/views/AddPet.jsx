import Form from '../components/Form';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AddPet = props => {
  const [form, setForm] = useState({
    petName:"",
    petType:"",
    petDescription:"",
    skill1:"",
    skill2:"",
    skill3:""
  })

  const [error, setError] = useState({})

  const onChangeHandler = e => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pet/new", form)
      .then(res => {
        if(res.data.error) {
          setError(res.data.error.errors)
        } else {
          navigate("/");
        }
      })
      .catch(console.log("Something went wrong trying to add to the database!"))
  }

  return(
    <>
        <h5><Link to="/">Back to home</Link></h5>
        <h3>Know a pet nedding a home?</h3>
      <Form form buttonName="Add Pet" onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}></Form>
    </>
  )
}

export default AddPet;