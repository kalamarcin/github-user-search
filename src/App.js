import './App.scss';
import Nav from './components/Nav/Nav';
import React,{ Suspense, useContext } from 'react';
import { GlobalStoreContext } from './Store/GlobalStore' 
import Search from './components/Search/Search';

import Loading from './components/Loading/Loading';

function App() {
  const GlobalStore = useContext(GlobalStoreContext)
  const User = React.lazy(() => import('./components/User/User'));
  return (
    <div className="App" data-theme={GlobalStore.theme}>
    <Nav />
    <Search />
    <Suspense fallback={<Loading/>}>
    <User />
    </Suspense>
    </div>

  );
}

export default App;
