import { useEffect, useState } from 'react';
import { createUser, deleteUserById, getAllUsers, updateUserById } from './api/api';
import './App.css';
import { DeletePopup, Popup } from './components/Popup';
import UserTable from './components/UserTable';
import config from './config';
import { unSelectAllDelete, unSelectAllEdit } from './utils/utils';

function App() {

  const [users, setUsers] = useState([]);
  const [selectedUsersDelete, setSelectedUsersDelete] = useState([]);
  const [selectedUserEdit, setSelectedUserEdit] = useState(-1);
  const [popup, setPopup] = useState(null);
  useEffect(() => {
    const fetchAndSetUsers = () => {
      getAllUsers().then(users => {
        setUsers(users);
      }).catch(_ => {
        setTimeout(fetchAndSetUsers, 5000);
      });
    };
    fetchAndSetUsers();
  }, []);

  const addUser = (user) => {
    setUsers([...users, user])
  }

  const addRemoveDeletes = (id) => {
    if (id === true) return setSelectedUsersDelete(users.map(user => user.ID));
    else if (id === false) return setSelectedUsersDelete([]);
    
    const index = selectedUsersDelete.indexOf(id);
    if (index === -1) {
      setSelectedUsersDelete([...selectedUsersDelete, id]);
    } else {
      setSelectedUsersDelete([...selectedUsersDelete.slice(0, index), ...selectedUsersDelete.slice(index + 1, selectedUsersDelete.length)])
    }
  }

  const setEdit = (id, setToUser) => {
    if (setToUser) setSelectedUserEdit(id);
    else setSelectedUserEdit(-1);
  }

  const setters = { addRemoveDeletes, setEdit }

  const deleteHandler = async () => {
    const deleteds = [];
    for (const id of selectedUsersDelete) {
      const deletedId = await deleteUserById(id);
      if (deletedId) deleteds.push(deletedId);
    }
    for (const id of deleteds) 
      addRemoveDeletes(id);
    setUsers(users.filter(({ ID }) => !deleteds.includes(ID)));
  }

  const handleDelete = async () => {
    if (!selectedUsersDelete.length) return;
    setPopup(DeletePopup(selectedUsersDelete.length, {action: config.apiUrl + `/user`, method:"DELETE", submitValue: "Delete", handler: deleteHandler}, () => {setPopup(null); setSelectedUsersDelete([])}));
    unSelectAllDelete();
  }

  const handleEdit = () => {
    if (selectedUserEdit === -1) return;
    const selectedUser = users.find(user => user.ID === selectedUserEdit);
    setPopup(Popup(selectedUser, {edit: false, action: config.apiUrl + `/user/${selectedUser.ID}`, method:"PUT", submitValue: "Save", handler: updateUserById}, (newUserInfo) => {
        setPopup(null); 
        setSelectedUserEdit(-1);
        if (newUserInfo) setUsers(users.map((userInformation) => { if (userInformation.ID === newUserInfo.ID) {
          if (newUserInfo.name) userInformation.name = newUserInfo.name;
          if (newUserInfo.email) userInformation.email = newUserInfo.email;
          if (newUserInfo.phone) userInformation.phone = newUserInfo.phone;
        } return userInformation;
      }))}));
    unSelectAllEdit();
  };

  const handleNew = () => {
    setPopup(Popup({}, {action: config.apiUrl + `/user`, method:"POST", submitValue: "Create", handler: createUser}, (newUser) => {setPopup(null);if (newUser) addUser(newUser)}));
  }

  const handlers = { handleDelete, handleEdit, handleNew };

  return (
    <div className="App">
      <header className="header">
        <h1> User Management Application </h1>
      </header>
      {popup}
      <UserTable users={users} setters={setters} handlers={handlers}></UserTable>
    </div>
  );
}

export default App;
