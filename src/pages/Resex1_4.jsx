import React, { Component } from 'react';

// import { Container } from './styles';

export default class Resex1_4 extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', width: '768px', margin: '0 auto', marginTop: '64px' }}>
                    <code style={{ color: '#fff' }}>
                        {'//'} 4.1 <br/>
                    const empresa = {'{'} <br/>
                    nome: 'Rocketseat', <br/>
                    endereco: {'{'} <br/>
                        cidade: 'Rio do Sul', <br/>
                        estado: 'SC', <br/>
                    } <br/>
                    }; <br/>
                    const {'{'}nome, endereco: {'{'}cidade, estado}} = empresa; <br/>
                    console.log(nome); // Rocketseat  <br/>
                    console.log(cidade); // Rio do Sul  <br/>
                    console.log(estado); // SC  <br/>
                    <br/>
                    {'//'} 4.2 <br/>
                    function mostraInfo({'{'}nome, idade}) {'{'} <br/>
                        console.log(`${'{'}nome} tem ${'{'}idade} anos.`) <br/>
                    } <br/>
                    mostraInfo({'{'} nome: 'Diego', idade: 23 }) <br/>
                    </code>
                </div>
            </div>
        )
    }
}
