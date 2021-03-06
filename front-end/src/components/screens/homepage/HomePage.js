import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
  //FIXME: error in navigate and useEffect
  // const navigate = useNavigate()
  // useEffect(() => {
  //   const userInfo = localStorage.getItem('userInfo')
  //   if (userInfo) {
  //     navigate('/my-notes')
  //   }
  // }, [])

  return (
    <div className="home-page">
      <Container>
        <Row>
          <div className="welcome-text">
            <div>
              <h1 className="title">Welcome to Notes</h1>
              <p className="subtitle">A safe place for all your thoughts.</p>
            </div>
            <div className="button-container">
              <a href="/login">
                <Button size="lg" variant="secondary" className="home-button">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" variant="secondary" className="home-button">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
