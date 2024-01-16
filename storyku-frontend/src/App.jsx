import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Manage from "./Pages/Manage.jsx"
import ManageStory from "./Pages/ManageStory.jsx"
import Header from "./Components/Header.jsx"
import Navbar from './Components/Navbar.jsx'
import ManageChapter from './Pages/ManageChapter.jsx'
import AddStory from './Pages/AddStory.jsx'
import Story from './Pages/Story.jsx'
import AddChapter from './Pages/AddChapter.jsx'

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="main">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/story/:storyId' element={<Story/>}></Route>
            <Route path="/add-story" element={<AddStory />}></Route>
            <Route path="/add-chapter/:storyId" element={<AddChapter />}></Route>
            <Route path='/manage' element={<Manage/>}></Route>
            <Route path='/manage-story/:idStory' element={<ManageStory/>}></Route>
            <Route path='/manage-chapter' element={<ManageChapter/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
