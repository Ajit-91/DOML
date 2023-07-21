import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../apis/userApis'
import UserCard from './components/UserCard'

export default () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetchUsers();
            console.log({ usersInfo: res })
            if (res.error) {
                return alert(res.message)
            }

            // setUsers(res.data)
            setUsers(res.data.users)
        })()
    }, [])

    return (
        <div className="w-full">

            <h1 className='text-2xl font-semibold mb-4 '>Users</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8'>
                {users?.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}

            </div>
        </div>
    )
}


