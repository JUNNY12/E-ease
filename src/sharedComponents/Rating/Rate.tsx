import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

type rating = {
    rating: number;
}

export const Rating = ({ rating }:rating) => {
    return (
        <div>
            {[...Array(5)].map((_, index) => {
                return (
                    <span key={index}>
                        {rating > index ? (
                            <span className='ratings'>
                                <AiFillStar />
                            </span>
                        ) : (
                            <span>
                                <AiOutlineStar />
                            </span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};
