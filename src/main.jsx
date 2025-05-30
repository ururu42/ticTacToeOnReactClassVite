import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/Game/Game';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</React.StrictMode>,
);
