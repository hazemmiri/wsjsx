import './App.css';
import Name from './component/Name';
import Description from './component/Description';
import Image from './component/Image';
import Card from 'react-bootstrap/Card';

import prodeuctjs from './Product';
import { Button  , ListGroup} from 'react-bootstrap';

function App() {
let name = ""
let handleName = ()=>{
  if(name){
    alert(`Hello ${name}`)
  }else{
    alert("hello there")
  }
}
  return (
    <div>
          {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card> */}
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prodeuctjs.image}/>
      <Card.Body>
        <Card.Title> <Name /> </Card.Title>
        <Card.Text> 
          <Description />
              </Card.Text>
        </Card.Body>
      <Button onClick={handleName}  >click me</Button>
    </Card>
       
      
    </div>
   
  );
}

export default App;
