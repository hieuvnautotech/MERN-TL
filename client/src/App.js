import logo from './logo.svg';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
					<Routes>
						<Route exact path='/' element={<Landing/>} />
						<Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>} />
						<Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>} />
						
					</Routes>
				</Router>
  );
}

export default App;
