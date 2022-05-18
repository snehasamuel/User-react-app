import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewuser from './components/Viewuser';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Viewuser/>}/>
</Routes>
</BrowserRouter>   

  );
}

export default App;
