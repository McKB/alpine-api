import { Button } from 'react-bootstrap'

const GoToButton = (props) => {
    const { nextLocation, color } = props

    return (
        <Button variant={color} className='p-4 w-100'>
            Go to {nextLocation} →
        </Button>
    )
}

export default GoToButton