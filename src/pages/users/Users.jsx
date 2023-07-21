import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../apis/userApis'
import UserCard from './components/UserCard'
import Loading from '../../components/Loading'

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
        <div className="w-full py-7">
            
            {users.length === 0 ? <Loading /> : (
                <>
                    <h1 className='text-2xl font-semibold mb-[90px] text-center uppercase  '>Users</h1>
                    <div className='grid justify-items-center grid-cols-1 md:justify-items-stretch md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-[150px]'>
                        {users?.map((user, index) => (
                            <UserCard key={index} user={user} />
                        ))}
                     </div>
                </>
            )}
       
        </div>
    )
}


