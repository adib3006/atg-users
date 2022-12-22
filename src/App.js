import './App.css';
import UserNames from './components/UserNames';
import UserDetails from './components/UserDetails';
import { useState } from 'react';

function App() {
  const [selectedUser, setSelectedUser] = useState({});
  const [error, setError] = useState(null);
  return (
    <div className="d-block d-md-flex m-5">
      <div className='col-12 col-md-6 m-2'> <UserNames 
      setSelectedUser={setSelectedUser} 
      setError={setError}
      error={error}
      ></UserNames> </div>
      <div className='col-12 col-md-5 m-2'> <UserDetails 
      selectedUser={selectedUser}
      error={error}
      ></UserDetails> </div>
    </div>
  );
}

export default App;
