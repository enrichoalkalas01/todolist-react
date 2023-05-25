import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Add bootstrap manual
import './assets/bootstrap/css/bootstrap.min.css'

// Add Reduxt
import { Provider } from 'react-redux'
import Store from './redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={ Store }>
            <App />
        </Provider>    
    </React.StrictMode>,
)
