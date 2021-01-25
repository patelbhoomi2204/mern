import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/Form';

const UpdatePet = props => {

  const [form, setForm] = useState({
    petName:"",
    petType:"",
    petDescription:"",
    skill1:"",
    skill2:"",
    skill3:""
  })

  const [error, setError] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/pet/${props._id}`)
      .then(res => setForm(res.data.onePet))
  }, [])

  const onChangeHandler = e => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pet/update/${props._id}`, form)
      .then(res => {
        if(res.data.error) {
          setError(res.data.error.errors)
        } else {
          navigate("/");
        }
      })
      .catch(console.log("Wrong while updating pet"))
  }

  return(
    <>
      <h5><Link to="/">Back to home</Link></h5>
      <h3>Edit {form.petName}</h3>
      <Form buttonName="Edit Pet" onSubmitHandler={onSubmitHandler} form={form} onChangeHandler= {onChangeHandler} error={error}></Form>
    </>
  )
}

export default UpdatePet;