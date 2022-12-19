import About from './views/landing/About';
import Error from './views/landing/Error';
import Form from './views/landing/Form';
import Home from './views/landing/Home';
import Landing from './views/landing/Landing';
import Personas from './views/landing/Personas';

import './scss/global.scss';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
		<Routes>
			<Route path='/' element={ < About /> } />
			<Route path='/' element={ < Error /> } />
			<Route path='/' element={ < Form /> } />
			<Route path='/' element={ < Home /> } />
			<Route path='/' element={ < Landing /> } />
			<Route path='/' element={ < Personas /> } />
		</Routes>
    </div>
  )
}

export default App
