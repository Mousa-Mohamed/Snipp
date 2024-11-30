export default function Header() {
    return (
        <header className="projectHeader container d-flex justify-content-between align-items-center p-5">
            <div className="headerLogo">
                <p className="headerLogoText text-uppercase m-0">
                    snipp
                </p>
            </div>
            <div className="headerList">
                <ul className="headerItems m-0">
                    <li className="headertItem">Home</li>
                    <li className="headertItem">About</li>
                    <li className="headertItem">Services</li>
                    <li className="headertItem">Portfolio</li>
                    <li className="headertItem">Case Studies</li>
                    <li className="headertItem">Contact</li>
                    <li className="headertItem">Get In Touch</li>
                </ul>
            </div>
        </header>
    )
}