import { Button } from 'react-bootstrap'

const BrowseButton = (props) => {
    const { items } = props

    return (
        <Button variant='light' style={{ padding: 20 }}>
            Browse {items} →
        </Button>
    )
}

export default BrowseButton