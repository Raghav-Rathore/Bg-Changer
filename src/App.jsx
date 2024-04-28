import { useState } from "react"


function App() {
  const [color, setColor] = useState("purple")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
     <u> <h1 className="text-4xl font-bold text-white text-center py-32">Vite + React</h1> </u>
      <h1 className="text-2xl font-bold text-white text-center">Background Changer</h1>
      <h2 className="text-3xl font-bold text-white text-center">Color: {color}</h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Red"}}
          >Red</button>
          <button
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button
          onClick={() => setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
                    <button
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Black"}}
          >Black</button>
                    <button
          onClick={() => setColor("Orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>
                    {/* <button
          onClick={() => setColor("voilat")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "voilat"}}
          >Voilet</button> */}
                    <button
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
                    {/* <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button> */}
        </div>
      </div>
    </div>
  )
}

export default App