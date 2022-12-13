import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button} from 'reactstrap'

export const UserList=()=>{
    const {users, removeUser} = useContext(GlobalContext)
    // console.log (users) 
    // users.map(user=>console.log(user.name))
    

    return (
        <div>
            {/* <h1>User List page</h1> */}
            <ListGroup className='mt-4'> 
            {users.length > 0 ? (

                <>
                { users.map((user,idx)=>(
                <ListGroupItem className='' key={idx}>
                    <strong>{idx+"."}</strong>
                    <strong>{user.name}</strong>
                    <div className='m-auto'>
                    <Link className='btn btn-warning mr-1' to={`/edit/${user.id}`} >EDIT</Link>
                    <Button onClick={()=>removeUser(user.id) } color='danger'>DELETE</Button>
                    </div>
                </ListGroupItem>
            ))}
                </>
             ) : ( <h4 className='text-center'> No User </h4>) }
            

            </ListGroup>
        </div>
    )
}