import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import { useSelector, useDispatch } from 'react-redux';;
import { useHistory } from 'react-router-dom';
import { deleteUser } from './action';

const actionDispatch = (dispatch) => ({
  deleteUser: (userId) => dispatch(deleteUser(userId)),
});

const UsersContainers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const DelButton = styled.button`
  background-color: #bbbbbb;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #bbbbbb;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export default function UserList() {
  const { users } = useSelector(stateSelector);
  const { deleteUser } = actionDispatch(useDispatch());

  const history = useHistory();

  const goToUserPage = (id) => {
    history.push(`/user/${id}`);
  }

  return (
    <UsersContainers>
      {users.length > 0 && users.map((user, idx) => (
        <UserWrapper key={idx}>
          <UserImage onClick={() => goToUserPage(user.id)}>
            <img src={user.avatar} />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
          <DelButton type="button" onClick={() => deleteUser(user.id)}>
            Delete
          </DelButton>
        </UserWrapper>
      ))}
    </UsersContainers>
  )
}
