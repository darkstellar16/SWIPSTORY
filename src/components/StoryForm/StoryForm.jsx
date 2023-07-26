import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../StoryForm/StoryForm.module.css"
import axios from "axios"

const StoryForm = ({ setIsOpenS }) => {

    const [head, setHead] = useState('');
    const [desc, setDesc] = useState('');
    const [img, setImg] = useState('');
    const [cat, setCatg] = useState('');

    const [posts, setPosts] = useState([]);
    // const [currentForm, setCurrentForm] = useState(0);
    const [slide, setSlide] = useState([1, 1, 1]);

    const addFormData = () => {
        const formData = {
            heading: head,
            description: desc,
            image: img,
            category: cat,
        }
        setPosts((ans) => [...ans, formData]);
        openNextForm();
    }
    const openNextForm = () => {
        clearFormData();
        // setCurrentForm((currentForm) => currentForm + 1);
    }
    const clearFormData = () => {
        setHead('')
        setDesc('');
        setImg('');
        setCatg('')
    };
    // console.log(posts);

    const handleSlide = () => {
        if (slide.length < 6)
            setSlide((prev) => [...prev, 1]);
    }

    const token = JSON.parse(localStorage.getItem('Token'));
    // console.log(token);
    const userId = JSON.parse(localStorage.getItem("userId"))
    console.log(userId);


    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const storyData = async () => {
        let res = { posts, userId };
        try {
            const info = await axios.post('http://localhost:8000/story', res, config)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }
    // console.log(storyData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const check = await storyData();
        // console.log(check.data);
        if (check) {
            setPosts([]);
            setIsOpenS(false);
            alert("story added");

        }
        else {
            alert("cannot create post");
        }
        setIsOpenS(false);
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

            <form>
                <div className={styles.formField}>
                    <input
                        className={styles.heading}
                        type="text"
                        placeholder=' Your Heading'
                        value={head}
                        onChange={(e) => setHead(e.target.value)}
                    />
                    <input
                        className={styles.description}
                        type="text"
                        placeholder=' Story Description'
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <input
                        className={styles.url}
                        type="text"
                        placeholder=' Add ImageURL'
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                    <select value={cat}
                        onChange={(e) => setCatg(e.target.value)}
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
            <button className={styles.post} type="submit" onClick={handleSubmit}>Post</button>
            <button className={styles.next} onClick={addFormData}>Next</button>
            <button className={styles.previous}>Previous</button>
        </>
    )

}


export default StoryForm;





