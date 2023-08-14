import PlayerList from "./assets/components/PlayerList"
import PlayerDetails from "./assets/components/PlayerDetails"
import AddPlayer from "./assets/components/AddPlayer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./assets/components/Header"
import './App.css'

function App() {
  

  return (
    <>
      
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<PlayerList />} />
          <Route path="/pup/:id" element={<PlayerDetails/>}/>
          <Route path="/add" element={<AddPlayer/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
