import React from "react";
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';
// Component to contain a creator's info

function ContentCreatorCard({ contentCreator, handleCurrentCreator, handleEditCreator}) {
    // console.log(contentCreator.imageUrl);

    const handleViewCreatorClick = () => {
        const currentCreator = contentCreator;
        handleCurrentCreator(currentCreator);
    }

    const handleEditCreatorClick = () => {
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    }

    return (
        <>
            {/* Display their name, url, description, and image */}
            <div className="content-creator-card">
                <div className="content-creator-card-image">
                    <img src={contentCreator.imageURL} alt={contentCreator.name} />
                </div>
                <div className="content-creator-card-details">
                    <b>{contentCreator.name}</b> <br />
                    <HiOutlineInformationCircle onClick={handleViewCreatorClick} /> &nbsp; 
                    <FiEdit2 onClick={handleEditCreatorClick} />
                    <p className="description">{contentCreator.description}</p>
                    <a href={contentCreator.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                </div>
            </div>
        </>
    );
}

export default ContentCreatorCard;