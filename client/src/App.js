import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from '@reach/router';
import Main from './views/Main';
import AddPet from './views/AddPet';
import OnePet from './views/OnePet';
import UpdatePet from './views/UpdatePet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/"></Main>
        <AddPet path = "/pet/new"></AddPet>
        <OnePet path = "/pet/:_id"></OnePet>
        <UpdatePet path = "/pet/:_id/edit"></UpdatePet>
      </Router>
    </div>
  );
}

export default App;
