import Customer from "./Images/Used.jpg"



export default function Customers() {
    return (
        <section className="customersProject container text-center">
            <div className="customersTitle">
                <span>customer says</span>
                <h3>Our Satisfied Customer Says</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
            <div className="customersCards">
                <div className="customersCard">
                    <img src={Customer} alt="customer"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <h6>Mousa Mohamed</h6>
                    <span>Web Developer</span>
                </div>
                <div className="customersCard">
                    <img src={Customer} alt="customer"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <h6>Mousa Mohamed</h6>
                    <span>Web Developer</span>
                </div>
                <div className="customersCard">
                    <img src={Customer} alt="customer"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <h6>Mousa Mohamed</h6>
                    <span>Web Developer</span>
                </div>
                <div className="customersCard">
                    <img src={Customer} alt="customer"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <h6>Mousa Mohamed</h6>
                    <span>Web Developer</span>
                </div>
                <div className="customersCard">
                    <img src={Customer} alt="customer"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                        live the blind texts.</p>
                    <h6>Mousa Mohamed</h6>
                    <span>Web Developer</span>
                </div>
            </div>
        </section>
    )
}