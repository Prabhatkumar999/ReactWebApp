import React from 'react';

export default function Header() {
  return (
    <div style={styles.main}>

      <div style={styles.logo}>
        <img src={require('../Image/logo.png')} alt="logo" style={{ height: 30, width: 30, marginRight: 10, marginLeft: 150 }} />
        <span style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>TrustAPP</span>
      </div>

      <div >
        <input type="text" style={styles.search}  placeholder='Search for more than 400 services' />
      </div>

      <button style={styles.loginb}>
        <span style={{ color: 'blue', fontSize: 18 }}> Login </span>
      </button>

    </div>
  );
}

const styles = {
  main: {
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  search: {
    height: 35,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 5,
    borderRadius: 10,
    width: 600,
    marginLeft: 120,
    color: 'grey',
  },
  loginb: {
    backgroundColor: 'white',
    height: 33,
    width: 100,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 130,
  },
};
