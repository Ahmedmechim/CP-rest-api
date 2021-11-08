import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/action'
import AddUser from './AddUser'
import UserCard from './UserCard'

const UserList = () => {
    const {users,loading} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUsers())
    }, [])
    return (
        <div className="lista">
            <AddUser/>
            { 
            loading?<h1>loading...</h1>:
                users.map((el,i)=><UserCard user={el} key={i} />)
            }
        </div>
    )
}

export default UserList
