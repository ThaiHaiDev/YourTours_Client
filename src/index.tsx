import React from 'react';
import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './assets/css/animation.scss';
import './assets/css/grid.scss';
import './assets/css/index.scss';
import i18n from './i18n';

import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        style={{ fontSize: '14px' }}
                    >
                        <App />
                    </SnackbarProvider>
                </I18nextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
