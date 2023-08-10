
"use client"


import React from 'react'
import { Context } from '../../components/AuthProvider'

function page() {
  const {user} = Context()
  return (
    <div>
      {user}

      ssssss
    </div>
  )
}

export default page
