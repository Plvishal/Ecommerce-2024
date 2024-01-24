import React from 'react';
import UserContext from './userContext';

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [admin, setAdmin] = React.useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser, admin, setAdmin }}>
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserContextProvider;
