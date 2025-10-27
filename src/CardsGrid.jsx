import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from './MyCard';

export default function CardsGrid() {
  const cardsData = [
    {
      id: 1,
      title: 'Capteur de température',
      img: 'https://tse2.mm.bing.net/th/id/OIP.4ymF0RZszmgyPSKOCFRowwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
      text: "Module précis pour mesurer la température ambiante (±0.5°C).",
    },
    {
      id: 2,
      title: 'Module Wi‑Fi',
      img: 'https://soldered.com/productdata/2016/01/108573-Edit.jpg',
      text: "Connectivité sans fil pour télétransmission des données.",
    },
    {
      id: 3,
      title: 'Batterie Li‑Ion',
      img: 'https://image.made-in-china.com/201f0j00yeTUJgzKEnbr/LFP120ah-3-2V-134wh-Kg-LiFePO4-LFP-Lithium-Ion-Battery-Cell-with-Super-Life-Cycle-for-Energy-Storage-System-Telecom-Electrical-Vehicles-Electrical-Boat.jpg',
      text: "Source d'énergie rechargeable haute capacité, légère et sûre.",
    },
    {
      id: 4,
      title: 'Microcontrôleur',
      img: 'https://tse4.mm.bing.net/th/id/OIP.Rhll8nPjq08XpBWOrUQ5hAHaE0?rs=1&pid=ImgDetMain&o=7&rm=3',
      text: "Cœur de votre système embarqué, rapide et fiable.",
    },
  ];

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {cardsData.map(({ id, title, img, text }) => (
        <Col key={id}>
          <MyCard title={title} img={img} text={text} />
        </Col>
      ))}
    </Row>
  );
}
