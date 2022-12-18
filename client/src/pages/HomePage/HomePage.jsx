import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BrowseButton from '../../components/BrowseButton'
import Footer from '../../components/Footer'
import background from './bg.jpeg'

const HomePage = () => {
    return (
        <Container fluid className='bg-image p-0 vh-100' 
            style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
            <div className='text-center vh-100 overflow-auto'>
                <Row>
                    <h1 className='mt-5 pt-5 fw-lighter text-light'>
                        Welcome to the Alpine Zone
                    </h1>
                </Row>
                <Row>
                    <p className='fst-italic pb-5 text-light'>Please tread lightly.</p>
                </Row>
                <Row className='justify-content-center pt-5 pb-5'>
                    <Col md='auto'>
                        <Link to={'/browse'}>
                            <BrowseButton items='resorts' />
                        </Link>
                    </Col>
                </Row>
                <Container className='w-50 text-light fw-lighter pt-5 pb-5'>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card border="light" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', height: '100%'}}>
                                <Card.Body>
                                    <Card.Title>About</Card.Title>
                                    <Card.Text>
                                        Check out the project origins, data sources, and meet the designer.
                                    </Card.Text>
                                    <Card.Link className='text-light fw-light' href={'/about'}>About this project</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="light" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', height: '100%' }}>
                                <Card.Body>
                                    <Card.Title>API</Card.Title>
                                    <Card.Text>
                                        Explore the API directly. Check out the documentation
                                        for more information.
                                    </Card.Text>
                                    <Card.Link className='text-light fw-light' href={'/api'}>API Docs</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={1} md={2} className="g-4 mt-1 mb-5">
                        <Col>
                            <Card border="light" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', height: '100%' }}>
                                <Card.Body>
                                    <Card.Title>Search</Card.Title>
                                    <Card.Text>
                                        Browse Vermont's ski resorts and learn about their highlights. 
                                    </Card.Text>
                                    <Card.Link className='text-light fw-light' href={'/browse'}>Browse resorts</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card border="light" style={{ backgroundColor: 'rgba(50, 50, 50, 0.5)', height: '100%' }}>
                                <Card.Body>
                                    <Card.Title>More</Card.Title>
                                    <Card.Text>
                                        See what's on the docket for this site.
                                    </Card.Text>
                                    <Card.Link className='text-light fw-light' href="#">Coming soon</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Row className='pt-5'>
                   <Footer/>
                </Row>
            </div>
        </Container>
    )
}

export default HomePage