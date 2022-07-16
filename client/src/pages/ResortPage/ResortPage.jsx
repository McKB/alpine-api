import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ResortPage = () => {
  const { resort } = useParams()
  const [resortData, setResortData] = useState({})

  useEffect(() => {
    const fetchResort = async () => {
        let { data } = await axios.get(`http://localhost:1337/api/resorts/${resort}`)
        setResortData(data[0])
    }
    fetchResort()
  }, [resort])

  return (
    <div>
        {resortData.resortName}
    </div>
  )
}

export default ResortPage