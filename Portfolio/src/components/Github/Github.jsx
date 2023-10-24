import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData[data]
    //     })
    // } , [])

  return (
    <div className='space-x-1 text-center m-4 bg-gray-600 text-white 
    p-4 text-3xl' >
      My Github reps: {data.repos_url}
      <img src={data.avatar_url} alt="Pic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/devanshV18')
    return response.json()
}