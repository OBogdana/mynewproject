import {useState} from 'react';


const App = () => {
    const [state, setState] = useState({isAdmin: false, userName: "Kvas"});
    const {isAdmin} = state;
    const assignAdmin = () => {
        setState({...state, isAdmin: true});
    }
    return (
        <>
            <h1>O, you is {isAdmin ? 'ADMIN' : 'a user'}</h1>
            <button onClick={assignAdmin}>Click</button>
        </>
    )
}

export default App;
