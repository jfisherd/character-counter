import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { TextInput } from './components/TextInput/TextInput'
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay'
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'

function App() {
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [readingTime, setReadingTime] = useState(0)

  const handleTextChange = (text: string) => {
    setCharacterCount(text.length) // CONSIDER WHETHER OR NOT TO COUNT SPACES
    setWordCount(text.match(' '))
    setReadingTime(wordCount * 5) // Assume 5 words per second
  }


  return (
    <>
      {/* <input placeholder='TEST INPUT'></input> TESTING INPUT */}
      <TextInput onTextChange={handleTextChange}></TextInput>
      <StatsDisplay stats={characterCount, wordCount, readingTime}></StatsDisplay>
      <CharacterCounter></CharacterCounter>


      {/* <div> INITIAL VITE CODE
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
