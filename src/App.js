import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ListUser from './components/listUser/ListUser';

import styled from 'styled-components';

const SearchBar = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
  opacity: .7;
  & > input{
    width: 400px;
    height: 25px;
    border-radius: 6px;
    padding: 5px 15px;
  }
  & > i{
    margin-left: -30px;
    cursor: pointer;
  }
`;

function App() {
  const [listUser, setListUser] = useState()
  const [searchInput, setsearchInput] = useState('')
  useEffect(() => {
    const endpoint = '/user';
    const method = 'get';
    const URL = `https://limitless-ravine-59645.herokuapp.com${endpoint}`;
    let d = axios({
      method,
      url: URL        
    }).catch(err => {
      console.log(err);
    }).then(res => {
      // console.log(res.data)     
      setListUser(res.data.data) 
    });
  
    return () => {
      
    }
  }, [])
  
  const handleSearch = _ => {
    // console.log("searchInput", searchInput)
    const endpoint = '/user';
      const method = 'get';
      const body = {
        name: searchInput,
        email: searchInput
      }
      const URL = `https://limitless-ravine-59645.herokuapp.com${endpoint}?name=${searchInput}&email=${searchInput}`;
      let d = axios({
        method,
        url: URL    
      }).catch(err => {
        console.log(err);
      }).then(res => {
        // console.log("search: ", res.data)     
        setListUser(res.data.data) 
      });
  }
  return (
    <div>
      <SearchBar>
        <input placeholder='Search username or email' onChange={(e) => setsearchInput(e.target.value)}/>
        <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
      </SearchBar>
      {listUser ? <ListUser data={listUser}></ListUser> : <></>}
    </div>
  );
}

export default App;
