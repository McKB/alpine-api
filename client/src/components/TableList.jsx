import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom"
//import { Link } from 'react-router-dom'

const TableList = (props) => {
    const { arr } = props

    return (
        <Table hover className='mt-4 table-borderless'>
            <thead className='table-dark'>
                <tr>
                    <th className='rounded-start'>Resort Name</th>
                    <th>Town</th>
                    <th className='rounded-end'>Website</th>
                </tr>
            </thead>
            <tbody className="w-100">
                {arr.map((item) => {
                    return (
                        <tr key={item.id} className="w-100 border-bottom">
                            <td>
                                <Link 
                                to={`/browse/${item.resortName}`} 
                                className='text-reset text-decoration-none w-100'>
                                {item.resortName}</Link>
                            </td>
                            <td>
                                <Link
                                to={`/browse/${item.resortName}`}
                                className='text-reset text-decoration-none w-100'>
                                {item.town}</Link>
                            </td>
                            <td>
                                <a
                                href={`https://${item.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-reset text-decoration-none w-100'>
                                {item.website}</a>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableList