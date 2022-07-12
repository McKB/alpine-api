import React from 'react'
import { Table } from 'react-bootstrap'
//import { Link } from 'react-router-dom'

const TableList = (props) => {
    const { arr } = props

    return (
        <Table hover>
            <thead>
                <tr>
                    <th>Resort Name</th>
                    <th>Town</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td className='w-25'>{item.resortName}</td>
                            <td className='w-25'>{item.town}</td>
                            <td className='w-50'>{item.website}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableList