import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../core/Loading'
import ErrorMessage from '../../core/ErrorMessage'
import MainScreen from '../../core/MainScreen'

const RegisterPage = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    // profile_photo:     //FIXME: can only have empty string here.
    //   'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
  })

  const { name, email, password, confirm_password, profile_photo } = values
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (label) => (e) => {
    setValues({ ...values, [label]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== confirm_password) {
      setError('Passwords do not match')
    } else {
      setError('')
      try {
        const config = { headers: { 'Content-type': 'application/json' } }
        setIsLoading(true)
        await axios.post(
          '/api/user/register',
          { name, email, password, profile_photo },
          config
        )
        // console.log(data)
        setValues({
          name: '',
          email: '',
          password: '',
          confirm_password: '',
        })
        setIsLoading(false)
        setMessage('User created successfully')
        // localStorage.setItem('userinfo', JSON.stringify(data.data))
        setTimeout(() => {
          setMessage(false)
        }, 2000)
      } catch (error) {
        setError(error.response.data.message)
        setIsLoading(false)
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
    }
  }

  return (
    <MainScreen title="Register">
      <Container>
        {isLoading && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="info">{message}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange('name')}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange('email')}
            />
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

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirm_password}
              onChange={handleChange('confirm_password')}
            />
          </Form.Group>

          <Form.Group controlId="file" className="mb-3">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control
              type="file"
              value={profile_photo}
              // onChange={handleChange('profile_photo')} //FIXME: this element accepts filename.
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Already a user? <Link to="/login">Login here</Link>
          </Col>
        </Row>
      </Container>
    </MainScreen>
  )
}

export default RegisterPage
