import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedNetwork } from '../../redux/reduxSlices/swapDefiSlice/swapDefiSlice';
import {v4} from 'uuid'
function DropdownNetworks() {

    const dispatch = useDispatch()
    const selectedNetwork = useSelector((state) => state.swap.selected)

    const [isActive, setIsActive] = useState(false)
    const networks = [{name:'Ethereum', net:'ethereum-ecosystem'},{name:'BNB Chain', net:'binance-smart-chain'},{name:'Polygon', net:'polygon-ecosystem'}]

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={()=>setIsActive(!isActive)}>
            {selectedNetwork}
        </div>
        {isActive && (
                    <div className='dropdown-content'>
                        {networks.map((network)=> (
                            <div key={v4()} onClick={()=> {
                                dispatch(getSelectedNetwork({network}))
                                setIsActive(false)
                            }} className='dropdown-item'>{network.name}</div>
                        ))}
                    </div>
        )}
    </div>
  )
}

export default DropdownNetworks