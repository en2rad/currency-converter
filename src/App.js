import React, { useState, useEffect } from 'react';
import Converter from './components/Converter'
import Loader from './components/Loader/Loader';

import getCurrency from './components/api'

function App() {
    const [loading, setLoading] = useState(false)

	
    const date = new Date().getDay()

    useEffect(getCurrency(),[date])

    return (  
        <div className="App">
            <Converter />
            { loading ? <Loader/> : <Converter />}
        </div>
    );
}

export default App;
