import React, { useState } from 'react';
import ContentCreatorCard from '../components/ContentCreatorCard';
import ViewCreator from './ViewCreator';

function HomePage({ handleViewAllClick }) {
    return (
        <>
            <button><a href="/" role="button" onClick={handleViewAllClick}>View All Creators</a></button>
            &nbsp;<button><a href="/new" role="button">Add New Creator</a></button>
        </>
    )
}

export default HomePage; 