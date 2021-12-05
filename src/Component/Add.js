import{Button,Modal} from 'react-bootstrap';
import{useState}from 'react';
import{useDispatch} from 'react-redux';
import{add} from '../redux/action'


function Mod() {
    
    
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [innertask,setinnertask]=useState('');
   
  
    return (
      <>
        <Button variant="warning" style={{marginLeft:'100px',width:'100px',marginTop:'10px',backgroundColor:'black',color:'white'}} onClick={handleShow}>Add</Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type='text' value={innertask}  onChange={(e)=>setinnertask(e.target.value)} ></input>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(add({id:Math.random(),task:innertask,done:false}));setinnertask('')}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Mod;