import React from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'

export const PrivateRoute = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/login"/>;
}
