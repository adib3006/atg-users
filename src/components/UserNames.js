import axios from 'axios';
import React, { useEffect, useState } from 'react';
import image from '../asset/avatar.jpg';
import Spinner from 'react-bootstrap/Spinner';


const UserNames = ({ setSelectedUser, setError, error }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => setUsers(res.data))
            .catch(error => setError(error.message))
    }, [setError])
    return (
        <div className='rounded'>
            <h1 className='text-center p-3 bg-info rounded-top'>USERS LIST</h1>
            {
                error ? <p className='text-center fw-bold fs-4'>No Data To Show</p> : <>
                {
                (users.length > 0) ?
                    <>
                        {
                            users.map(user => <div onClick={() => setSelectedUser(user)} className='d-flex align-items-center mt-4 p-3 bg-light rounded' key={user.id}>
                                {user?.avatar && <img className='thumbnail me-3' src={user?.avatar} alt="" />}
                                <img className='img-thumbnail me-3 rounded-circle' style={{ width: "50px" }} src={image} alt="" />
                                <h4>{user?.profile?.firstName} {user?.profile?.lastName}</h4>
                            </div>)
                        }
                    </> : <div className='d-flex justify-content-center'><Spinner animation="border" variant="info" /></div>
            }
                </>
            }
        </div>
    );
};

export default UserNames;