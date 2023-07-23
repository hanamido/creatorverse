import React, { useState } from "react";
import { supabase } from "../../client";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";
import 'react-confirm-alert/src/react-confirm-alert.css';
// Page to allow a user to update a content creator's info

function EditCreator({ creatorToEdit }) {
    const [name, setName] = useState(creatorToEdit.name); 
    const [description, setDescription] = useState(creatorToEdit.description);
    const [imageURL, setImageURL] = useState(creatorToEdit.imageURL); 
    const [youtube, setYoutube] = useState(creatorToEdit.youtube);
    const [instagram, setInstagram] = useState(creatorToEdit.instagram);
    const [twitter, setTwitter] = useState(creatorToEdit.twitter);
    // Get content creator's info from the db
    
    // Loading content creator's info into the form
    // Async function to update content creator in the db
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedCreator = { name, description, imageURL, youtube, instagram, twitter }
        console.log('form submitted');
        const { data, error } = await supabase 
            .from('creators')
            .update(updatedCreator)
            .eq('id', creatorToEdit.id)
            .then(() => {
                alert('Successfully edited content creator!');
                window.location = '/';
            })
        if (error) { throw error }
    }

    const onDelete = async () => {
        console.log('proceed to delete');
        const { error } = await supabase    
            .from('creators')
            .delete()
            .eq('id', creatorToEdit.id);
        if (error) throw error
        else { 
            alert('Successfully deleted creator!');
            window.location = '/';
        };
    }

    // Async function to delete the creator from the db
    const handleDelete = (e) => {
        e.preventDefault();
        ConfirmDeleteDialog(onDelete);
        // if (confirm("Are you sure you would like to delete this entry?")) {
        //     const { error } = await supabase    
        //         .from('creators')
        //         .delete()
        //         .eq('id', creatorToEdit.id);
        //     if (error) throw error
        //     else { 
        //         alert('Successfully deleted creator!');
        //         window.location = '/';
        //     };
        // } else {
        //     alert('Redirecting back to the home page...');
        //     window.location = '/';
        // }
    }

    return (
        <>
            <form method="post" onSubmit={handleEditSubmit} className="add-edit-form">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" autoComplete="name" required value={name} onChange={e => setName(String(e.target.value))}/>
                <br />

                <label htmlFor="description">Description: </label>
                <textarea rows="5" cols="50" id="description" name="description" required value={description} onChange={e => setDescription(String(e.target.value))} />
                <br />
                
                <label htmlFor="imageUrl">Image URL: (optional)</label>
                <input type="text" id="imageUrl" name="imageUrl" value={imageURL} onChange={e => setImageURL(String(e.target.value))}/>
                <br />
                
                <label htmlFor="youtubeHandle"><AiFillYoutube /> Youtube: </label>
                <input type="text" id="youtube" name="youtube" value={youtube} onChange={e => setYoutube(String(e.target.value))} />
                <br />

                <label htmlFor="instagramHandle"><AiFillInstagram /> Instagram: </label>
                <input type="text" id="instagram" name="instagram" value={instagram} onChange={e => setInstagram(String(e.target.value))} />
                <br />

                <label htmlFor="twitterHandle"><AiOutlineTwitter /> Twitter: </label>
                <input type="text" id="twitter" name="twitter" value={twitter} onChange={e => setTwitter(String(e.target.value))} />
                <br />

                <div className="buttons-container">
                    <button className="submit-edit-button" type="submit">Save Changes</button> &nbsp;
                    <button id="delete-button" onClick={handleDelete}>Delete</button>
                </div>

                <br />
            </form>
        </>
    )
}

export default EditCreator; 