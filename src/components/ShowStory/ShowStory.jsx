import React from "react";
import styles from "../ShowStory/ShowStory.module.css"
import rightArrow from "../../assets/RightArrow.svg"
import leftArrow from "../../assets/LeftArrow.svg"
import cross from "../../assets/CrossButton.svg"
import share from "../../assets/ShareButton.svg"
import Bkm from "../../assets/BookMark.svg"
import like from "../../assets/Vector.svg"

const ShowStory = ({setShow}) => {

    const closeS = () => {
        setShow(false);

    };




    return (
        <>
        <div className={styles.arrow1}> <img src={leftArrow} className={styles.left} alt ="Arrow"/></div>
        <div className={styles.mainCard}>
            <div className={styles.stories}>
                <div>a</div>
                <div>b</div>
                <div>c</div>
                <div>d</div>
                <div>e</div>
                <div>f</div>
            </div>
        <div className={styles.btnDiv}>
        <img src={cross} onClick ={closeS} />
        <img src={share} />
        </div>
        <div className={styles.btns}>
            <img src={Bkm}/>
            <img src={like}/>
        </div>
        </div>
        <div className={styles.arrow2}><img src={rightArrow} className={styles.right} alt ="Arrow"/></div>
        </>
    )
}




export default ShowStory;