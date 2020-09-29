import React, { useState } from 'react';
import PrivateRoutes from './components/private-routes.js/PrivateRoutes';
import localStorageService from './service/localStorageService';
import { SearchContextProvider } from './contexts/SearchContext';
import { createBrowserHistory } from 'history';

function App() {
  const hist = createBrowserHistory();
  const [role, setRole] = useState(localStorageService.getRole());
  return (
    <SearchContextProvider>
      <PrivateRoutes history={hist} role={role} setRole={setRole} />
    </SearchContextProvider>
  );
}

export default App;
