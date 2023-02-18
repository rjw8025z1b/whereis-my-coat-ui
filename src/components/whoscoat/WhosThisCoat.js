import { useState } from 'react';
import './WhosThisCoat.css';
import axios from 'axios';

function WhosTheCoat() {

    const [file, setFile] = useState();

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const [newItem, setNewItem] = useState({
        thing: "document",
        date: "2022-07-22",
        city: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newItem)
        const url = 'http://127.0.0.1:8000/lost_items/new/';
        const formData = new FormData();
        //formData.append('file', file);
        formData.append('file', file);
        formData.append('city', newItem.city)
        formData.append('date', newItem.date)
        formData.append('thing', newItem.thing)
        formData.append("is_found", false)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
      }

    return (
        <div className="WhosThisCoat">
            <header className='Whos-header'></header>
            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto Slab"></link>
            <h1 className='Whos-title'>WHO'S THIS F*** COAT</h1>
            <form className="Whos-input" onSubmit={handleSubmit}>
                <input type='date' placeholder='date' 
                value={setNewItem.date} 
                onChange={(e) => setNewItem({...newItem, date: e.target.value})}/>
                <input type='text' placeholder='city' value={setNewItem.city} 
                className='Whos-city'
                onChange={(e) => setNewItem({...newItem, city: e.target.value})}/>
                <input type="file" className='Whos-file'
                    value={setNewItem.fileName} onChange={handleFileChange}/>
                <select value={setNewItem.thing} className='Whos-select'
                onChange={(e) => setNewItem({...newItem, thing: e.target.value})}>
                    <option value="document">Document</option>
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
