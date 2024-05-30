import React from 'react';
import SignUp from '../components/SignUpSignIn';
import Header from '../components/Header';

const SignUpPage = () => {
  return (
    <div>
      <Header />
        <div className='wrapper'>
          <SignUp />
        </div>
    </div>
  )
}

export default SignUpPage