import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewuser from './components/Viewuser';
import Placeholder from './components/Placeholder';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Viewuser/>}/>
  <Route path="/todo" exact element={<Placeholder/>}/>
</Routes>
</BrowserRouter>   

  );
}

export default App;
