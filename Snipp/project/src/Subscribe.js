import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

export default function Subscribe() {
    return (
        <section className="subscribeProjectBg">
            <section className="subscribeProject container text-center">
                <div className="subscribeTop d-flex flex-column align-items-center gap-2">
                    <h5>
                        Subscribe To Our Newsletter
                    </h5>
                    <p>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts. Separated they live in
                    </p>
                </div>
                <div className="subscribeBottom">
                    <input placeholder="Enter Email Address" type="Email"/>
                    <FontAwesomeIcon className="subscribeIcon" icon={faPaperPlane}/>
                </div>
            </section>
        </section>
    )
}