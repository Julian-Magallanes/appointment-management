import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css"
import MainHome from "../../components/MainHome/MainHome";
import MyTurns from "../../components/MyTurns/MyTurns";
const Home = () =>{
    return(
    <div className={styles.homeContainer}>
        <div className={styles.homeContainerChildren}> 
        <Navbar/>
        <MainHome/>
        <MyTurns/>
        </div>
    </div>
)
}

export default Home