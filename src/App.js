import React from 'react';
import './App.css';
import { useDrunkState } from './drunkstate';

function App() {
	const [counter, setCounter] = useDrunkState(0);
	const [thing, setThing] = useDrunkState(null);
	const [list, setList] = useDrunkState(['eggs', 'milk', 'test']);
	return (
		<div className="App">
			<header className="App-header">
				<h2>Counter</h2>
				<button
					onClick={() => {
						setCounter(c => c + 1);
					}}
				>
					+
				</button>
				{counter}
				<button
					onClick={() => {
						setCounter(c => c - 1);
					}}
				>
					-
				</button>
				<hr />
				<h2>Todos</h2>
				<ul>
					{list.map(item => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<input
					type="text"
					onChange={ev => {
						setThing(ev.target.value);
					}}
				/>
				<button
					onClick={() => {
						setList(list => [...list, thing]);
						setThing(null);
					}}
				>
					Add todo
				</button>
			</header>
		</div>
	);
}

export default App;
