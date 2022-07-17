import React from 'react'
import { Col, Card, Accordion } from 'react-bootstrap'

const ChairliftsCard = (props) => {
  const { chairlifts } = props
  console.log(chairlifts)

  return (
    <>
      <Col>
        <Card>
          <Card.Header>Lifts</Card.Header>
          <Card.Body>
            <Accordion flush>
              {chairlifts.map((lift) => {
                return (
                  <Accordion.Item eventKey={`lift${lift.id}`}>
                    <Accordion.Header>{lift.liftName}</Accordion.Header>
                    <Accordion.Body className="text-center">
                      <span className='fw-lighter'>Type:</span>
                      <span> {lift.liftType}</span>
                      <span className='ms-5 fw-lighter'> Length: </span>
                      <span> {lift.shapeLength} m</span>
                    </Accordion.Body>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default ChairliftsCard
