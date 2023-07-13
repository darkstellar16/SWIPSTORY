import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../StoryForm/StoryForm.module.css"

const StoryForm = () => {

    const [formData, setFormData] = useState({
        Heading: '',
        Description: '',
        ImgURL: '',
        Category: '',
    });
    const [posts, setPosts] = useState([{}]);
    const [currentForm, setCurrentForm] = useState(0);
    const [slide, setSlide] = useState([1, 1, 1]);

    const addFormData = () => {
        setPosts((ans) => [...ans, formData]);
        openNextForm();
    }
    const openNextForm = () => {
        clearFormData();
        setCurrentForm((currentForm) => currentForm + 1);
    }
    const clearFormData = () => setFormData({
        Heading: '',
        Description: '',
        ImgURL: '',
        Category: '',
    });
    console.log(posts)

    const handleSlide = () => {
        if (slide.length < 6)
            setSlide((prev) => [...prev, 1]);
    }


    return (
        <>
            <div className={styles.slideField}>
                {slide.map((item, idx) => {
                    return (
                        <button className={styles.sld}>
                            Slide {idx + 1}
                        </button>
                    )
                })}
                <button onClick={handleSlide} className={styles.strAdd}>Add +</button>
            </div>

            {/* {posts.map((item) => {
                if (item.Heading !== '') {
                    return (
                        (<div>
                            <h4>{item.Heading}</h4>
                            <h4>{item.Description}</h4>
                        </div>)
                    )

                } else return null;
            })
            } */}
            <form >
                <div className={styles.formField}>
                    <input
                        className={styles.heading}
                        type="text"
                        placeholder=' Your Heading'
                        value={formData.Heading}
                        onChange={(e) => { setFormData({ Heading: e.target.value }) }}
                    />
                    <input
                        className={styles.description}
                        type="text"
                        placeholder=' Story Description'
                        value={formData.Description}
                        onChange={(e) => { setFormData({ Description: e.target.value }) }}
                    />
                    <input
                        className={styles.url}
                        type="text"
                        placeholder=' Add ImageURL'
                        value={formData.ImgURL}
                        onChange={(e) => setFormData((prevFormData) => (
                            { ...prevFormData, ImgURL: e.target.value }
                        ))}
                    />
                    <select value={formData.Category}
                        onChange={(e) => { setFormData({ Category: e.target.value }) }}
                        placeholder="Select Category"
                        className={styles.category}
                    >
                        <option value="">Select Category</option>
                        <option value="Food">Food</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        <option value="Movies">Movies</option>
                        <option value="Education">Education</option>
                    </select>
                </div>
            </form>
            <h3 className={styles.hed}>Heading :</h3>
            <h3 className={styles.desc}>Description :</h3>
            <h3 className={styles.pht}>Image :</h3>
            <h3 className={styles.cat}>Category :</h3>
            <button onClick={addFormData} className={styles.post}>Post</button>
            <button className={styles.next}>Next</button>
            <button className={styles.previous}>Previous</button>
        </>
    )

}




export default StoryForm;





