import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <section className="footerProjectBg">
            <section className="footerProject container">
                <div className="footerCards">
                    <div className="footerCard card1">
                        <h6>Snipp</h6>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="footerCard card2">
                        <h6>Quick Links</h6>
                        <ul>
                            <li>Home</li>
                            <li>Case Studies</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footerCard card3">
                        <h6>Contact Information</h6>
                        <p>198 West 21th Street, Suite 721 <br/> New York NY 10016</p>
                        <p>+ 1235 2355 98</p>
                        <p>info@yoursite.com</p>
                        <p>email@email.com</p>
                    </div>
                    <div className="footerCard card4">
                        <FontAwesomeIcon icon={faTwitter} className="footerIcon"/>
                        <FontAwesomeIcon icon={faFacebookF} className="footerIcon"/>
                        <FontAwesomeIcon icon={faInstagram} className="footerIcon"/>
                    </div>
                </div>
                <div className="footerCopy">
                    <p>Copyright ©2024 All rights reserved | This template is made with by Color lib</p>
                </div>
            </section>
        </section>
    )
}