import React, {useState, useEffect} from 'react'
import { Container, TableHeader, TableRow, TableBlock, TableBlockData, Button } from './style'
import axios from 'axios';
import User from '../user/User'

const tableHeadData = [
    'Username',
    'Email',
    'Birthday'
]

const ListUser = ({data}) => {
    const [listUser, setlistUser] = useState()
    useEffect(() => {
      data.forEach(element => {
        element['id'] = element['_id']

        // fix date
        element['birthday'] = element['birthday'].split('T')[0]
        // console.log("element['birthday']", element['birthday'])
      });
      setlistUser(data)
      return () => {        
      }
    }, [data])
    
    const handleChange = (index, type, inputData) => {
        if(inputData == ''){
            alert('Cannot set input value empty.')
            return;
        }
        const dataChanged = {          
            ...listUser
        }
        dataChanged[index][type] = inputData
        setlistUser(dataChanged)
    }

    const handleUpdate = _ => {
        const endpoint = '/user';
        const method = 'post';
        const body = listUser
        console.log("listUser before", listUser)
        let dataBody = Object.keys(listUser).map((key) => listUser[key]);
        // let dataBody = [...listUser]
        console.log("dataBody before", dataBody)

        dataBody.forEach(element => {
            const [year, month, day] = element['birthday'].split("-")            
            console.log("[year, month, day] ", [year, month, day] )
            let xxx = new Date(year, parseInt(month)-1, parseInt(day)+1)
            console.log("xxx", xxx.toISOString())
            element['birthday'] = xxx.toISOString() 
        });
        console.log("dataBody  after", dataBody)

        const URL = `https://limitless-ravine-59645.herokuapp.com${endpoint}`;
        let d = axios({
            method,
            url: URL,
            data: body  
        }).catch(err => {
            console.log(err);
        }).then(res => {
            if(res.data.status === 'success'){
                alert('Update successed.')
            }
        });
    }
  return (
    <div style={{display: 'flex'}}>
    <Container>
        <TableHeader>
        {tableHeadData.map((item, index) => <TableBlock key={index}>{item}</TableBlock>)}
        </TableHeader>
        {
            data.map((item, index) => <TableRow key={index}>
                <TableBlockData type="text" value={item.username} onChange={(e) => handleChange(index, 'username', e.target.value)}/>
                <TableBlockData type="email" value={item.email} onChange={(e) => handleChange(index, 'email', e.target.value)}/>
                <TableBlockData value={item.birthday} onChange={(e) => handleChange(index, 'birthday', e.target.value)}/>
            </TableRow>)
        }
    </Container>
    <Button onClick={handleUpdate}>Click to update users</Button>
    </div>
  )
}

export default ListUser
