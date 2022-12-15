import React from 'react';
import './App.css';

type headerProps = {
    name: string;
}

const Header: React.FC<headerProps> = (props) => (
    <header>Header {props.name}</header>
)

const App = () => (
    <div className="App">
        <Header name='WT'/>
        <h1>Project</h1>
    </div>
)

export default App;
