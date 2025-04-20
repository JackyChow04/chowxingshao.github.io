import { useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";


const BackButton = ({ className }) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="back">
            {<IoClose />}
        </button>
    );
};

export default BackButton;
