import React from 'react';

const {useState} = React;

function App() {
  const[count,setCount] = useState(0);
  const classes = [];

  if (count%2 === 0) {  
    document.body.classList.add('even');
    classes.push('even-h2');
  } else {
    document.body.classList.remove('even');
  }
  
  if (count < 0) setCount(count*0);
  
  return (
    <div className="counter">
      <h1>{count}</h1>
      <h2 className={classes}>{(count%2 === 0) ? 'Введено чётное число' : 'Введено нечётное число'}</h2>
      <div className="button-wrapper">
        <button onClick={() => setCount(count-1)}>-</button>
        <button onClick={() => setCount(count*0)}>Reset</button>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  )
}

export default App
