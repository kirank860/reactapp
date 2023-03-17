import './App.css';
import Banner from './components/Bannar/Banner';
import NavBar from './components/NavBar/NavBar';
import {orginals,Action} from './urls'
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost  url={orginals} title="Netflix Originals"/>
      <RowPost url={Action}  title="Action Movies" isSmall  />
    </div>
  );
}

export default App;
