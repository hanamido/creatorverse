import React, { useState } from "react";
import { supabase } from '../../client';
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
// Page to allow the user to add a new content creator

function AddCreator() {
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(''); 
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');

    // async function to add the new content creator to the db
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const newCreator = {name, description, imageURL, youtube, instagram, twitter};
        console.log(newCreator); 
        const { data, error } = await supabase
            .from('creators')
            .upsert(newCreator);
        alert('Successfully added creator!');
        window.location = '/';
    }

    return (
        <div className="add-edit-form">
            <form method="post" onSubmit={handleSubmit} className="add-edit-form">
                <label htmlFor="name">Name:</label>
                <p style={{marginBottom: 10}}>Enter the creator's name.</p>
                <input type="text" id="name" className="textarea" required value={name} onChange={e => setName(String(e.target.value))} /><br />

                <label htmlFor="description">Description:</label>
                <p style={{marginBottom: 10}}>Provide details about the content creator. Who are they? What are they best known for? What are their accomplishments?</p>
                <textarea id="description" rows="5" cols="50" className="textarea" required value={description} onChange={e => setDescription(String(e.target.value))} /><br />
                
                <label htmlFor="imageURL">Image URL: (optional)</label>
                <p style={{marginBottom: 10}}>Provide a link for an image of the creator (including http:// or https://, only in .jpg, .png, .jpeg form), if known.</p>
                <input type="text" id="imageURL" className="textarea" value={imageURL} onChange={e => setImageURL(String(e.target.value))} /><br />
                
                <h4 style={{textAlign: 'left', marginBottom: 0}}>Social Media Links</h4>
                <p>Please provide at least one social media link for the creator.</p>

                <label htmlFor="youtubeHandle"><AiFillYoutube /> Youtube:</label>
                <p style={{marginBottom: 10}}>Provide the creator's Youtube handle (without the @).</p>
                <input type="text" className="url" value={youtube} onChange={e => setYoutube(String(e.target.value))} /><br />
                
                <label htmlFor="instagramHandle"><AiFillInstagram /> Instagram:</label>
                <p style={{marginBottom: 10}}>Provide the creator's Instagram handle (without the @).</p>
                <input type="text" className="url" value={instagram} onChange={e => setInstagram(String(e.target.value))} /><br />
                
                <label htmlFor="twitterUrl"><AiOutlineTwitter /> Twitter:</label>
                <p style={{marginBottom: 10}}>Provide the creator's Twitter handle (without the @).</p>
                <input type="text" className="url" value={twitter} onChange={e => setTwitter(String(e.target.value))} /><br />
                <button className="submit-edit-button" 
                type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCreator; 