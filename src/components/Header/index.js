import React, { useEffect } from 'react';
import './styles.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      console.log("Loading user state...");
    }
    if (user) {
      console.log("User is logged in, navigating to dashboard...");
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (e) {
      toast.error(e.message);
    }
  };

  return (
    <div className='navbar'>
      <p>Financely.</p>
      {user && (
        <div className='logout-div'>
          <p onClick={logOut}>Logout</p>
          {user.photoURL && <img src={user.photoURL} alt="User Avatar" />}
        </div>
      )}
    </div>
  );
};

export default Header;
