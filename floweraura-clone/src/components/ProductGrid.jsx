import React from 'react';
import { Card, Col, Container, Row, Badge ,Button} from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import products from '../data/products';

import roses from '../assets/roses.jpg';
import mug from '../assets/mug.jpg';
import lamp from '../assets/lamp.jpg';
import truffleCake from '../assets/truffleCake.jpg';
import bliss from '../assets/bliss.jpg';
import pinkrose from '../assets/pinkrose.jpg';
import romancegift from '../assets/romancegift.jpg';
import jade from '../assets/jade.jpg';

const ProductGrid = () => (
  <Container className="my-4">
    <h4 className="fw-bold mb-3">Best Selling Flowers & Gifts</h4>
    <h5 className='text-secondary'>Surprise Your Loved Ones</h5>
    <Row className="g-4">
      {products.map((product, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
          <Card className="h-100 shadow-sm">
          <div className="image-container">
          <Card.Img variant="top" src={
               product.image === 'roses' ? roses :
               product.image === 'mug' ? mug :
               product.image === 'lamp' ? lamp :
               product.image === 'truffleCake' ? truffleCake :
               product.image === 'bliss' ? bliss :
               product.image === 'pinkrose' ? pinkrose :
               product.image === 'romancegift' ? romancegift :
               product.image === 'jade' ? jade : ''
          }
          />
            <Button variant="link" className="heart-button">
                <FaHeart />
              </Button>
              </div>
            <Card.Body>
              <Card.Title className="fs-6">{product.name}</Card.Title>
              <p className="mb-1 text-success">{product.price}</p>
              {product.rating && (
                <p className="mb-1">
                  <Badge bg="success">{product.rating} ★</Badge>{" "}
                  <small className="text-muted">({product.reviews})</small>
                </p>
              )}
              {product.tag && <p><Badge bg="info">{product.tag}</Badge></p>}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProductGrid;
