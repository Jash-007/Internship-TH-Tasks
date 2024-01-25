import React from 'react'
import './app.css'
import {Routes, Route,Link} from 'react-router-dom'
import {Home} from './home.js'
const App = () => {
    return (
        <div>
            <h1 className='title'>Hello, React!</h1>
            <button><Link to='/home'>Home</Link></button>
            <Routes>
                <Route exact path='/home' element={<Home />} />
            </Routes>
        </div>
    )
}

export default App