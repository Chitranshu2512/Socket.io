import React, { useEffect } from 'react'
import {io} from "socket.io-client"

function App() {

  const socket = io('http://localhost:8000');

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id)
    })
    socket.on("welcome", (s) => {
      console.log(s)
    })

    return () => {
      socket.disconnect("disconnect", (msg) => {
        console.log(msg)
      })
    }
  }, [])




  return (
    <div>App</div>
  )
}

export default App