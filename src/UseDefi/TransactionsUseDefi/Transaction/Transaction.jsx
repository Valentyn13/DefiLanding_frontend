import "./Transaction.css"

const Transaction = ({transaction}) => {


  return (
    <div className="fetch-transaction">
        <div className="trn-sale trn-elment">
            <div>Sell</div>
            <div>Name: {transaction.sellCoin.name}</div>
            <div>Amount {transaction.sellCoin.amount}</div>
            <div>Price per coin: {transaction.sellCoin.current_price}</div>
        </div>
        <div className="trn-buy trn-elment">
            <div>Buy</div>
            <div>Name: {transaction.buyCoin.name}</div>
            <div>Amount {transaction.buyCoin.amount}</div>
            <div>Price per coin: {transaction.buyCoin.current_price}</div>
        </div>
        <div className="trn-network trn-elment">
            <div>
            Network: {transaction.network}    
            </div>
        </div>
    </div>
  )
}

export default Transaction