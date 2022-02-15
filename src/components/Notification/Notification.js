import React from 'react';
import propTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={s.notification}>{message}</p>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
