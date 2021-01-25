import react from 'react';

const Form = props => {
  return(
    <>
    <div className="formC">
      <form className="row" onSubmit={props.onSubmitHandler}>
          <div className="col-sm-6">
            <div>
              <label htmlFor="petName">Pet Name:</label>
              <input type="text" name="petName" className="form-control" onChange={props.onChangeHandler} value={props.form.petName}/>
              {
                props.error && props.error.petName ? <span className="text-danger">{props.error.petName.message}</span> : ""
              }
              <br/>
            </div>
            <div>
              <label htmlFor="petType">Pet Type:</label>
              <input type="text" name="petType" className="form-control" onChange={props.onChangeHandler} value={props.form.petType}/>
              {
                props.error && props.error.petType ? <span className="text-danger">{props.error.petType.message}</span> : ""
              }
              <br/>
            </div>
            <div>
              <label htmlFor="petDescription">Pet Description:</label>
              <input type="text" name="petDescription" className="form-control" onChange={props.onChangeHandler} value={props.form.petDescription}/>
              {
                props.error && props.error.petDescription ? <span className="text-danger">{props.error.petDescription.message}</span> : ""
              }
              <br/>
            </div>
            <input type="submit" value={props.buttonName} className="btn btn-primary" />
          </div>
          <div className="col-sm-6">
          <div>
            <p>Skills(Optional):</p>
            <label htmlFor="skill1">Skill 1</label>
            <input type="text" name="skill1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill1}/>
            <br/>
            <label htmlFor="skill2">Skill 2</label>
            <input type="text" name="skill2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill2}/>
            <br/>
            <label htmlFor="skill3">Skill 3</label>
            <input type="text" name="skill3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill3}/>
            <br/>
          </div>
          </div>
      </form>
    </div>
    </>
  );
}

export default Form;