import React from "react";
import FilterCard from "../../components/Filter/FilterCard.jsx";
import NavBar from "../../components/NavBar/NavBar.jsx";
import styles from "../HomePage/HomePage.module.css"
import icon from "../../assets/icon.svg";
import icon2 from "../../assets/icon2.png";
function HomePage() {
  let arr = [
    {
      text: "All",
      href: icon,
    },
    {
      text: "Education",
      href: icon2,
    },
    {
      text: "Health",
      href: icon,
    },
    {
      text: "Travel",
      href: icon2,
    },
    {
      text: "Movie",
      href: icon,
    },
    {
      text: "Fitness",
      href: icon2,
    },
  ];

  return (
    <div className={styles.mainContent}>
      <NavBar />
      <div className={styles.mainCard}>
        {arr.map((item, indx) => {
          return <FilterCard key={indx} text={item.text} img={item.href} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
