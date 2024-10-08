import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout' 
import HomePage from './pages/HomePage'
import TaskPage from './pages/TaskPage'
import WeatherPage from './pages/WeatherPage'




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<MainLayout />} >
          <Route index element = {<HomePage />} />
          <Route path='/tasks' element = {<TaskPage />} />
          <Route path='/weather' element = {<WeatherPage />} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
