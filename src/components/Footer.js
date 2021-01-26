import React from 'react';

const Footer = () => {
    return (
        <div className='main-footer'>

            <div className='col'>
                <img src='https://www.innovadiscs.com/wp-content/uploads/2014/09/footer_DC@2x.png' alt='footer disc golf basket'></img>
            </div>
            <div className='col'>
                <h4>Visit out featured disc brands!</h4>
                <ul>
                    <li>
                        <a href="https://www.innovadiscs.com/" rel="noreferrer" target="_blank">Innova</a>
                    </li>
                    <li>
                        <a href="https://www.dynamicdiscs.com/" rel="noreferrer" target="_blank">Dyanmic Discs</a>
                    </li>
                    <li>
                        <a href="https://www.discraft.com/" rel="noreferrer" target="_blank">Discraft</a>
                    </li>
                </ul>
            </div>
            <div className='col'>
                <h4>Follow us on socials!</h4>
                <a href="https://www.facebook.com/"  rel="noreferrer" className="fa fa-facebook" target='_blank'> </a>
                <a href="https://twitter.com/" rel="noreferrer" className="fa fa-twitter" target='_blank'> </a>
                <a href="https://instagram.com/" rel="noreferrer" className="fa fa-instagram" target='_blank'> </a>
            </div>

        </div>
    )
}

export default Footer;