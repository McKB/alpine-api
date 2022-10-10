import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BrowseButton from '../../components/BrowseButton'
import background from './bg.jpeg'

const HomePage = () => {
    return (
        <Container fluid className='justify-content-center text-light vh-100 d-flex align-items-center' 
            style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <div className='text-center'>
                <Row>
                    <h1 className='fw-lighter'>
                        Welcome to the Alpine Zone
                    </h1>
                </Row>
                <Row>
                    <p className='fst-italic pb-5'>Please tread lightly.</p>
                </Row>
                <Row className='justify-content-center pt-5'>
                    <Col md='auto'>
                        <Link to={'/browse'}>
                            <BrowseButton items='resorts' />
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default HomePage