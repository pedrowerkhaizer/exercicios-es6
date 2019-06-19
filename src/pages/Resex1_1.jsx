import React, { Component } from 'react';


export default class Resex1_1 extends Component {
  render() {
    return (
      <div>
        <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', margin: '512px', marginTop: '64px'}}>
          <code style={{ color: '#fff' }}>
            class Usuario{'{'} <br />
            constructor(email, senha){'{'} <br />
            this.email = email <br />
            this.senha = senha <br />
            {'}'} <br />
            isAdmin() {'{'} <br />
            return this.admin === true <br />
            {'}'} <br />
            {'}'} <br />
            <br />
            const Usu1 = new Usuario('teste@teste.com', 'senha123') <br />
            const Adm1 = new Admin('testeAdmin@teste.com', 'senha123') <br />
            <br />

            console.log(Usu1.isAdmin()) // false <br />
            console.log(Adm1.isAdmin()) // true <br />

          </code>
        </div>
      </div>
    )
  }
}
