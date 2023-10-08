import "./SwapDefi.css";
import { useState } from "react";
import { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import DropdownNetworks from "./DropdownNetworks";
import SellBlock from "../SellBlock/SellBlock";
import BuyBlock from "../BuyBlock/BuyBlock";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Modal from "./Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getCoinsToSwap } from "../../redux/reduxSlices/swapDefiSlice/swapDefiSlice";
import LoadPage from "../../components/Loadpage/LoadPage";
import axios from "axios";
import { setSelectedCoinToSwap } from "../../redux/reduxSlices/swapDefiSlice/swapDefiSlice";
import { setCoinToBuy } from "../../redux/reduxSlices/swapDefiSlice/swapDefiSlice";
import { BASE_URL } from "../../constant";

const SwapDefi = () => {
  const dispatch = useDispatch();

  const [walletConnected, setWalletConnected] = useState(false);
  const [fromWallet, setFromWallet] = useState(null);
  const [toWallet, setToWallet] = useState("");
  const [amount, setAmount] = useState(1);
  const [confirmOperation, setConfirmOperation] = useState(false);

  const selectedCoinToSwap = useSelector(
    (state) => state.swap.selectedCoinToSwap
  );
  const coinToBuy = useSelector((state) => state.swap.coinToBuy);
  const selected = useSelector((state) => state.swap.selected);
  const status = useSelector((state) => state.swap.status);
  const network = useSelector((state) => state.swap.selected);
  useEffect(() => {
    dispatch(getCoinsToSwap());
  }, [selected, dispatch]);

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected);
  };

  // ------- Post data
  const handleCompleteBtn = async () => {
    setConfirmOperation(false);
    setToWallet("");

    const payload = {
      fromWallet,
      toWallet,
      network,
      sellCoin: {
        name: selectedCoinToSwap.name,
        symbol: selectedCoinToSwap.symbol,
        current_price: selectedCoinToSwap.current_price,
        amount,
        priceOfTransaction: amount * selectedCoinToSwap.current_price,
      },
      buyCoin: {
        name: coinToBuy.name,
        symbol: coinToBuy.symbol,
        current_price: coinToBuy.current_price,
        amount: (
          (selectedCoinToSwap.current_price / coinToBuy.current_price) *
          amount
        ).toFixed(2),
      },
    };
    console.log(payload)
    try {
      await axios
        .post(`${BASE_URL}/add`, payload)
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="swap-defi">
      <div className="container">
        {status === "loading" && <LoadPage />}
        {status === "resolve" && (
          <div className="work-zone">
            <div className="work-zone-header">
              <div className="select-network">
                <DropdownNetworks />
              </div>
              <div className="connect-wallet">
                <div
                  className={
                    walletConnected
                      ? "connected connected-styles"
                      : "unconnected"
                  }
                >
                  Wallet connected
                </div>
                <button
                  className={
                    walletConnected
                      ? "unconnected"
                      : "connected btn-outline btn"
                  }
                  onClick={handleWalletConnect}
                >
                  Connect wallet
                </button>
                <div
                  className={
                    walletConnected
                      ? "connected disconect-wallet"
                      : "unconnected disconect-wallet"
                  }
                >
                  {walletConnected ? (
                    <IoCloseCircleOutline
                      className="disable-icon"
                      onClick={handleWalletConnect}
                    />
                  ) : (
                    <IoCloseCircleOutline className="unconnected" />
                  )}
                </div>
              </div>
            </div>
            <div className="work-zone-swap">
              <SellBlock amount={amount} setAmount={setAmount} />
              <div className="reverse-tokens">
                <BsFillArrowDownCircleFill
                  onClick={() => {
                    dispatch(setSelectedCoinToSwap(coinToBuy));
                    dispatch(setCoinToBuy(selectedCoinToSwap));
                  }}
                  className="bs-icon"
                />
              </div>
              <BuyBlock amount={amount} />
              <div className="confirm-operation-btn">
                <button
                  onClick={() => {
                    walletConnected
                      ? setConfirmOperation(true)
                      : alert("Connect wallet");
                    setFromWallet("2346374658");
                  }}
                  className="btn"
                >
                  Confirm operation
                </button>
                <Modal active={confirmOperation}>
                  <div className="modal-header">Transaction detail</div>
                  <hr />
                  <div className="modal-network">Network:{selected}</div>
                  <div className="modal-sell-detail">
                    <div>Sell: {selectedCoinToSwap.name}</div>
                    <div>Amount: {amount}</div>
                    <div>
                      Price: {amount * selectedCoinToSwap.current_price}
                    </div>
                  </div>
                  <div className="modal-buy-detail">
                    <div>Buy: {coinToBuy.name}</div>
                    <div>
                      Amount:{" "}
                      {(
                        (selectedCoinToSwap.current_price /
                          coinToBuy.current_price) *
                        amount
                      ).toFixed(2)}
                    </div>
                  </div>
                  <div className="modal-bottom">
                    <input
                      className="modal-input"
                      type="number"
                      value={toWallet}
                      placeholder="Enter wallet adress"
                      onChange={(e) => setToWallet(e.target.value)}
                    />
                    <div className="modal-btn-controll">
                      <button
                        className="modal-button btn"
                        onClick={handleCompleteBtn}
                      >
                        Complete
                      </button>
                      <button
                        className="modal-cancel-btn"
                        onClick={() => setConfirmOperation(false)}
                      >
                        cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SwapDefi;
