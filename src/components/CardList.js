import React from "react";
import { Row, Col } from 'react-bootstrap';
import CardItem from "./CardItem";

function CardList() {
    return (
        <Row xs={1} xl={4} sm={2} lg={3} md={3}>
            <Col>
                <CardItem />
            </Col>
        </Row>
    );
}

export default CardList;