import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import './Toast.css';

export const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className="toast-icon" />;
      case 'error':
        return <FaTimesCircle className="toast-icon" />;
      case 'warning':
        return <FaExclamationTriangle className="toast-icon" />;
      default:
        return <FaInfoCircle className="toast-icon" />;
    }
  };

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {getIcon()}
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>
    </div>
  );
};

