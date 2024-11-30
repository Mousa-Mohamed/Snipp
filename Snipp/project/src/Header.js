export default function Header() {
    return (
        <header className="headerProject container d-flex justify-content-between align-items-center p-5">
            <div className="headerLogo">
                <p className="headerLogoText m-0 text-uppercase">
                    snipp
                </p>
            </div>
            <div className="headerList">
                <ul className="headerItems m-0">
                    <li className="headerItem">Home</li>
                    <li className="headerItem">About</li>
                    <li className="headerItem">Services</li>
                    <li className="headerItem">Portfolio</li>
                    <li className="headerItem">Case Studies</li>
                    <li className="headerItem">Contact</li>
                    <li className="headerItem">Get In Touch</li>
                </ul>
            </div>
        </header>
    )
}