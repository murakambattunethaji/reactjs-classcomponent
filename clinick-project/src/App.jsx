import { useState } from 'react'
import './App.css'
import '../public/css/style.css'
// import '../public/css/bootstrap.min.css'
import { Sample1 } from './Component/Sample1'
import { Sample2 } from './Component/Sample2'
import { Sample3 } from './Component/Sample3'
import { Sample4 } from './Component/Sample4'
import { Sample5 } from './Component/Sample5'
import { Sample6 } from './Component/Sample6'
import { Sample7 } from './Component/Sample7'
import { Sample8 } from './Component/Sample8'
import { Sample9 } from './Component/Sample9'
import { Sample11 } from './Component/Sample11'
import { Sample12 } from './Component/Sample12'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sample1/>
      <Sample2/>
      <Sample3/>
      <Sample4/>
      <Sample5/>
      <Sample6/>
      <Sample7/>
      <Sample8/>
      <Sample9/>
      <Sample11/>
      <Sample12/>
    </>
  )
}

export default App
