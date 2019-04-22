import React from 'react';
import { DetailsPage, Header, Footer } from './components';
import './App.css';

const App = () =>
  <div className="app">
    <Header />
    <main>
      <DetailsPage />
      <Footer />
    </main>
  </div>;

export default App;
