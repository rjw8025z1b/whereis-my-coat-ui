import { useState } from 'react';
import './WhereIsCoat.css';

function WhereIsCoat() {
  const [showResults, setShowResults] = useState({
    showFields: false,
  })

  const [results, setResults] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target.name, target.value)
    fetch('http://127.0.0.1:8000/data/new_item', {
         method: 'POST',
         body: JSON.stringify({
            id: "1",
            photo: "/path",
            date: "2022-12-12",
            city: "Krakow",
            thing: "coat"
         }),
      headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
          },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            setResults(data);
         })
         .catch((err) => {
          console.log('ERROR!!!')
            console.log(err.message);
         });
    setShowResults({ showFields: true });
  }

 

  return (
    <div className="WhereIsCoat">
      <header className="Whereis-header">
      </header>
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto Slab"></link>
      <h1 className='Whereis-title'>WHERE'S MY F*** COAT</h1>
      <form className='Whereis-input' onSubmit={handleSubmit}>
        <input type='date' defaultValue="2022-07-22" />
        <input type='text' placeholder='city' className='Whereis-city' />
        <select className='Whereis-select' defaultValue={document}>
          <option value="document">Document</option>
          <option value="cloathes">Cloathes</option>
          <option value="key">Key</option>
          <option value="phone">Phone</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="FIND" className='Whereis-button' />
      </form>
      {showResults.showFields ? <div className='ResultTable'>
        <table className='Whereis-table'>
          <tr>
            <th>Photo</th>
            <th>City</th>
            <th>Date</th>
            <th>Thing</th>
          </tr>
          {results.map(element => {
            return <tr key={element.id}>
              <td>{element.photo}</td>
              <td>{element.city}</td>
              <td>{element.date}</td>
              <td>{element.thing}</td>
            </tr>
          })}
        </table>
      </div> : null}
    </div>
  );
}

export default WhereIsCoat;
