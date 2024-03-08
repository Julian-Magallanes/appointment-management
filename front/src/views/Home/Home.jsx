import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css"
import MainHome from "../../components/MainHome/MainHome";
import MyTurns from "../../components/MyTurns/MyTurns";
import Footer from "../../components/Footer/Footer";
import LoginModal from "../../components/LoginModal/LoginModal";
import RegisterModal from "../../components/RegisterModal/RegisterModal"
const Home = () =>{
    return(
    <div className={styles.homeContainer}>
        <div className={styles.homeContainerChildren}> 
        <Navbar/>
        <MainHome/>
        <MyTurns/>
        <Footer/>
        <LoginModal/>
        <RegisterModal/>
        </div>
    </div>
)
}

export default Home