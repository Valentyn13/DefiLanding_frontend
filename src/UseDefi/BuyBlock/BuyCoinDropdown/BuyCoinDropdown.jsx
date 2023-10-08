import React from 'react'
import "./BuyCoinDropdown.css"
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCoinToBuy } from '../../../redux/reduxSlices/swapDefiSlice/swapDefiSlice'
import BuyCoinElement from '../BuyCoinelement/BuyCoinElement'
import {v4} from 'uuid'
const BuyCoinDropdown = () => {
    const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch();
  const coinToBuy = useSelector(state => state.swap.coinToBuy)
  const coinsToSwap = useSelector(state => state.swap.coinsToSwap)



  return (
    <div className='sell-dropdown'>
    <div className='sell-dropdown-btn' onClick={()=>setIsActive(!isActive)}>
        <div className='sell-token-img'>
          { coinToBuy == false ? <div>empty</div> : <img className='sell-coin' src={coinToBuy.image} alt='coin'/>}
        </div>
        <div className='sell-token-symbol'>
        { coinToBuy == false ? <div>empty</div> : <div>{coinToBuy.symbol.toUpperCase()}</div> }
          </div>
    </div>
    {
      isActive && (
        <div className='sell-dropdown-content buy-content'>
            {coinsToSwap.map((dropCoin) =>{

            const handleBuyCoinClick = () => {
              dispatch(setCoinToBuy(dropCoin))
              setIsActive(false)
            }
          return ( 
            <BuyCoinElement key={v4()} dropCoin={dropCoin} handleBuyCoinClick={handleBuyCoinClick} />
            )}
        )}
        </div>
      )
    }
</div>
  )
}

export default BuyCoinDropdown