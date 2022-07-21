import React from "react";
import { Row, Col } from 'react-bootstrap';
import CardItem from "./CardItem";

const dummyProducts = [
    {
        id: 0,
        title: "Produk A",
        price: 2000,
        description: "Lorem Ipsum ",
        image: 'https://i.pinimg.com/564x/40/9b/13/409b131fdfa0688e3a8c460ca8ac12ef.jpg',
    },
    {
        id: 1,
        title: "Produk B",
        price: 5000,
        description: "Lorem Ipsum ",
        image: 'https://i.pinimg.com/564x/40/9b/13/409b131fdfa0688e3a8c460ca8ac12ef.jpg',
    },
    {
        id: 2,
        title: "Produk C",
        price: 15000,
        description: "Lorem Ipsum ",
        image: 'https://i.pinimg.com/564x/40/9b/13/409b131fdfa0688e3a8c460ca8ac12ef.jpg',
    },
];

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            {dummyProducts.map((product) => (
                <Col key={product.id}>
                    <CardItem item={product} />
                </Col>
            ))}
        </Row>
    );
}

export default CardList;