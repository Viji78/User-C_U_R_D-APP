import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import {v4 as uuid} from 'uuid'
import { Link, useHistory } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export const AddUser=()=>{
    const[name,setName]= useState('')

    const {addUser} = useContext(GlobalContext)
    const history =useHistory();
    const onSubmit=()=>{
        const newUser={
            id:uuid(),
            name:name
        }
        addUser(newUser)
        history.push('/')
    }

    const onChange=(e) => {
        setName(e.target.value);
}
    return (
        <Form onSubmit={onSubmit}> 
            <FormGroup>
            <Label>Name:</Label> 
            <Input type='text' value={name} onChange={onChange} placeholder='Enter Name'></Input> 
            </FormGroup> 
            <Button type='submit'> SUBMIT </Button>
            <Link to='/' className='btn btn-danger ml-2'>CANCEL</Link>
        </Form>

    )
}