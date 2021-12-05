import{Button,Modal} from 'react-bootstrap';
import{useState}from 'react';
import{useDispatch} from 'react-redux';
import{edit}from'../redux/action';


function ModE({el}) {
    
    
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newtask,setnewtask]=useState(el.task);
   
  
    return (
      <>
        <Button variant="warning" style={{marginLeft:'100px',width:'100px',marginTop:'10px'}} onClick={handleShow}>Edit</Button>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type='text' value={newtask}  onChange={(e)=>setnewtask(e.target.value)} ></input>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(edit(el.id,newtask));handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModE;