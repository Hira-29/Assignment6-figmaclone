import { useState} from "react";
import { FaStar } from 'react-icons/fa';

const StarRating=({maxStars = 5}) => 
{
    const [rating, setRating] = useState(0);

    const handleClick =(value : any)=> {
        setRating(value);
    };


return (
    <div className="flex space-x-1">
        {[...Array(maxStars)].map((_, index) => (
            <FaStar
            key={index}
            className="cursor-pointer ${index < rating ? ' text-black onClick={() => handleClick(index + 1)}"
            />
        ))
        
        
        }
    </div>
);
};
export default StarRating