import React from 'react';
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';
export default function NotFound({ message, linkRoute, linkText }) {
  return (
    <div className={classes.containeer}>
      {message}
      <Link to='/shop'>{linkText}</Link>
    </div>
  );
}

NotFound.defaultProps = {
  message: 'Nothing Found!',
  linkText: 'Continue Shopping',
};
