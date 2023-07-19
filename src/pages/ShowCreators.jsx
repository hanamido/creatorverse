import ContentCreatorCard from '../components/ContentCreatorCard';
/*
* Page to show all content creators
*/

function ShowCreators({ contentCreators, isLoading, handleCurrentCreator, handleEditCreator }) {
    console.log(isLoading);

    if (!isLoading && contentCreators.length === 0) {
        return (
            <>
            No content creator to display!
            </>
        )
    }
    else {
        return (
            <div>
                <section className='ShowCreators'>
                <h3>All Content Creators:</h3>
                <div className="creators-cards">
                {contentCreators.map((creator) => {
                    console.log(creator.imageURL);
                    return (
                        <div key={creator.id}>
                            <ContentCreatorCard 
                                contentCreator={creator} 
                                handleCurrentCreator={(creator) => handleCurrentCreator(creator)}
                                handleEditCreator={(creator) => handleEditCreator(creator)} />
                        </div>
                    )
                })}
                </div>
                </section>
            </div>
        ); 
    }
}

export default ShowCreators;