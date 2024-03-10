import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css"
import MainHome from "../../components/MainHome/MainHome";
import Footer from "../../components/Footer/Footer";
import LoginModal from "../../components/LoginModal/LoginModal";
const Home = () =>{
    return(
    <div className={styles.homeContainer}>
        <div className={styles.homeBackground}></div>
        <Navbar/>
        <div className={styles.homeContainerChildren}>
            <MainHome/>
        </div>
        <Footer/>
        {/*<LoginModal/>*/}
    </div>
)
}

export default Home