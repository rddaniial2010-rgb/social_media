
import './App.css';
import Header from './components/header/Header'
import NavBar from './components/nav-bar/NavBar';
import Profile from './components/profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from './components/dialogs/Dialogs';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <NavBar/>
          <Routes>
              <Route exact path="/" element={<Profile/>} />   
            <Route exact path="/profile" element={<Profile/>} />   
            <Route path="/dialogs" element={<Dialogs/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
