import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='line-wrapper'>
                <div className='line'></div>
            </div>
            <div className='container'>
                <div className='footer-content'>
                    <div className='footer-link-block'>
                        <div>
                            <div className='footer-title'>Protocols</div>
                            <div className='footer-column'>
                                <Link className='footer-links' to='#'>Liquidity Protocol</Link>
                                <Link className='footer-links' to='#'>Agregation Protocol</Link>
                                <Link className='footer-links' to='#'>Limit Order Protocol</Link>
                            </div>
                        </div>
                        <div>
                        <div className='footer-title'>Governance</div>
                            <div className='footer-column'>
                                <Link className='footer-links' to='#'>Super DAO</Link>
                                <Link className='footer-links' to='#'>Token</Link>
                                <Link className='footer-links' to='#'>Forum</Link>
                            </div>
                        </div>
                        <div>
                        <div className='footer-column'>
                        <div className='footer-title'>Support</div>
                                <Link className='footer-links' to='#'>Help center</Link>
                                <Link className='footer-links' to='#'>Press room</Link>
                                <Link className='footer-links' to='#'>Bug report</Link>
                            </div>
                        </div>
                        <div>
                        <div className='footer-column'>
                        <div className='footer-title'>Developers</div>
                                <Link className='footer-links' to='#'>Documentation</Link>
                                <Link className='footer-links' to='#'>GitHub</Link>
                                <Link className='footer-links' to='#'>Audit</Link>
                                <Link className='footer-links' to='#'>Bug Bounty</Link>
                            </div>
                        </div>
                    </div>
                    <div className='footer-right'>
                    <div className='footer-title'>
                                Subscribe to 1inch newsletter
                            </div>
                            <div className='footer-column'>
                                <p className='text'>
                                Get the latest news and updates
                                </p>
                                <div className='footer-input-wrap'>
                                    <Link className='button' to='#'>Subscribe</Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;