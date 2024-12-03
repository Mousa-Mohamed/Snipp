import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {faLaptop} from '@fortawesome/free-solid-svg-icons';
import {faGear} from '@fortawesome/free-solid-svg-icons';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';


export default function Services() {
    return (
        <section className="servicesProject container">
            <div className="servTop">
                <span className="text-uppercase">Our Services</span>
                <h3>Web & Mobile App Design, Bring Your Ideas To Life</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts. Separated they live in</p>
            </div>
            <div className="servBottom">
                <div className="iconCard">
                    <FontAwesomeIcon icon={faLightbulb} className="iconCardIcon Icon1"/>
                    <span>Strategy</span>
                    <p>Even the all-powerful Pointing has no control about the blind texts
                        it is an almost unorthographic.</p>
                </div>
                <div className="iconCard">
                    <FontAwesomeIcon icon={faLaptop} className="iconCardIcon Icon2"/>
                    <span>Design</span>
                    <p>Even the all-powerful Pointing has no control about the blind texts
                        it is an almost unorthographic.</p>
                </div>
                <div className="iconCard">
                    <FontAwesomeIcon icon={faGear} className="iconCardIcon Icon3"/>
                    <span>Development</span>
                    <p>Even the all-powerful Pointing has no control about the blind texts
                        it is an almost unorthographic.</p>
                </div>
                <div className="iconCard">
                    <FontAwesomeIcon icon={faQuestion} className="iconCardIcon Icon4"/>
                    <span>Help & Supports</span>
                    <p>Even the all-powerful Pointing has no control about the blind texts
                        it is an almost unorthographic.</p>
                </div>
            </div>
        </section>
    )
}