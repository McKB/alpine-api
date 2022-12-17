import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from '../../components/Search'
import TableList from '../../components/TableList'
import BackButton from '../../components/BackButton'
import axios from 'axios'

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [resortsArray, setResortsArray] = useState([])
    const [filteredResortsArray, setFilteredResortsArray] = useState([])

    useEffect(() => {
        fetchResorts()
    }, [])

    useEffect(() => {
        setFilteredResortsArray(resortsArray.filter(
            (resort) => { return resort.resortName.toLowerCase().includes(searchTerm.toLowerCase()) }
        ))
    }, [searchTerm, resortsArray])

    const fetchResorts = async () => {
        let fetchedData = await axios.get('/api/resorts')
        setResortsArray(fetchedData.data)
        setFilteredResortsArray(fetchedData.data)
    }

    const handleSearchTermInput = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className='m-5 fw-lighter'>
            <Row className='my-5'>
              <div>
                <Link to={'/'}>
                    <BackButton previousLocation='home' color='dark'/>
                </Link>
              </div>
            </Row>
            <Row>
                <Col md='auto'>
                    <p>Search a resort name: </p>
                </Col>
                <Col>
                    <Search searchTerm={searchTerm} handleSearchTermInput={handleSearchTermInput} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TableList arr={filteredResortsArray} />
                </Col>
            </Row>
        </div>
    )
}

export default SearchPage