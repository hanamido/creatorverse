import ContentCreatorCard from '../components/ContentCreatorCard';
import { useRef, forwardRef, useImperativeHandle } from 'react';
/*
* Page to show all content creators
*/

function ShowCreators({ contentCreators, isLoading, handleCurrentCreator, handleEditCreator, refToScroll }) {
    console.log(isLoading);
    // function forwardRef (ref) {
    //     const compRef = useRef();
    //     useImperativeHandle(ref, () => ({
    //       scrollIntoView: () => {
    //         compRef.current.scrollIntoView({ behavior: "smooth" });
    //       }
    //     }));
    // }

    if (!isLoading && contentCreators.length === 0) {
        return (
            <>
            No content creator to display!
            </>
        )
    }
    else {
        return (
            <div className="grid" ref={refToScroll}>
                <div className='ShowCreators'>
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
                </div>
            </div>
        ); 
    }
}

export default ShowCreators;