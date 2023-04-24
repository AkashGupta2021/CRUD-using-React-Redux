//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
<BrowserRouter>
<Routes>
 
 <Route exact path="/" element={<Home />} ></Route>
 <Route exact path="/create" element={<Create />} ></Route>
 <Route exact path="/edit/:id" element={<Update />} ></Route>
</Routes>

</BrowserRouter>

    // <Home />
  );
}

export default App;
