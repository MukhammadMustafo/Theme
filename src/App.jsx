import { useState } from 'react';
import './App.css';


function App() { 
  // const App = document.querySelector('body');
  // const themeMode = () => {
  //   App.classList.toggle('dark');
  // }
  const [ord, setOrd] = useState(false)
    console.log('Nma gap😂👍');   
  return (
    <div className={ord === true ? 'dark' : "App"}>
      <label className='switch'>
        <input onChange={()=>setOrd(!ord)} className='input' type="checkbox" />
        <span className='slider'></span>
      </label>
    </div>
  );
}

export default App;
