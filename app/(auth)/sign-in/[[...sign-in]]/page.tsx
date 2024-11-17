import React from 'react'
import { SignInButton } from "@clerk/nextjs"

const SignIn = () => {
  return (
    <SignInButton mode='redirect'/>
  )
}

export default SignIn