// Logos
import TwitterLogo from '../Twitter.png';
import FacebookLogo from '../Facebook.png';
import InstagramLogo from '../Instagram.png';
import GitHubLogo from '../GitHub.png';

//styling
import './footer-css.css';

export default function Footer(){
    return(
        <footer>
            <a href='https://twitter.com/BatallerTed' target='_blank' rel='noreferrer'><img src={TwitterLogo} alt="twitter logo"/></a>
            <a href='https://www.facebook.com/official.ted.bataller' target='_blank' rel='noreferrer'><img src={FacebookLogo} alt="facebook logo"/></a>
            <a href='#' target='_blank' rel='noreferrer'><img src={InstagramLogo} alt="instagram logo"/></a>
            <a href='https://github.com/tjpbataller' target='_blank' rel='noreferrer'><img src={GitHubLogo} alt="github logo"/></a>
        </footer>
    )
}