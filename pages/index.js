import React from "react";

//internal import
import Style from "../styles/index.module.css";
import {
    HeroSection,
    Service,
    BigNFTSlider,
    Title,
    Category,
    Filter
} from "../components/componentsindex"
const Home = () => {
    return (
        <div className={Style.homePage}>
            <HeroSection/>
            <Service/>
            <BigNFTSlider/>
            <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
            <Filter/>
            <Title
             heading="Browse by category"
             paragraph="Explore the NFTs in the most featured categories."
             />
             <Category />
            
        </div>
    )
}

export default Home;