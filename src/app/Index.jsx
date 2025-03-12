import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./pages/Home"
import About from "./pages/About"

export default function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
