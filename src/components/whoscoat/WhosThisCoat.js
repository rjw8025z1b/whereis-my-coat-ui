import { useState } from 'react';
import './WhosThisCoat.css';

function WhosTheCoat() {

    const [showResults, setShowResults] = useState({
        showFields: false
    })

    const handleChange = (event) => {
        setShowResults({ showFields: true });
    }

    const handleSubmit = (event) => {
        console.log('Your favorite flavor is: ' + event.target.value);
    }

    return (
        <div className="WhosThisCoat">
            <header className='Whos-header'></header>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto Slab"></link>
            <h1 className='Whos-title'>WHO'S THIS F*** COAT</h1>
            <form className="Whos-input" onSubmit={handleSubmit}>
                <input type='date' placeholder='date' value="2022-07-22" />
                <input type='text' placeholder='city' className='Whos-city'/>
                <input type="file" className='Whos-file'/>
                <select className='Whos-select'>
                    <option selected value="document">Document</option>
                    <option value="cloathes">Cloathes</option>
                    <option value="key">Key</option>
                    <option value="phone">Phone</option>
                    <option value="other">Other</option>
                </select>
                <input type="submit" value="SEND" className='Whos-button' />
            </form>
        </div>
    );
}

export default WhosTheCoat;
