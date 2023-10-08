

const SellCoinElement = ({dropCoin, handleSellCoinClick}) => {
  return (
    <div className='token' onClick={handleSellCoinClick}>
        <div className='sell-token-img'>
           <img className='sell-coin' src={dropCoin.image} alt='coin'/>
        </div>
        <div className='dropdown-token-symbol'>
          <div>
            {dropCoin.symbol.toUpperCase()}
          </div>
        </div>
      </div>
  )
}

export default SellCoinElement