import Search from '../../components/Search'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import TableList from '../../components/TableList'
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
        let fetchedData = await axios.get('http://localhost:1337/api/resorts')
        setResortsArray(fetchedData.data)
        setFilteredResortsArray(fetchedData.data)
    }

    const handleSearchTermInput = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <Row className='p-5'>
                <Col md='auto'>
                    <p>Search a resort name: </p>
                </Col>
                <Col>
                    <Search searchTerm={searchTerm} handleSearchTermInput={handleSearchTermInput} />
                </Col>
            </Row>
            <Row className='px-5'>
                <TableList arr={filteredResortsArray} />
            </Row>
        </div>
    )
}

export default SearchPage