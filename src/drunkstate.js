const { useState, useEffect } = require('react');

const randomize = s => {
	if (s && typeof s === 'number') {
		s = s - 0.5 + Math.random();
	}
	if (s && typeof s === 'string' && s.length > 1) {
		s = s.split('');
	}
	if (s && typeof s === 'object' && s.sort) {
		s = s.sort(() => 0.5 - Math.random());
	}
	if (s && typeof s === 'object' && s.map) {
		s = s.map(randomize);
	}
	return s;
};

const useDrunkState = initialState => {
	const [state, setState] = useState(initialState);
	useEffect(() => {
		let interval = setInterval(() => {
			setState(randomize);
		}, 3000 * Math.random());

		return () => {
			clearInterval(interval);
		};
	}, [state]);
	return [state, setState];
};

export { useDrunkState };
