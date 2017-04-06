import React from 'react';
import AppBar from './components/AppBar';

const App = ({children}) => (
    <div>
        <AppBar/>
        <div>{children}</div>
    </div>
);

export default App;