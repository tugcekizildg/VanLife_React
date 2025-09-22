import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found-container'>
      <h1>Sorry, the page you are looking for does not exist</h1>
      <Link to='/' className='not-found-link'>
        Return to Home
      </Link>
    </div>
  );
}
