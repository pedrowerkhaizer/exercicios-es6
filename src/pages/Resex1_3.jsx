import React, { Component } from 'react';

export default class Resex1_3 extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#272635', borderRadius: '8px', padding: '8px', width: '768px', margin: '0 auto', marginTop: '64px' }}>
                    <code style={{ color: '#fff' }}>
                    {'//'} 3.1 <br/>
                    const arr = [1, 2, 3, 4, 5]; <br/>
                    arr.map(item => item + 10) <br/>
                     <br/>
                    {'//'} 3.2 <br/>
                    const usuario = {'{'} nome: 'Diego', idade: 23 }; <br/>
                    const showAge = usuario => usuario.idade; <br/>
                    console.log(showAge(usuario)) <br/>
                     <br/>
                    {'//'} 3.3 <br/>
                    const nome = "Diego"; <br/>
                    const idade = 23; <br/>
                    const showUser = (nome = 'Pedro', idade= 19) => ({'{'}nome, idade}) <br/>
                    console.log(showUser()) <br/>
                    console.log(showUser(nome)) <br/>
                    console.log(showUser(undefined, 54)) <br/>
                    console.log(showUser(nome, idade)) <br/>
                     <br/>
                    {'//'} 3.4 <br/>
                    const promise = () => new Promise((resolve, reject) => resolve()) <br/>
                    </code>
                </div>
            </div >
        );
    }
}
