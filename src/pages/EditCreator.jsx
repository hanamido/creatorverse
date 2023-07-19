import React, { useState } from "react";
import { supabase } from "../../client";
// Page to allow a user to update a content creator's info

function EditCreator({ creatorToEdit }) {
    const [name, setName] = useState(creatorToEdit.name); 
    const [url, setUrl] = useState(creatorToEdit.url);
    const [description, setDescription] = useState(creatorToEdit.description);
    const [imageURL, setImageURL] = useState(creatorToEdit.imageURL); 
    // Get content creator's info from the db
    
    // Loading content creator's info into the form
    // Async function to update content creator in the db
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedCreator = { name: name, url: url, description: description, imageURL: imageURL }
        console.log('form submitted');
        const { data, error } = await supabase 
            .from('creators')
            .update(updatedCreator)
            .eq('id', creatorToEdit.id);
        if (error) throw error;
        alert('Successfully updated creator!');
    }

    // Async function to delete the creator from the db
    const handleDelete = async (e) => {
        e.preventDefault();
        const { error } = await supabase    
            .from('creators')
            .delete()
            .eq('id', creatorToEdit.id);
        if (error) throw error;
        alert('Successfully deleted creator!');
    }

    const handleDeleteClick = () => {
        
    }

    return (
        <>
            <form onSubmit={handleEditSubmit} className="add-edit-form">
                <label htmlFor="name">Name: </label>&nbsp;
                <input type="text" id="name" name="name" autoComplete="name" required value={name} onChange={e => setName(String(e.target.value))}/>
                <br />
                <label htmlFor="description">Description: </label>&nbsp;
                <input type="textarea" id="description" name="description" required value={description} onChange={e => setDescription(String(e.target.value))} />
                <br />
                <label htmlFor="imageUrl">Image URL: (optional)</label>
                <input type="text" id="imageUrl" name="imageUrl" value={imageURL} onChange={e => setImageURL()}/>
                <br />
                <label htmlFor="url">URL: </label>&nbsp;
                <input type="text" id="url" name="url" required value={url} onChange={e => setUrl(String(e.target.value))} />
                <br />
                <button className="submit-edit-button" type="submit">Save Changes</button> &nbsp;
                <button  id="delete-button" onClick={handleDelete}>Delete</button>
                <br />
            </form>
        </>
    )
}

export default EditCreator; 