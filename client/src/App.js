import HomePage from "./pages/HomePage/HomePage"
import SearchPage from './pages/SearchPage/SearchPage'
import ResortPage from './pages/ResortPage/ResortPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/browse/:resort' element={<ResortPage />} />
          <Route path='/browse' element={<SearchPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
