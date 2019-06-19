import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default class M1 extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={{ offset: 4 }} style={{ marginTop: '2rem' }}>
              <h1> M1 - Módulo 1 </h1>
            </Col>
          </Row>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 1</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario".
                A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
                em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
                repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe. <br />
                Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não. <br />
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>const User1 = new Usuario('email@teste.com', 'senha123'); <br />
                    const Adm1 = new Admin('email@teste.com', 'senha123'); <br />
                    console.log(User1.isAdmin()) // false <br />
                    console.log(Adm1.isAdmin()) // true
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_1'>
              <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
        </Container>
      </div>
    )
  }
}
