import React, { useEffect } from 'react'
import {  RouterProvider } from 'react-router-dom'
import Router from './Router/Router'
import { useQuery } from '@tanstack/react-query'


const app = () => {
   
  return (<RouterProvider router={Router}/>)

  
   
  
}

export default app