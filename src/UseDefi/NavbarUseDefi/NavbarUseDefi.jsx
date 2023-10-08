import React from 'react';
import "./NavbarUseDefi.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const NavbarUseDefi = ()=> {
 const [actOptions, setActOptions] = useState(false)
    return(
        <div className='nav-use-defi'>
            <div className='container'>

                <div className='dropdown-option-wrapper'>
                <div onClick={() => setActOptions(!actOptions)} className='options-dropdown'>
                    <div  className='option-dropdown-button'>Options</div>
                        {actOptions && (
                        <div className='glide-link-container'>
                            <div className='use-link-wraper'>
                                <Link  className='use-nav-link' to="coins">Coins</Link>
                            </div>
                            <div className='use-link-wraper'>
                                <Link  className='use-nav-link'  to="swap">Swap</Link>
                            </div>
                            <div className='use-link-wraper'>
                                <Link  className='use-nav-link' to="transactions">Transactions</Link>
                            </div>
                        </div>
                    )} 

                </div>
                </div>



            </div>

        </div>
    )
}

export default NavbarUseDefi;