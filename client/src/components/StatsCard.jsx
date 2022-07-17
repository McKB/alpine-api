import { Row, Col, Card, ListGroup, Tab } from 'react-bootstrap'
import React from 'react'

const StatsCard = (props) => {
    const { stats } = props

  return (
    <>
      <Col>
        <Card>
          <Card.Header>Stats</Card.Header>
          <Card.Body>
            <Tab.Container defaultActiveKey="#trails">
              <Row>
                <Col className="md-auto">
                  <ListGroup>
                    <ListGroup.Item href="#trails">Trails</ListGroup.Item>
                    <ListGroup.Item href="#vertical">Vertical Drop (ft)</ListGroup.Item>
                    <ListGroup.Item href="#acres">Acres</ListGroup.Item>
                    <ListGroup.Item href="#elevation">Highest Elevation (ft)</ListGroup.Item>
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
      </Col>
    </>
  )
}

export default StatsCard