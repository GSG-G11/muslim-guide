import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

function NotFound() {
  return (
    <div className="notFound">
      <div className="error">404</div>
      <br />
      <br />
      <span className="info">File not found</span>
      <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" className="static" alt="404" />
      <Link className="home" to="/">Home</Link>
    </div>
  );
}

export default NotFound;
