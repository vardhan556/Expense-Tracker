    import React, { useState } from 'react'

    const Balance = ({balance,setBalance}) => {
        const [inputValue, setInputValue] = useState(0)

        const handleAddBalance=()=>{
            setBalance(prevBalance => prevBalance + Number(inputValue))
            setInputValue(0)
        }

    return (
        <div className='bal-div'>
            <div className="balance">
                <h2>Your bank Balance</h2>
                <h2>{balance}/-</h2>
            </div>
            <div className="balance">
                <h2 className='bal-butt'>Add balance <button type="submit" onClick={handleAddBalance}>Add</button></h2>
                <h2><input type="number" name="" id="" onChange={(e) => setInputValue(Number(e.target.value))}  /></h2>
            </div>
        </div>
    )
    }

    export default Balance
