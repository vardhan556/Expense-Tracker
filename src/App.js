import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import React , {useState, useEffect} from 'react';

function App() {
  const [list, setList] = useState([])
  const [balance, setBalance] = useState(0)
  const [expenses, setExpenses] = useState(0)

  
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('transactionList'))
    if(storedList){
      setList(storedList)
    }
    const storedBalance = JSON.parse(localStorage.getItem('balance'))
    if(storedBalance){
      setBalance(storedBalance)
    }
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'))
    if(storedExpenses){
      setExpenses(storedExpenses)
    }
  },[])

  const addToList = (item)=>{
    const updatedList = [...list,item]
    setList(updatedList)
    localStorage.setItem('transactionList',JSON.stringify(updatedList))


    const updatedExpenses = expenses + Number(item.number)
    setExpenses(updatedExpenses)
    localStorage.setItem('expenses',JSON.stringify(updatedExpenses))


    const updatedBalance = balance -Number(item.number)
    setBalance(updatedBalance)
    localStorage.setItem('balance',JSON.stringify(updatedBalance))
  }


  const removeFromList = (index) =>{
    const itemToRemove = list[index]
    const updatedList = list.filter((_,i)=>i!=index)
    setList(updatedList)
    localStorage.setItem('transactionList',JSON.stringify(updatedList))


    const updatedExpenses = expenses - Number(itemToRemove.number)
    setExpenses(updatedExpenses)
    localStorage.setItem('expenses',JSON.stringify(updatedExpenses))

    const updatedBalance = balance + Number(itemToRemove.number)
    setBalance(updatedBalance)
    localStorage.setItem('balance',JSON.stringify(updatedBalance))
  }

  return (
    <div className="App">
      <div>
      <Header></Header>
      <Balance balance={balance} setBalance={setBalance}></Balance>
      <IncomeExpenses balance={balance} expenses={expenses}></IncomeExpenses>
      <AddTransaction addToList={addToList}/>
      </div>
      <div>
      <TransactionList list={list} removeFromList={removeFromList} ></TransactionList>
      </div>
    </div>
  );
}

export default App;
