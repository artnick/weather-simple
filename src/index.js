import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';
import App from './components/App';
import './styles/main.sass';

const persistedSettings = localStorage.getItem('settings') ? 
  JSON.parse(localStorage.getItem('settings')) : 
  {cities:[], useLocation: true};

const store = configureStore({settings: persistedSettings});

store.subscribe(() => {
  localStorage.setItem('settings', JSON.stringify(store.getState().settings));
});

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component/>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
