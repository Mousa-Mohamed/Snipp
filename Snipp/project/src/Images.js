import imageOne from './Images/image_1.jpg.webp'
import imageTwo from './Images/image_2.jpg.webp'
import imageThree from './Images/image_3.jpg.webp'
import imageFour from './Images/image_4.jpg.webp'
import imageFive from './Images/image_5.jpg.webp'
import imageSix from './Images/image_6.jpg.webp'
import Use from './Images/Used.jpg'

export default function Images() {
    return (
        <section className="imagesProject d-flex justify-content-center align-items-center gap-4 p-4">
            <div className="img-1 imgAll">
                <div className="top">
                    <p>Racks</p>
                    <span>Website</span>
                </div>
                <div className="middle">
                    <img
                        src={imageOne}
                        alt="Rack"
                    />
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <img
                            src={Use}
                            alt="Mousa"
                        />
                    </div>
                    <div className="bottom-right">
                        <p>Mousa</p>
                        <span>Developer</span>
                    </div>
                </div>
            </div>
            <div className="middleImages1">
                <div className="img-5 imgAll mb-4">
                    <div className="top">
                        <p>Racks</p>
                        <span>Website</span>
                    </div>
                    <div className="middle">
                        <img
                            src={imageFive}
                            alt="Rack"
                        />
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <img
                                src={Use}
                                alt="Mousa"
                            />
                        </div>
                        <div className="bottom-right">
                            <p>Mousa</p>
                            <span>Developer</span>
                        </div>
                    </div>
                </div>
                <div className="img-6 imgAll">
                    <div className="top">
                        <p>Racks</p>
                        <span>Website</span>
                    </div>
                    <div className="middle">
                        <img
                            src={imageSix}
                            alt="Rack"
                        />
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <img
                                src={Use}
                                alt="Mousa"
                            />
                        </div>
                        <div className="bottom-right">
                            <p>Mousa</p>
                            <span>Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middleImages2">
                <div className="img-4 imgAll mb-4">
                    <div className="top">
                        <p>Racks</p>
                        <span>Website</span>
                    </div>
                    <div className="middle">
                        <img
                            src={imageFour}
                            alt="Rack"
                        />
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <img
                                src={Use}
                                alt="Mousa"
                            />
                        </div>
                        <div className="bottom-right">
                            <p>Mousa</p>
                            <span>Developer</span>
                        </div>
                    </div>
                </div>
                <div className="img-3 imgAll">
                    <div className="top">
                        <p>Racks</p>
                        <span>Website</span>
                    </div>
                    <div className="middle">
                        <img
                            src={imageThree}
                            alt="Rack"
                        />
                    </div>
                    <div className="bottom">
                        <div className="bottom-left">
                            <img
                                src={Use}
                                alt="Mousa"
                            />
                        </div>
                        <div className="bottom-right">
                            <p>Mousa</p>
                            <span>Developer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-2 imgAll">
                <div className="top">
                    <p>Racks</p>
                    <span>Website</span>
                </div>
                <div className="middle">
                    <img
                        src={imageTwo}
                        alt="Rack"
                    />
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <img
                            src={Use}
                            alt="Mousa"
                        />
                    </div>
                    <div className="bottom-right">
                        <p>Mousa</p>
                        <span>Developer</span>
                    </div>
                </div>
            </div>
        </section>
    )
}