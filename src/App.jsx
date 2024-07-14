import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const meses=[
    {
      id:1,
      mes:"Enero",
      dias:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                                   11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
                                   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    }
   
                                ]
  
  return (
    <main>
        <ul className='Fecha'>
            <li>Domingo</li>
            <li>19:58</li>
            <li>Pm</li>
        </ul>
    
        {meses.map((mes)=>{

              return(
                <div className='contenedor-calendario' key={mes.id}>
                  <h2 className='title-mes'>{mes.mes}</h2>
                  <ul className='mes' >{mes.dias.map((num)=>{
                     return <li className="dia" key={num}>{num}</li>
                  })}</ul>
                </div>
              )  

            })
        }
    </main>
  )
}

export default App;