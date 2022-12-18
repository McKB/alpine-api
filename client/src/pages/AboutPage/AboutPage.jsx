import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../components/Footer'
import SourceCard from '../../components/SourceCard'


const AboutPage = () => {
    return (
        <Container fluid className='mt-5 pt-5 text-center fw-lighter'>
            <Row className='mt-5 pt-5'>
                <h1 className='fw-lighter'>About</h1>
            </Row>
            <Row className='m-5 p-5'>
                <Col>
                    <p>
                        This project was developed for free by a student who also happens to be
                        an avid skier in the Green Mountains. The data sources are credible but 
                        this site may not be maintained at all times. Please visit the sources 
                        directly below for the most up-to-date information pertaining to ski 
                        resorts in Vermont. This site is not affiliated in any way with the 
                        resorts mentioned nor with the state of Vermont. 

                        Thanks for visiting ~ don't let this lack of credibility stop you from 
                        exploring all that the Green Mountains have to offer. Check out the 
                        resort websites and the following links for more reading material.
                    </p>
                </Col>
            </Row>
            <Row className='m-4'>
                <SourceCard link='https://geodata.vermont.gov/datasets/VCGI::vt-data-e911-alpine-ski-lifts-1/explore?location=44.463069%2C-72.766080%2C11.00' text='VT Open GeoData Portal'/>
                <SourceCard link='https://www.arcgis.com/sharing/rest/content/items/af4c05d7941f43708f55e338330cdf0b/info/metadata/metadata.xml?format=default&output=html' text='EmergencyE911_ALPINELIFTS dataset' />
                <SourceCard link='http://www.hackvt.org/datasets' text='HackVT list of available datasets' />
            </Row>
            <Row className='m-4'>
                <SourceCard link='https://www.vermontvacation.com/' text='Vermont Tourism' />
                <SourceCard link='https://skivermont.com/' text='Vermont Ski Areas Association' />
                <SourceCard link={'/browse'} text='Links to each resort homepage' />
            </Row>
            <Row className='pt-5 bottom-0'>
                <Footer/>
            </Row>
        </Container>
    )
}

export default AboutPage