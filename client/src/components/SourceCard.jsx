import {Card, Col} from 'react-bootstrap'

const SourceCard = (props) => {

    const { link, text, image } = props

    return (
        <Col md={4} className='mb-5'>
            <Card className='w-100'>
                <Card.Img variant="top" src={image} style={{ width: '100%', overflow: 'hidden'}}/>
                <Card.Body>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Link 
                        className='fw-light' 
                        href={link} 
                        target="_blank"
                        rel="noopener noreferrer">Visit site</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SourceCard