// src/components/Header.jsx
import { Container, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <header className="bg-light text-center py-5">
      <Container>
        <h1 className="display-4 fw-bold">Bienvenue sur MonSite</h1>
        <p className="lead">
          Découvrez nos dernières actualités et produits en un clic.
        </p>
        <Button variant="primary" size="lg">
          Explorer
        </Button>
      </Container>
    </header>
  );
}
