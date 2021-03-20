import React from 'react';
import githubImg from '../images/github-inverted.png';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer-text'>Zirafnik</p>
            <a target='_blank' href='https://github.com/Zirafnik/shopping-cart'><img className='github-image' src={githubImg} /></a>
        </footer>
    )
}

export default Footer;