import { Button } from 'react-bootstrap'

const BackButton = (props) => {
    const { previousLocation, color } = props

    return (
        <Button variant={color} className='p-4 w-100'>
            ← Back to {previousLocation}
        </Button>
    )
}

export default BackButton