import React, { useState } from 'react';
import './App.css';

const App = () => {
  let time = new Date().toLocaleTimeString()
  const [ctime, setCtime] = useState(time)

  const Updatetime = () => {
    time = new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(Updatetime, 1000)
  return (
    <div className="App">
      {ctime}
    </div>
  );
}
export default App;



// const App = () => {
//   let newTime = new Date().toLocaleTimeString();
//   const [ctime, setCtime] = useState(newTime);

//   const UpdateTime = () =>{
//     newTime = new Date().toLocaleTimeString()
//     setCtime(newTime);
//   }
//   return (
//     <div >
//       <h1> {newTime} </h1>
//       <button onClick={UpdateTime}> Get Time </button>
//     </div>
//   );
// }
// export default App;