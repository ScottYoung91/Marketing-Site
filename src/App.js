import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
	return (
		<div className='container'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/about' element={<AboutScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
