import React from 'react';
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
// Page to view a single content creator

function ViewCreator({ contentCreator, handleEditCreator }) {
    const handleEditCreatorClick = () => {
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    }

    return (
        <div>
            <div className='ViewOne'>
                <div className="ViewOne-container">
                    <div className='creator-first'>
                        <div>
                            <img src={contentCreator.imageURL} alt={contentCreator.name} />
                            <h2 style={{margin: 0}}>{contentCreator.name}</h2>
                        </div>
                        <div className='social-btns'>
                        {contentCreator.youtube !== null && contentCreator.youtube !== '' ? (
                        <a className='btns' href={'https://youtube.com/@' + contentCreator.youtube} target='__blank'>
                            <AiFillYoutube size={30} /> {contentCreator.youtube}
                        </a>
                        ) : ""} &nbsp;
                        {contentCreator.instagram !== null && contentCreator.instagram !== '' ? (
                            <a className='btns' href={'https://www.instagram.com/' + contentCreator.instagram} target='__blank'>
                                <AiFillInstagram size={30} /> {contentCreator.instagram}
                            </a>
                        ): ""} &nbsp;
                        {contentCreator.twitter !== null && contentCreator.twitter !== "" ? (
                            <a className='btns' href={'https://twitter.com/' + contentCreator.twitter} target='__blank'>
                                <AiOutlineTwitter size={30} /> {contentCreator.twitter}
                            </a>
                        ): ""}
                            
                        </div>
                        <hr />
                    </div>
                    <div>
                        <p>{contentCreator.description}</p>
                    </div>
                    <button className="submit-edit-button" onClick={handleEditCreatorClick}>Edit</button> &nbsp;
                </div>
            </div>
        </div>
    )
}

export default ViewCreator;