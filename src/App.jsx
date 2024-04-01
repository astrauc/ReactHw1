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
          <a href="index.html"><button class="head-button">Home</button></a>
          <a href="#"><button className="head-button">About</button></a>
          <a href="https://www.apple.com/"><button class="head-button">Technical Experience</button></a>
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
      <div>
        <h2>{title}</h2>
        <p> {content}</p>
      </div>
    </>

  )
}
function App() {
  return (
    <>

      {(
        <>
          <NavBar />
          {hobbiesList.map((element) => (
            <Hobbies title={element.title} content={element.content} />

          ))}


        </>
      )}
    </>
  )
}

export default App 