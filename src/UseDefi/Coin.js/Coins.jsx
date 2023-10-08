import React from 'react'

function Coins({name,image,symbol,price,volume, priceChange, marketcap}) {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img src={image} alt="crypto coin"/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-data'>${price.toFixed(3)}</p>
                <p className='coin-volume'>${volume.toString()}</p>
                {priceChange <0 ? (
                    <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin-marketcap'>
                    Mkt Cap: {marketcap.toString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coins;
