import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const hobbiesList = [{ title: "guitar", content: "3 years" }, { title: "3d printing", content: "2 years" },
{ title: "read", content: "a long time" }, { title: "elden ring", content: "3 months" }];

function NavBar() {
  return (
    <>
      <header>
        <nav>
          <a href="index.html"><button className="head-button">Home</button></a>
          <a href="#"><button className="head-button">About</button></a>
          <a href="https://www.apple.com/"><button className="head-button">Technical Experience</button></a>
          <a href="#"><button className="head-button">Projects</button></a>
          <a href="#"><button className="head-button">Contact</button></a>


        </nav>
      </header>
    </>
  )
}

function Hobbies({ title, content }) {
  return (
    <>
      <div className="hobby">
        <h2 className="center">{title}</h2>
        <p className="center"> {content}</p>
      </div>
    </>

  )
}

function Heading(){
  return (
    <>
      <h1 className="heading"> Here are some hobbies of mine</h1>
    </>
  )
}
function App() {
  return (
    <>

      {(
        <>
          <NavBar />
          <Heading/>
          <div className="hobbies">
            
            {hobbiesList.map((element) => (
              <Hobbies title={element.title} content={element.content} />

            ))}
          </div>


        </>
      )}
    </>
  )
}

export default App 