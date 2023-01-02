import { useState } from 'react';
import './WhereIsCoat.css';
import results from '../../result'

function WhereIsCoat() {
  const [showResults, setShowResults] = useState({
    showFields: false
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    console.log(target.name, target.value)
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
            return <tr>
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
