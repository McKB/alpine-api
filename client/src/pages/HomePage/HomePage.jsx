import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrowseButton from '../../components/BrowseButton'
import background from './bg.jpeg'

const HomePage = () => {
    return (
        <Container fluid className='text-center text-light' 
            style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <Row style={{ paddingTop: '30vh' }}>
                <h1>
                    Welcome to the Alpine Zone
                </h1>
            </Row>
            <Row>
                <p className='fst-italic'>Please tread lightly.</p>
            </Row>
            <Row className='justify-content-center'>
                <Col md='auto'>
                    <BrowseButton items='resorts' />
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage