import React from 'react'

const TransactionList = ({list, removeFromList}) => {
  return (
    <div>
      <div className='t-list'>
        <h3>History</h3>
        <div className=''>
            <ul className='list'>
                <li>Ice cream <span>200/-</span> <button className='x' >X</button></li>
                {list.map((item,index)=>( <li key={index}>{item.text} <span>{item.number}/-</span> <button className='x' onClick={()=>removeFromList(index)}>X</button></li> ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default TransactionList
