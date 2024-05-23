import React , {useState} from 'react'

const AddTransaction = ({addToList}) => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text && amount){
            addToList({text : text , number : amount})
            setText('')
            setAmount(0)
        }
    }
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Text</label><br />
            <input type="text" name="" id="" value={text} onChange={(event)=>{setText(event.target.value)}} placeholder='Enter Text' />
        </div>
        <div>
            <label htmlFor="">Amount <br /></label>
            <input type="number" name="" id="" value={amount} onChange={(event)=>{setAmount(event.target.value)}} placeholder='Enter Amount' />
        </div>
        <button type='submit' className='add-t'> Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
