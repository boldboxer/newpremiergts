import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.description}>The page you are looking for is missing.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    color: '#333',
  },
  title: {
    fontSize: '72px',
    margin: '0',
  },
  description: {
    fontSize: '24px',
    margin: '0',
  },
};

export default NotFound;
