import ReactLogo from './images/logo192.png';

export default function Header(){
    return (
        <header>
            <nav className="nav">
                <img src={ReactLogo} className="nav-logo" alt="This is something else"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}