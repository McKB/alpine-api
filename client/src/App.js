import HomePage from "./pages/HomePage/HomePage"
import SearchPage from './pages/SearchPage/SearchPage'
import ResortPage from './pages/ResortPage/ResortPage'
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/browse/:resort' element={<ResortPage />} />
          <Route path='/browse' element={<SearchPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
