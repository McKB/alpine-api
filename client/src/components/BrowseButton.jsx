import { Button } from 'react-bootstrap'

const BrowseButton = (props) => {
    const { items } = props

    return (
        <Button variant='light' className='p-4'>
            Browse {items} →
        </Button>
    )
}

export default BrowseButton