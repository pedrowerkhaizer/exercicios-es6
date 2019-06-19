import React, { Component } from 'react';

// import { Container } from './styles';

export default class Resex1_2 extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', width: '768px', margin: '0 auto', marginTop: '64px' }}>
                    <code style={{ color: '#fff' }}>
                    {'//'} 2.1 <br/>
const usuarios = {'['} <br/>
    {'{'} nome: 'Diego', idade: 23, empresa: 'Rocketseat' }, <br/>
    {'{'} nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' }, <br/>
    {'{'} nome: 'Lucas', idade: 30, empresa: 'Facebook' }, <br/>
    {']'};
   <br/>
<br/>
const idadesUsu = usuarios.map(usuarios => usuarios.idade); <br/>
console.log(idadesUsu); {'//'} 23, 15, 30 <br/>
<br/>
{'//'} 2.2<br/>
const greaterThan18 = usuarios.filter(usuarios => usuarios.idade >= 18 {'&&'} <br/>
     usuarios.empresa === 'Rocketseat') <br/>
console.log(greaterThan18) {'//'} Diego <br/>
<br/>
{'//'} 2.3 <br/>
const googleEmployee = usuarios.find(usuarios => usuarios.empresa === 'Google') <br/>
console.log(googleEmployee) {'//'} undefined <br/>
<br/>
{'//'} 2.4 <br/>
const doubleAgeUsers = usuarios.map(usuarios => ({'{...'} usuarios, idade: usuarios.idade * 2}))<br/>
    .filter(usuarios => usuarios.idade {'<='} 50);<br/>
console.log(doubleAgeUsers); {'//'} Diego e Gabriel<br/>

                    </code>
                </div>
            </div>
        );
    }
}
