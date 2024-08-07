import "./Hero.css";
import CheckOutButton from '../Buttons/Check out/CheckOutButton'; 

const Hero = () => {
    return (
        <div className="hero_baner">
            <div className="baber_content">
            <h2 className="baner_title">Amazing Discounts on <br />Pets Products!</h2>
            <CheckOutButton />
            </div>

        </div>
    )
}

export default Hero;