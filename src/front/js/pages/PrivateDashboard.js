import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

export const PrivateDashboard = () => {
    const Navigate = useNavigate()
    useEffect( () => {
        if(!localStorage.getItem('token'))
        Navigate('/login')
    },[])
  return (
    <div>PrivateDashboard</div>
  )
}
