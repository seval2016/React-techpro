import React from 'react';
import data from "../../assets/data/students.json";
import { Container, Row, Col } from 'react-bootstrap';
import Kisi from './Kisi'


const Tablo = () => {
  return (
    <Container>
      <Row className='d-flex text-center'>
        {
          data.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <Kisi {...item} />
            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Tablo;
