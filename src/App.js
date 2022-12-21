import { Header } from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Character } from './pages/Character/Character';
import { Location } from './pages/Location/Location';
import { Episode } from './pages/Episode/Episode';
import { SingleCard } from './Components/SingleCard/SingleCard';

function App() {
	return (
		<>
			<Header />
			<div className="pt-3">
				<Routes>
					<Route path="/" element={<Character />} />
					<Route path="/episode" element={<Episode />}></Route>
					<Route path="/location" element={<Location />}></Route>
					<Route path="/single/:name" element={<SingleCard />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
