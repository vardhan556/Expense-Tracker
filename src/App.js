import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import React , {useState} from 'react';

function App() {
  const [list, setList] = useState([])
  const [balance, setBalance] = useState(0)
  const [expenses, setExpenses] = useState(0)


  const addToList = (item)=>{
    setList([...list,item])
    const updatedExpenses = expenses + Number(item.number)
    setExpenses(updatedExpenses)
  }


  const removeFromList = (index) =>{
    const itemToRemove = list[index]
    const updatedList = list.filter((_,i)=>i!=index)
    setList(updatedList)
    const updatedExpenses = expenses - Number(itemToRemove.number)
    setExpenses(updatedExpenses)
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
