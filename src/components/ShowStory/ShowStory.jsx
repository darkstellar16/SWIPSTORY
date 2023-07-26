import React from "react";
import styles from "../ShowStory/ShowStory.module.css"
// import rightArrow from "../../assets/RightArrow.svg"
// import leftArrow from "../../assets/LeftArrow.svg"
// import cross from "../../assets/CrossButton.svg"
// import share from "../../assets/ShareButton.svg"
// import Bkm from "../../assets/BookMark.svg"
// import like from "../../assets/Vector.svg"
import Stories from "react-insta-stories";
const ShowStory = ({ setShow, fullData }) => {
    const closeS = () => {
        setShow(false);

    };
    // console.log(fullData);

    // const data = [
    //     {
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTO1EGDkqupUu1P7uOsZanrJr82F-bW1GpWQ&usqp=CAU",
    //         heading: 'Story 1',
    //         description: 'This is the first story.',
    //         category: "a"
    //     },
    //     {
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnU8i-ALinF3EAKcuSxyqghD640k6r2RjFw&usqp=CAU",
    //         heading: 'Story 2',
    //         description: 'This is the second story.',
    //         category: "b"
    //     },
    //     {
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnU8i-ALinF3EAKcuSxyqghD640k6r2RjFw&usqp=CAU",
    //         heading: 'Story 3',
    //         description: 'This is the third story.',
    //         category: "c"
    //     },
    // ];

    const stories = fullData?.map((item) => ({
        content: ({ action, isPaused }) => (
            <div style={{ background: `url(${item.image}) no-repeat`, backgroundSize: 'cover' }}>
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                {/* <h1>{item.category}</h1> */}
            </div>
        ),
    }))
    return (
        <>
            <div className={styles.mainCard}>
                {/* <h1>React Insta Stories App</h1> */}
                <Stories stories={stories} loop={true} />
            </div>
        </>
    )

    // return (
    //     <>
    //         <ReactStories
    //             stories={story}
    //             loop={true}
    //         />

    //     </>
    // )
};
export default ShowStory;
{/* <div className={styles.btnDiv}>
                    <img src={cross} onClick={closeS} />
                    <img src={share} />
                </div>
                <div className={styles.btns}>
                    <img src={Bkm} />
                    <img src={like} />
                </div> */}

{/* <div className={styles.arrow2}><img src={rightArrow} className={styles.right} alt="Arrow" /></div> */ }


{/* <div className={styles.arrow1}> <img src={leftArrow} className={styles.left} alt="Arrow" /></div> */ }



// <InstaStories
// stories={fullData?.map(story => ({

//     content: (
//         <div className={styles.storyContent}>
//             <img src={story?.image} alt={story?.heading}></img>

//         </div>
//     ), duration: 5000,
//     header: { heading: story?.heading },

// }))}
// defaultInterval={3000}
// loop
// width="100%"
// height="80vh"

// />


// stories={stories?.map((story) => ({
//     content: (
//         <div className={styles.storyContent}>
//             <img src={story?.image} alt={story?.heading} />
//         </div>
//     ),
//     duration: 5000,
//     header: { heading: story?.heading },
// }))}
// defaultInterval={3000}
// loop
// width="100%"
// height="80vh"

{/* <ReactStories
                stories={story}
                loop={true}
            /> */}