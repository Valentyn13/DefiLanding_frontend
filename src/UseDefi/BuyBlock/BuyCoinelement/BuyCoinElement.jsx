

const BuyCoinElement = ({handleBuyCoinClick, dropCoin}) => {
  return (
    <div className='token' onClick={handleBuyCoinClick}>
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

export default BuyCoinElement