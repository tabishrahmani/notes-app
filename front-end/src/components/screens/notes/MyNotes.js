import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from 'react-bootstrap'
import MainScreen from '../../core/MainScreen'

const MyNotes = () => {
  const fetchNotes = async () => {
    const notesAPI = await axios.get('/notes')
    // console.log(notesAPI)
    setNotes(notesAPI.data)
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const [notes, setNotes] = useState([])
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      //
    }
  }

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey)

    return (
      <div
        style={{ display: 'flex' }}
        // style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    )
  }

  return (
    <MainScreen title="Welcome back admin.">
      <Link to="create-note">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          New Note
        </Button>
      </Link>
      <Accordion defaultActiveKey="0">
        {notes.map((note) => (
          <Card style={{ margin: 10 }} key={note._id}>
            <Card.Header style={{ display: 'flex' }} className="d-grid">
              <CustomToggle eventKey={note._id}>
                <span
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    fontSize: 18,
                  }}
                >
                  {note.title}
                </span>
                <div>
                  <Button href={`my-notes/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={note._id}>
              <Card.Body>
                <h5>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h5>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    created on - dd/mm/yyyy
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </MainScreen>
  )

  // return (
  //   <Accordion defaultActiveKey="0">
  //     <Card>
  //       <Card.Header>
  //         <CustomToggle eventKey="0">Click me!</CustomToggle>
  //       </Card.Header>
  //       <Accordion.Collapse eventKey="0">
  //         <Card.Body>Hello! I'm the body</Card.Body>
  //       </Accordion.Collapse>
  //     </Card>
  //     <Card>
  //       <Card.Header>
  //         <CustomToggle eventKey="1">Click me!</CustomToggle>
  //       </Card.Header>
  //       <Accordion.Collapse eventKey="1">
  //         <Card.Body>Hello! I'm another body</Card.Body>
  //       </Accordion.Collapse>
  //     </Card>
  //   </Accordion>
  // )
}

export default MyNotes
