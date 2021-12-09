import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Footer from './components/core/Footer'
import Header from './components/core/Header'
import HomePage from './components/screens/homepage/HomePage'
import MyNotes from './components/screens/notes/MyNotes'
import RegisterPage from './components/screens/registerScreen/RegisterPage'
import LoginPage from './components/screens/loginScreen/LoginPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/my-notes" exact element={<MyNotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
