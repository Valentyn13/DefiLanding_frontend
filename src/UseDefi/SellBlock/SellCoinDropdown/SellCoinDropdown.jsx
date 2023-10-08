import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SellCoinDropdown.css"
import { setSelectedCoinToSwap } from '../../../redux/reduxSlices/swapDefiSlice/swapDefiSlice'
import SellCoinElement from './SellCoinElement/SellCoinElement'
import {v4} from "uuid"

const SellCoinDropdown = () => {
  const dispatch = useDispatch()
    const [isActive, setIsActive] = useState(false)
    const coinsToSwap = useSelector(state => state.swap.coinsToSwap)
    const selectedCoinToSwap = useSelector(state => state.swap.selectedCoinToSwap)
  return (
<div className='sell-dropdown'>
    <div className='sell-dropdown-btn' onClick={()=>setIsActive(!isActive)}>
        <div className='sell-token-img'>
          { selectedCoinToSwap == false ? <div>empty</div> : <img className='sell-coin' src={selectedCoinToSwap.image} alt='coin'/>}
        </div>
        <div className='sell-token-symbol'>
        { selectedCoinToSwap == false ? <div>empty</div> : <div>{selectedCoinToSwap.symbol.toUpperCase()}</div> }
          </div>
    </div>
    {
      isActive && (
        <div className='sell-dropdown-content'>
            {coinsToSwap.map((dropCoin) => {
              const handleSellCoinClick = () => {
                dispatch(setSelectedCoinToSwap(dropCoin))
                setIsActive(false)
              }
              return (
                <SellCoinElement key={v4()} dropCoin={dropCoin} handleSellCoinClick={handleSellCoinClick}/>
              )
            }
            )}
        </div>
      )
    }
</div>
  )
}

export default SellCoinDropdown;