import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if(!user){
        return <div>Please Login</div>
    }
  return (
    <div>
        {/* //user.username is used as we use setUser in login and argument is username passes to data is the username contained nested in user var of context */}
      Welcome {user.username}  
    </div>
  )
}

export default Profile
