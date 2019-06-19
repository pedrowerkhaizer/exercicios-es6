import React, { Component } from 'react';

export default class Resex1_5 extends Component {
  render() {
    return (
        <div>
             <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', width: '768px', margin: '0 auto', marginTop: '64px' }}>
                    <code style={{ color: '#fff' }}>
                    {'//'} 5.1  <br/>
                    const arr = [1, 2, 3, 4, 5, 6] <br/>
                    const [x, ...y] = arr <br/>
 <br/>
                    console.log(x); {'//'} 1 <br/>
                    console.log(y); {'//'} [2, 3, 4, 5, 6] <br/>
 <br/>
                    function soma(...values) {'{'} <br/>
                        return values.reduce((a, b) => a + b) <br/>
                    } <br/>
 <br/>
                    console.log(soma(1, 2, 3, 4, 5, 6)); {'//'} 21 <br/>
                    console.log(soma(1, 2)); {'//'} 3 <br/>
                    <br/>
                    {'//'} 5.2 <br/>
                    const usuario = {'{'} <br/>
                        nome: "Diego", <br/>
                        idade: 23, <br/>
                        endereco: {'{'} <br/>
                        cidade: "Rio do Sul", <br/>
                        uf: "SC", <br/>
                        pais: "Brasil" <br/>
                        } <br/>
                    }; <br/>
                    const usu2 = {'{'}...usuario, nome: 'Gabriel'} <br/>
                    const usu3 = {'{'}...usuario, endereco: {'{'}...usuario.endereco, cidade: 'Lontras'}} <br/>
                    console.log(usu2) <br/>
                    console.log(usu3) <br/>
                    </code>
             </div>
        </div>
    );
  }
}
