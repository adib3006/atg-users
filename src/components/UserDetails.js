import React from 'react';
import image from '../asset/avatar.jpg';

const UserDetails = ({ selectedUser, error }) => {
    return (
        <div>
            <h1 className='text-center p-3 bg-info rounded-top'>USER DETAILS</h1>
            {
                error ? <p className='text-center fw-bold fs-4'>No Data To Show</p> 
                : <>
                    {
                        selectedUser?.id ?
                            <div className='d-flex flex-column align-items-center'>
                                <img className='img-thumbnail rounded-circle my-3' style={{ width: "200px" }} src={image} alt="" />
                                <h5>@{selectedUser?.profile?.username}</h5>
                                <p className='w-75 p-2 border rounded bg-light my-5'>{selectedUser?.Bio}</p>
                                <div className='w-75'>
                                    <p className='m-0'>Full Name</p>
                                    <p className='p-2 border rounded bg-light'>{selectedUser?.profile?.firstName} {selectedUser?.profile?.lastName}</p>
                                </div>
                                <div className='w-75'>
                                    <p className='m-0'>Job Title</p>
                                    <p className='p-2 border rounded bg-light'>{selectedUser?.jobTitle}</p>
                                </div>
                                <div className='w-75'>
                                    <p className='m-0'>Email</p>
                                    <p className='p-2 border rounded bg-light'>{selectedUser?.profile?.email}</p>
                                </div>
                            </div>
                            :
                            <p className='text-center fw-bold fs-4'>Select a user to see details</p>
                    }
                </>
            }
        </div>
    );
};

export default UserDetails;