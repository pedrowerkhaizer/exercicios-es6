import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

export default class M1 extends Component {
  render() {
    return (
        <div>
            <Container>
              <Row>
                <Col md={{offset: 4}} style={{marginTop: '2rem'}}>
                  <h1> M1 - Módulo 1 </h1> 
                </Col> 
              </Row>
            </Container>
        </div>
    )
  }
}
