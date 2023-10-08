import "./CoreUseDefi.css";
import { useState, useEffect } from "react";
import Coins from "../Coin.js/Coins";
import { getCoins } from "../../redux/reduxSlices/useDefiSlice/useDefiSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadPage from "../../components/Loadpage/LoadPage";

const CoreUseDefi = () => {

    const [search, setSearch] = useState('');
    // states for price change
    const [change_1h, setChange_1h] = useState(false)
    const [change_24h, setChange_24h] = useState(true)
    const [change_7d, setChange_7d] = useState(false)
    // states for amount coins
    const [renderCoins,setRenderCoins] = useState(10);

    const dispatch = useDispatch()
    const coins = useSelector(state => state.defi.coins)
    const status = useSelector((state) => state.defi.status)
    
    useEffect(()=>{
        dispatch(getCoins(renderCoins))
    }, [renderCoins])

    const priceChange_1h = () => {
        setChange_1h(!change_1h)
        setChange_24h(false)
        setChange_7d(false)
        
    }
    const priceChange_24h = () => {
        setChange_24h(!change_24h)
        setChange_1h(false)
        setChange_7d(false)
    }
    const priceChange_7d = () => {
        setChange_7d(!change_7d)
        setChange_24h(false)
        setChange_1h(false)
    }
    
    const handleChange = (e) => {
        const {value} = e.target
        setSearch(value)
    }
    const filteredCoins = coins.filter((coin)=> 
        coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
    )

    
    return (

        <div className="coin-app">
            {status === 'loading' && <LoadPage/> }
            {status === 'resolve' && (
            <div className="use-defi-container">
            <div className="coin-search">
                <h1 className="coin-text">Search a currency</h1>
                <div className="form-controll">
                    <form>
                        <input type="text" placeholder="Search a coin" 
                        className="coin-input"
                        onChange={handleChange}/>
                    </form>
                </div>
            </div>
                <div className="price-change-container">

                    <div className="price-container">
                        <div className="price-change-text">Price change: </div>
                        <div onClick={priceChange_1h} className={change_1h ? 'price-change-active': 'price-change'}>1h</div>
                        <div onClick={priceChange_24h} className={change_24h ? 'price-change-active': 'price-change'}>24h</div>
                        <div onClick={priceChange_7d} className={change_7d ? 'price-change-active': 'price-change'}>7d</div>
                    </div>
                    <div className="amoun-coins">
                        <div className="price-change-text">Watch coins:</div>
                        <div id="10" onClick={() => setRenderCoins(10)} className={renderCoins === 10 ? 'price-change-active' : "price-change"}>10</div>
                        <div id="50" onClick={() => setRenderCoins(50)} className={renderCoins === 50 ? 'price-change-active' : "price-change"}>50</div>
                        <div id="100" onClick={() => setRenderCoins(100)} className={renderCoins === 100 ? 'price-change-active' : "price-change"}>100</div>
                    </div>
                </div>
            
                {filteredCoins.map((coin=>{
                        let showPercentage = coin.price_change_percentage_24h;
                        if (change_1h === true){
                            showPercentage = coin.price_change_percentage_1h_in_currency
                        }
                        if(change_24h === true){
                            showPercentage = coin.price_change_percentage_24h_in_currency
                            
                        }
                        if (change_7d === true){
                            showPercentage = coin.price_change_percentage_7d_in_currency
                        }
                    return(
                        <Coins
                         key={coin.id} 
                         name={coin.name}
                         price={coin.current_price} 
                         image ={coin.image}
                         symbol={coin.symbol}
                         volume={coin.market_cap}
                         priceChange={showPercentage}
                         marketcap={coin.total_volume}
                         />
                    )
                }))}

            </div>
            )}


        </div>
    )
}

export default CoreUseDefi;
