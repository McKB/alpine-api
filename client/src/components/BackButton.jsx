import { Button } from 'react-bootstrap'

const BackButton = (props) => {
    const { previousLocation } = props

    return (
        <Button variant='dark' className='p-2'>
            ← Back to {previousLocation}
        </Button>
    )
}

export default BackButton