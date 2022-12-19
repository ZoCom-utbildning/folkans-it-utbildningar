import About from './views/about/About';
import Error from './views/error/Error';
import Form from './views/form/Form';
import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Personas from './views/personas/Personas';

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
