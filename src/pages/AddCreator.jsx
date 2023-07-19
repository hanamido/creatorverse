import React, { useState } from "react";
import { supabase } from '../../client';
// Page to allow the user to add a new content creator

function AddCreator() {
    const [name, setName] = useState(''); 
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(''); 

    // async function to add the new content creator to the db
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const newCreator = {name, url, description, imageURL};
        console.log(newCreator); 
        const { data, error } = await supabase
            .from('creators')
            .upsert(newCreator);
        alert('Successfully added creator!');
        window.location.reload(false);
    }

    return (
        <div className="add-edit-form">
            <form method="post" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>&nbsp;
                <input type="text" id="name" className="textarea" required value={name} onChange={e => setName(String(e.target.value))} /><br />
                <label htmlFor="description">Description:</label>&nbsp; 
                <textarea className="textarea" id="description" rows="3" cols="50" required value={description} onChange={e => setDescription(String(e.target.value))} /><br />
                <label htmlFor="imageURL">Image URL: (optional)</label>&nbsp;
                <input type="text" id="imageURL" className="textarea" value={imageURL} onChange={e => setImageURL(String(e.target.value))} /><br />
                <label htmlFor="url">URL:</label>&nbsp;
                <input type="text" id="url" className="textarea" required value={url} onChange={e => setUrl(String(e.target.value))} /><br />
                <button className="submit-edit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCreator; 