import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import SearchResult from "./pages/SearchResult"
import Content from "./pages/Content"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<SearchResult />} />
          <Route path="contact" element={<Content />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App