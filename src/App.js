import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen';

function App() {
	return (
		<div className='container'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
