import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpaPage from './Pages/SpaPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SpaPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
