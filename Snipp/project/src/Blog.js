import BlogImg1 from "./Images/image_1.jpg.webp"
import BlogImg2 from "./Images/image_2.jpg.webp"
import BlogImg3 from "./Images/image_3.jpg.webp"

export default function Blog() {
    return (
        <section className="blogProjectBg">
            <section className="blogProject container">
                <div className="blogTitle">
                    <span>Blog</span>
                    <h3>Recent Blog</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                </div>
                <div className="blogCards">
                    <div className="blogCard">
                        <img src={BlogImg1} alt="Blog"/>
                        <span>July 12,2018 Admin</span>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                    <div className="blogCard">
                        <img src={BlogImg2} alt="Blog"/>
                        <span>July 12,2018 Admin</span>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                    <div className="blogCard">
                        <img src={BlogImg3} alt="Blog"/>
                        <span>July 12,2018 Admin</span>
                        <p>Even the all-powerful Pointing has no control about the blind texts</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
