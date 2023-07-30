import React from "react";
import styles from "../ShowStory/ShowStory.module.css"
// import rightArrow from "../../assets/RightArrow.svg"
// import leftArrow from "../../assets/LeftArrow.svg"
import cross from "../../assets/CrossButton.svg"
// import share from "../../assets/ShareButton.svg"

// import like from "../../assets/Vector.svg"
import Stories from "react-insta-stories";
const ShowStory = ({ setShow, fullData }) => {
    // const closeS = () => {
    //     setShow(false);
    // };

    // const handleClick = () => {

    //     console.log("check")
    // }

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
            <div onClick={action('close')} style={{ background: `url(${item?.image}) no-repeat`, backgroundSize: 'cover', height: "100%", width: "100%", backdropfilter: "blur(0px)" }}>
                {/* <div style={{ height: "20px", width: "100%", borderColor: "black", zIndex: "9", display: "flex", flexDirection: "row", position: "absolute", top: "45px", alignContent: "space-between" }}> */}
                {/* <img src={Bkm} ></img> */}
                {/* <button className="close-button" onClick={() => action('close')}>&times;</button> */}

                {/* </div> */}
                <div style={{ position: "relative", marginTop: "380px", width: "100%", left: "0", height: "45%", backgroundColor: "rgba(0, 0, 0, 0.6)", backdropfilter: "blur(5px)", background: "linear-gradient(0, #303030 59.6%, rgba(89, 87, 87, 0) 102.31%)" }}>
                    <h3 style={{ position: "relative", marginTop: "0px", marginLeft: "10%", color: "white" }}>{item?.heading}</h3>
                    <p style={{ color: "white", position: "relative", marginTop: "20px", textAlign: "center" }}>{item?.description}</p>
                </div>
            </div>
        ),
    }))
    return (
        <>
            <div className={styles.mainCard}>

                <Stories
                    stories={stories} loop={true} />
                {/* <button style={{ position: "relative", marginLeft: "390px", cursor: "pointer", color: "black", zIndex: "" }} onClick={closeS} >close</button> */}

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


{/* <img src={cross} style={{ position: "relative", marginLeft: "360px", marginBottom: "1000px", cursor: "pointer", color: "black", zIndex: "" }} onClick={closeS} ></img> */ }



// <h3 style={{ position: "relative", top: "150px" }} >{item.heading}</h3>
// <p style={{ position: "relative", top: "350px",color:"black",fontWeight:"bolder",fontSize:"10px" }} >{item.description}</p>


{/* <button style={{ height: "25px", width: "20px", position: "relative", top: "600px", left: "328px", zIndex: "1" }}>
                    <img src={Bkm} onClick={closeS}></img>
                </button> */}