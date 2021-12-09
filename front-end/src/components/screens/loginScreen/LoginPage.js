import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import MainScreen from '../../core/MainScreen'
import Loading from '../../core/Loading'
import ErrorMessage from '../../core/ErrorMessage'

const LoginPage = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const { email, password } = values
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (label) => (e) => {
    setValues({ ...values, [label]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }
      setIsLoading(true)
      const { data } = await axios.post('/api/user/login', values, config)

      setValues({
        email: '',
        password: '',
      })
      localStorage.setItem('userInfo', JSON.stringify(data.data))

      setIsLoading(false)
    } catch (error) {
      setError(error.response.data.message)
      setIsLoading(false)
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
  }

  return (
    <MainScreen title="LOGIN">
      <Container>
        {isLoading && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange('email')}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange('password')}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New user? <Link to="/register">Register here</Link>
          </Col>
        </Row>
      </Container>
    </MainScreen>
  )
}

export default LoginPage
