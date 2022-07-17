import { Row, Col, Card, ListGroup, Tab } from 'react-bootstrap'
import React from 'react'

const StatsCard = (props) => {
    const { stats } = props

  return (
    <>
      <Card bg="light" border="primary">
        <Card.Header className="fw-lighter fs-4">Stats</Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="#trails">
            <Row>
              <Col className="md-auto">
                <ListGroup style={{cursor: 'pointer'}}>
                  <ListGroup.Item eventKey="#trails">Trails</ListGroup.Item>
                  <ListGroup.Item eventKey="#vertical">Vertical Drop (ft)</ListGroup.Item>
                  <ListGroup.Item eventKey="#acres">Acres</ListGroup.Item>
                  <ListGroup.Item eventKey="#elevation">Highest Elevation (ft)</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <Tab.Content className="fw-lighter text-center" style={{ fontSize: '8rem' }}>
                  <Tab.Pane eventKey="#trails">{stats.trails}</Tab.Pane>
                  <Tab.Pane eventKey="#vertical">{stats.verticalDrop}</Tab.Pane>
                  <Tab.Pane eventKey="#acres">{stats.acres}</Tab.Pane>
                  <Tab.Pane eventKey="#elevation">{stats.highestElevation}</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  )
}

export default StatsCard