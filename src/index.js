import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import Home from './components/Home';
import { syncHistoryWithStore } from 'react-router-redux'

injectTapEventPlugin();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="/home" component={Home}/>
                {/*<Route path="*" component={NoMatch}/>*/}
                <IndexRedirect to="/home"/>
            </Route>
        </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
