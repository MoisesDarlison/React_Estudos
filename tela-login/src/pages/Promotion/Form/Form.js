import react from 'react';
import { useParams } from 'react-router-dom';

const PagesPromotionForm = () => {
    const { id } = useParams();

    return (
        <div>
            OPA FORM
            {id && <div>id:{id}</div>}
        </div>
    );
}

export default PagesPromotionForm;