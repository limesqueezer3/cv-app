import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Card} from './components/Card'
import {Input} from './components/Input'

const initGeneralInputList = [
  {id: 1, label:"Name", type:"text", value:""},
  {id: 2, label: "E-mail", type:"email", value:""},
  {id: 3, label:"Birthdate", type:"date", value:new Date().toISOString().split("T")[0]},
]   

const initEducationInputList = [
  {id:4, label:"School Name", type:"text", value:""},
]

function App() {
  // const [count, setCount] = useState(0)
  const [generalDone, setGeneralDone] = useState(false)
  const [educationDone, setEducationDone] = useState(false)
  const [practicalDone, setPracticalDone] = useState(false)
  const [generalInputList, setGeneralInputList] = useState(initGeneralInputList)
  const [educationInputList, setEducationInputList] = useState(initEducationInputList)
  return (
    <>
      <Card name="General Information">
          <Input 
          inputList = {generalInputList}
          setInputList={setGeneralInputList}
          done = {generalDone}
          setDone = {setGeneralDone}/>
      </Card>
      <Card name="Education">
          <Input 
          inputList= {educationInputList}
          setInputList={setEducationInputList}
          done = {educationDone}
          setDone= {setEducationDone}
          />
      </Card>
    </>
  )
}

export default App
