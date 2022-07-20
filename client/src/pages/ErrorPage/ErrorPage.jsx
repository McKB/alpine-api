import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BackButton from '../../components/BackButton'

const ErrorPage = () => {
    return (
        <Container>
            <Row className='text-center p-5 fw-lighter'>
              <div>
                Please try another page -- this one's not here.
              </div>
            </Row>
            <Row>
              <Link to={'/'}>
                <BackButton previousLocation='home' color='primary'/>
              </Link>
            </Row>
        </Container>
    )
}

export default ErrorPage