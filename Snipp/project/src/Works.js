import workOne from "./Images/what_is_user_id_in_net_banking_mobile_871b681e52.jpg"
import workTwo from "./Images/-getty-images.webp"
import workThree from "./Images/59687788344d1.jpg"

export default function Works() {
    return (
        <section className="worksProject container">
            <div className="workTop">
                <span>Works</span>
                <h3>
                    View Our Works Below To See Our Design And Way Of Development.
                </h3>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
                </p>
            </div>
            <div className="workMiddle">
                <div className="workItem top">
                    <div className="left">
                        <img
                            src={workOne}
                            alt=""/>
                    </div>
                    <div className="right">
                        <span>illustration</span>
                        <h6>Even The All-powerful Pointing Has No Control</h6>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar.
                        </p>
                        <button>View Portfolio</button>
                    </div>
                </div>
                <div className="workItem middle">
                    <div className="right">
                        <span>illustration</span>
                        <h6>Even The All-powerful Pointing Has No Control</h6>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar.
                        </p>
                        <button>View Portfolio</button>
                    </div>
                    <div className="left">
                        <img
                            src={workThree}
                            alt=""/>
                    </div>
                </div>
                <div className="workItem bottom">
                    <div className="left">
                        <img
                            src={workTwo}
                            alt=""/>
                    </div>
                    <div className="right">
                        <span>illustration</span>
                        <h6>Even The All-powerful Pointing Has No Control</h6>
                        <p>
                            Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar.
                        </p>
                        <button>View Portfolio</button>
                    </div>
                </div>
            </div>
            <div className="workBottom">
                <button>View All Projects</button>
            </div>
        </section>
    )
}

