import './App.css';
import WhereIsCoat from './whereiscoat/WhereIsCoat';
import { useState } from 'react';
import { Link } from "react-router-dom";

function App() {
    const [isShown, setIsShown] = useState({
        showWhereIs: false,
        showButtons: true,
        buttonName: "",
        titleText: ""
    });

    const handleWhereIsClick = event => {
        setIsShown({
            showWhereIs: true,
            showButtons: false,
            buttonName: "FIND",
            titleText: "WHERE'S MY F*** COAT"
        });
    }
    const handleWhosThatClick = event => {
        setIsShown({
            showWhereIs: true,
            showButtons: false,
            buttonName: "SEND",
            titleText: "WHO'S THIS F*** COAT"
        });
    }

    return (
        <div className="App">
            <header className='App-header'></header>
            <div className='App-links'>
                <Link to="/whereiscoat">WHERE IS MY COAT?</Link>
                <Link to="/whosthiscoat">WHOS THIS COAT?</Link>
            </div>
        </div>
    );
}

export default App