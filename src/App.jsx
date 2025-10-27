import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './MyNavbar';
import Header from './Header';
import CardsGrid from './CardsGrid';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <Container className="py-5">
        <h2 className="mb-4 text-center">Nos Produits</h2>
        <CardsGrid />
      </Container>
    </div>
  );
}

export default App;
