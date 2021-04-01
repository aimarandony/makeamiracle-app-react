import React, { useState } from 'react';
import { AuthContext } from './auth/AuthContext';
import AppRouter from './routers/AppRouter';

function App() {

  const [authenticated, setAuthenticated] = useState<boolean>(true)

  return (
    <AuthContext.Provider value={{authenticated, setAuthenticated}}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;
