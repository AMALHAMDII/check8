import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MyCard({ title, img, text }) {
  return (
    <Card style={{ width: '100%', minHeight: '100%' }} className="h-100">
      <Card.Img
        variant="top"
        src={img}
        alt={title}
        style={{ objectFit: 'cover', height: 180 }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1">{text}</Card.Text>
        <Button variant="primary" size="sm">En savoir plus</Button>
      </Card.Body>
    </Card>
  );
}
