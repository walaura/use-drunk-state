# use-drunk-state

Drop in replacement for `setState` that randomizes your stuff every three seconds. Ty <a href="https://github.com/rickhanlonii">@rickhanlonii</a>.

<img width="1142" alt="Screenshot 2019-04-27 at 3 40 02 pm" src="https://user-images.githubusercontent.com/11539094/56850421-c5268d80-6902-11e9-95c9-604a058bf294.png">

```jsx
import { useDrunkState } from 'use-drunk-state';

function App() {
	const [thing, setThing] = useDrunkState(null);
	const [list, setList] = useDrunkState(['eggs', 'milk', 'test']);
	return (
		<div>
			<h1>Todos</h1>
			<ul>
				{list.map(item => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<input
				type="text"
				value={thing}
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
		</div>
	);
}
```
