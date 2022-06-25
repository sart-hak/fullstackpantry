import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './routes/About';
import Services from './routes/Services';
import Blogs from './routes/Blogs';
import Contact from './routes/Contact';
import Admin from './routes/Admin';
import BlogDetail from './routes/BlogDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blogs/:id" element={<BlogDetail />} />

      <Route path="admin/*" element={
      <ChakraProvider>
        <Admin />
      </ChakraProvider>
      } />
    </Routes>   
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
