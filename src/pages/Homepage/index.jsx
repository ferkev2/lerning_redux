import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from './action';
import Axios from 'axios';
import UserList from './userlist';

const actionDispatch = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users)),
});

const HomePage = (props) => {
  const { setUsers } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await Axios.get('https://reqres.in/api/users').catch(err => console.error(err));
    if (response) {
      const { data } = response.data;
      setUsers(data);
    };
  }

  useEffect(() => {
    fetchUsers();
    return () => false;
  }, [])

  return (
    <div>
      <UserList />
    </div>
  )
}

export default HomePage;
