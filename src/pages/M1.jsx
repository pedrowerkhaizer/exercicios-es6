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
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 2</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find): <br />
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    const usuarios = [ <br />
                    {'{'}nome: 'Diego', idade: 23, empresa: 'Rocketseat'{'}'}, <br />
                    {'{'}nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'{'}'}, <br />
                    {'{'}nome: 'Lucas', idade: 30, empresa: 'Facebook'{'}'}, <br />
                    ]; <br />
                  </code>
                </div>
              </Card.Text>
              <Card.Subtitle style={{ textAlign: "justify" }}>2.1 Utilizando o map</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]</Card.Text>
              <Card.Subtitle style={{ textAlign: "justify" }}>2.2 Utilizando o filter</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>
                Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos:
              <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>[{'{'} nome: 'Diego', idade: 23, empresa: 'Rocketseat' {'}'}]</code>
                </div>
              </Card.Text>
              <Card.Subtitle style={{ textAlign: "justify" }}>2.3 Utilizando o find</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined</Card.Text>
              <Card.Subtitle style={{ textAlign: "justify" }}>2.4 Unindo operações</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>
                Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:
              <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    {'//'} Resultado: <br />
                    {'['}
                    {'{'} nome: 'Diego', idade: 46, empresa: 'Rocketseat' {'}'}, <br />
                    {'{'} nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' {'}'},
                    {']'} <br />
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_2'>
                <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 3</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Converta as funções nos seguintes trechos de código em Arrow Functions<br />
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>const User1 = new Usuario('email@teste.com', 'senha123'); <br />
                    {'//'} 3.1
                    const arr = [1, 2, 3, 4, 5]; <br />
                    arr.map(function(item) {'{'} <br />
                    return item + 10; <br />
                    }); <br />
                    <br />
                    {'//'} 3.2 <br />
                    {'//'} Dica: Utilize uma constante pra function <br />
                    const usuario = {'{'} nome: 'Diego', idade: 23 }; <br />
                    function mostraIdade(usuario) {'{'} <br />
                    return usuario.idade; <br />
                    } <br />
                    mostraIdade(usuario); <br />
                    <br />
                    {'//'} 3.3 <br />
                    {'//'} Dica: Utilize uma constante pra function <br />
                    const nome = "Diego"; <br />
                    const idade = 23; <br />
                    function mostraUsuario(nome = 'Diego', idade = 18) {'{'} <br />
                    return {'{'} nome, idade }; <br />
                    } <br />
                    mostraUsuario(nome, idade); <br />
                    mostraUsuario(nome); <br />
                    <br />
                    {'//'} 3.4 <br />
                    const promise = function() {'{'} <br />
                    return new Promise(function(resolve, reject) {'{'} <br />
                    return resolve(); <br />
                    }) <br />
                    } <br />
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_3'>
                <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 4</Card.Title>
              <Card.Subtitle style={{ textAlign: "justify" }}>4.1 Desestruturação simples</Card.Subtitle>
              <Card.Text style={{ textAlign: "justify" }}>
                A partir do seguinte objeto:
             <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    const empresa = {'{'}  <br />
                    nome: 'Rocketseat', <br />
                    endereco: {'{'} <br />
                    cidade: 'Rio do Sul', <br />
                    estado: 'SC', } <br />
                    }; <br />
                  </code>
                </div>
              </Card.Text>
              <Card.Text style={{ textAlign: "justify" }}>
                Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
               fim deve ser possível fazer o seguinte:
            <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    console.log(nome); {'//'} Rocketseat   <br />
                    console.log(cidade); {'//'} Rio do Sul <br />
                    console.log(estado); {'//'} SC <br />
                  </code>
                </div>
              </Card.Text>
              <Card.Subtitle style={{ textAlign: 'justify' }}>4.2 Desestruturação em parâmetros</Card.Subtitle>
              <Card.Text style={{ textAlign: 'justify' }}>
                Na seguinte função:
              <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    function mostraInfo(usuario) {'{'}  <br />
                    return `${'{'}usuario.nome} tem ${'{'}usuario.idade} anos.`; <br />
                    } <br />
                    mostraInfo({'{'} nome: 'Diego', idade: 23 }) <br />
                  </code>
                </div>
                Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
                separadamente e a função poder retornar apenas:
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    return `${'{'}nome} tem ${'{'}idade} anos.`;
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_4'>
                <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 5</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                Utilizando o operador de rest/spread (...) realize as seguintes operações: <br />
                <Card.Subtitle style={{ textAlign: 'justify' }}>5.1 Rest</Card.Subtitle>
                <Card.Text>
                  A partir do array: <code style={{ color: '#1e1e1e' }}>const arr = [1, 2, 3, 4, 5, 6]</code>, defina uma variável x que recebe a primeira
    posição do vetor e outra variável y que recebe todo restante dos dados.
              </Card.Text>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    console.log(x); {'//'} 1 <br />
                    console.log(y); {'//'} [2, 3, 4, 5, 6] <br />
                  </code>
                </div>
                Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    {'//'} function soma... <br />
                    console.log(soma(1, 2, 3, 4, 5, 6)); {'//'} 21 <br />
                    console.log(soma(1, 2)); {'//'} 3   <br />
                  </code>
                </div>
              </Card.Text>
              <Card.Subtitle style={{ textAlign: 'justify' }}>5.2 Spread</Card.Subtitle>
              <Card.Text style={{ textAlign: 'justify' }}>
                A partir do objeto e utilizando o operador spread:
              <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                    const usuario = {'{'} <br />
                    nome: 'Diego', <br />
                    idade: 23, <br />
                    endereco: {'{'} <br />
                    cidade: 'Rio do Sul', <br />
                    uf: 'SC', <br />
                    pais: 'Brasil', <br />
                    } <br />
                    }; <br />
                  </code>
                </div>
                Crie uma variável <code>usuario2</code> que contenha todos os dados do usuário porém com nome Gabriel. <br/>
                Crie uma variável <code>usuario3</code> que contenha todos os dados do usuário porém com cidade Lontras. <br/>
              </Card.Text>
              <Link to='/resex1_5'>
                <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 6</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
              Converta o seguinte trecho de código utilizando Template Literals: <br/>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                  const usuario = 'Diego';  <br/>
                  const idade = 23; <br/>
                  console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');   <br/>
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_6'>
                <Button variant="primary">Deixa eu ver como você resolveu essa treta</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">19 de junho de 2019</Card.Footer>
          </Card>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Exercício 7</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
              Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto: <br/>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', marginTop: '8px', marginBottom: '8px;' }}>
                  <code style={{ color: '#fff' }}>
                  const nome = 'Diego'; <br/>
                  const idade = 23; <br/>
                  const usuario = {'{'} <br/>
                   nome: nome, <br/>
                   idade: idade, <br/>
                   cidade: 'Rio do Sul', <br/>
                  }; <br/>
                  </code>
                </div>
              </Card.Text>
              <Link to='/resex1_7'>
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
