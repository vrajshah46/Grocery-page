import React,{useState} from 'react'
import './index.css'

const Content = () => {

        const [name,setName] = useState('vraj')
        const [count,setCount] = useState(0)
 
        const handelclick = () => {
            const names = ['vraj','rohan','rahul']
            const int = Math.floor(Math.random()*3)
            setName(names[int])
        }

        const handleclick2 = (name) => {
            console.log(`${name} was click this button`)
        }

        const handleclick3 = (e) => {
            console.log(e.target.innerText)
        }
        const handleclick4 = () => {
            setCount(count + 1)
            setCount(count + 1)
            console.log(count)
        }

  return (
    <div>
        <p className='paragraph'> 
            <h3>hello {name} </h3>
            <button onClick={handelclick}>clicked it</button>
             <br />
            <button onClick={() => handleclick2('rohan')}>clicked it</button>
            <br />
            <button onClick={(e) => handleclick3(e)}>click me</button>
            <br />
            <button onClick={handleclick4}>change number</button>
        </p>
    </div>
  )
}

export default Content;
