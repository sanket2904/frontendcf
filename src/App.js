import { useEffect, useState } from 'react';
import './App.css';
import style from './app.module.css'
import axios from "axios"
import Card from "./component/Card"
// import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import Form from "./component/Form"
function App() {
  
  let [data,setData] = useState([]);
  let [form,setForm] = useState(false)
  useEffect(() => {
    axios.get("https://backend.unihelp.workers.dev/posts",).then( (res) => setData(JSON.parse(`[${res.data}]`)))
  },[])
  console.log(data.length)
  return (
    <div className="App">
      <h1>Socialiser</h1>
      <div className={style.cardHandler}>
        {
          data.map(element => <Card data={element} />)
        }
      </div>
     
      <div className={style.setup}>
        <Button variant="outlined" onClick={() => setForm(true)} >
          Add
        </Button>
      </div>
      {
          form && <div className={style.form}>
              <Form form={setForm} num={data.length + 1 } />
          </div>
      }
    </div>
  );
}

// function Card({data}) {
//   return(
//     <div className={style.cardHandler} key={Math.floor(Math.random() * 100)}>
//       {

//         data.map((element) => {
//           console.log(element)
//           return (
//             <div className={style.card}>
//               <p className={style.userName}>
//                 {element.username}
//               </p>
//               <p className={style.title}>
//                 {element.title}
//               </p>
//               <p className={style.content}>
//                 {element.content}
//               </p>
//             </div>
//           )
//         }

//         )
//       }
//     </div>
//   )
// }

export default App;
