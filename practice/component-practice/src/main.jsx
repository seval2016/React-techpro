import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*src/
|-- components/
|   |-- Header.js
|   |-- Sidebar.js
|   |-- Content.js
|-- App.js
|-- App.css
|-- index.js
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
