import './App.css';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <SearchBar />
        <h1>Here is the content.</h1>
      </div>
    </div>
  );
}

export default App;
