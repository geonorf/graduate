import "./Encoder.css";
import Navbar from "./NavBar";
import EncoderData from "./EncoderData";

function Encoder(props){
    return(
        <div>
            { Navbar(props) }
            { EncoderData(props) }
        </div>
    );
}

export default Encoder;