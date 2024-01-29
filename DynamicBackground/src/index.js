import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app.js"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// );
const root = createRoot(container);
root.render(<BrowserRouter><App/></BrowserRouter>);
