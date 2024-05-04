import './App.css';
import Comps from './Comp';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Connect from './components/Login/Connect';
import Home from './components/LandingPage/Home';
import Accueil from './components/Dashboard/Tabs/Accueil';
import Animaux from './components/Dashboard/Tabs/Animaux';
import Prod from './components/Dashboard/Tabs/Production';
import Traitement from './components/Dashboard/Tabs/Traitement';
import Stock from './components/Dashboard/Tabs/Stock';
import Test from './components/Dashboard/Tabs/Test';
  
  
  

function App() {
  return (
    <div className="App">
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='login' element={<Login/>} />
                <Route path='signup' element={<Signup/>} />
                <Route path='connect' element={<Connect/>} />

                <Route path='dashboard' element={<Dashboard/>}>
                    <Route index element={<Accueil/>} />
                    <Route path='accueil' element={<Accueil/>} />
                    <Route path='animaux' element={<Animaux/>} />
                    <Route path='traitement' element={<Traitement/>} />
                    <Route path='production' element={<Prod/>} />
                    <Route path='stock' element={<Stock/>} />
                    <Route path='test' element={<Test/>} />
                    
                </Route>

                <Route path='*' element={<Comps/>} />
            </Routes>
        
    </div>
  );
}

export default App;
