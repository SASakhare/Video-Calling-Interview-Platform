import { Show, SignIn, SignInButton, SignUpButton, UserButton } from '@clerk/react';
import React from 'react'

export const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Show when="signed-out">
        <SignInButton mode='modal' />
        <SignUpButton mode='modal' />
      </Show>
      <Show when="signed-in">
        <UserButton/>
      </Show>
    </div>
  )
}


export default App;
