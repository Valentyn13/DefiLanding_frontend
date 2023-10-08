import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Transaction from './Transaction/Transaction'
import './TransactionsUseDefi.css'
import { getTransactionData } from '../../redux/reduxSlices/getTransactionsSlice/getTransactionSlice'
import LoadPage from '../../components/Loadpage/LoadPage'
import ErrorPage from '../../components/ErrorPage/ErrorPage'

const TransactionsUseDefi = () => {
const dispatch = useDispatch()
const getTransactions = useSelector((state) => state.getTransactions.data)
const getTransactionsStatus = useSelector((state) => state.getTransactions.status)
  useEffect(() => {
    dispatch(getTransactionData())
  },[dispatch])

  return (
    <div className='transactions-use-defi'>
      <div className='container'>
          <div className='transactions-container'>
            {getTransactionsStatus === 'pending' && <LoadPage/>}
            {getTransactionsStatus === 'rejected' && 
            <ErrorPage>
                <h1>
                    404 error
                </h1>
                <h2>This page doesn't exist</h2>
                <div>It's a problem with our server, we solve this problem as soon as possible</div>
            </ErrorPage>
            }
            <div className='trn-header-text'>Your Transactions</div>
            {
             getTransactions.map((data) => {

              return (
                <Transaction key={data._id} transaction={data}/>
              )
            })}
          </div>
      </div>
    </div>

  )
}

export default TransactionsUseDefi