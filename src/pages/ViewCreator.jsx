import React from 'react';
import { supabase } from '../../client';
// Page to view a single content creator

function ViewCreator({ contentCreator, handleEditCreator }) {
    const handleEditCreatorClick = () => {
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    }

    return (
        <>
            <div>
                <img src={contentCreator.imageURL} alt={contentCreator.name} />
            </div>
            <div>
                <h2>{contentCreator.name}</h2>
                <p className="description">{contentCreator.description}</p>
                <a href={contentCreator.url} target="_blank" rel="noopener noreferrer">
                    Visit Website
                </a>
                <br />
                <button className="submit-edit-button" onClick={handleEditCreatorClick}>Edit</button> &nbsp;
            </div>
        </>
    )
}

export default ViewCreator;