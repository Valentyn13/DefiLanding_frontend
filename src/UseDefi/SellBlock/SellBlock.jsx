import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./SellBlock.css"
import SellCoinDropdown from './SellCoinDropdown/SellCoinDropdown';

function SellBlock(props) {

    const {amount,setAmount} = props;
const selectedCoinToSwap = useSelector((state) => state.swap.selectedCoinToSwap)
    useEffect(()=>setAmount(1),[selectedCoinToSwap])

  return (
    <div className='sell-block sell-block-bg'>
        <div className='sale-text-container'>
            <div className='sale-text'>You sell</div>
        </div>
        <div className='sell-content-block'> 
            <div className='selected-token'>
                <SellCoinDropdown />
            </div>
            <div className='sell-input-wrapper'>
            <input type="number" value={amount} className='amount-tokens' onChange={(e)=>{
                    setAmount(e.target.value)
                    if (e.target.value === '') {
                        e.target.placeholder = 'Type amount of tokens'
                    }
                }
            }/>
            <div className='input-line'></div>
            </div>
        </div>
        <div className='sell-aditional-info'>
            <div className='name-of-token'>{selectedCoinToSwap.name}</div>
            <div className='price-of-selling-tokens'>{(amount * selectedCoinToSwap.current_price).toFixed(4)}$</div>
        </div>
  </div>
  )
}

export default SellBlock