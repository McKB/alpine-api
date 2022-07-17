import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import StatsCard from '../../components/StatsCard'
import ChairliftsCard from '../../components/ChairliftsCard'
import BackButton from '../../components/BackButton'
import background from './bg3.jpeg'

const ResortPage = () => {
  const { resort } = useParams()
  const [resortData, setResortData] = useState({})
  const [stats, setStats] = useState({})
  const [chairlifts, setChairlifts] = useState([])

  useEffect(() => {
    const fetchResort = async () => {
      let { data } = await axios.get(`http://localhost:1337/api/resorts/${resort}`)
      setResortData(data[0])
      setStats(data[0].stat)
    }
    fetchResort().catch(console.error)
  }, [resort])

  useEffect(() => {
    if (resortData.id) {
    const fetchChairlifts = async () => {
      let { data } = await axios.get(`http://localhost:1337/api/chairlifts/${resortData.id}`)
      setChairlifts(data)
    }
    fetchChairlifts().catch(console.error)
    } else {
        setChairlifts(['...fetching'])
    }
  }, [resortData])

  return (
  <Container fluid className='min-vh-100 px-0 pb-5'>
    <Container className="py-5 mx-0 mb-5 min-vw-100" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <Row className='p-5'>
        <h1 className="text-center fw-lighter text-light" style={{fontSize: '4rem'}}>{resortData.resortName}</h1>
      </Row>
    </Container>
    <Container>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <StatsCard stats={stats}/>
          <Row className='pt-5'>
            <Col className='d-flex justify-content-center'>
              <Link to={'/browse'} className='w-100'>
                <BackButton className='w-100' previousLocation='browse' color='primary'/>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col>
          <ChairliftsCard chairlifts={chairlifts}/>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default ResortPage