import './App.scss';
import Nav from './components/Nav/Nav';
import { useContext } from 'react';
import { GlobalStoreContext } from './Store/GlobalStore' 
import Search from './components/Search/Search';
import User from './components/User/User';

function App() {
  const GlobalStore = useContext(GlobalStoreContext)
  return (
    <div className="App" data-theme={GlobalStore.theme}>
    <Nav />
    <Search />
    <User />
    </div>

  );
}

export default App;
