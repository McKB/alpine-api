import {Card, Col} from 'react-bootstrap'

const SourceCard = (props) => {

    const { link, text } = props

    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>
                        {text}
                    </Card.Text>
                    <Card.Link className='fw-light' href={link}>Visit site</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SourceCard