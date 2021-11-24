import Footer from './components/core/Footer'
import Header from './components/core/Header'
import HomePage from './components/screens/homepage/HomePage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}

export default App
