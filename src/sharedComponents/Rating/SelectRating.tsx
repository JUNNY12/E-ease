'use client'
import { useState , useCallback} from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
    onRateClick?: (index: number) => void;
    
}


export const SelectRating = ({ onRateClick }:Props) => {
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRateClick = useCallback((index:number) => {
        //reset the rating if the same star is clicked twice
        if (selectedRating === index + 1) {
            setSelectedRating(0);
        }
        //update the rating if a different star is clicked
        else {
            setSelectedRating(index + 1);
        }

        //increment the rating if the star is clicked
        if (onRateClick) {
            onRateClick(index + 1);
        }
    },[selectedRating, onRateClick]);

    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => {
                return (
                    <span key={index} onClick={() => handleRateClick(index)}>
                        {selectedRating > index ? (
                            <span className="ratings">
                                <AiFillStar />
                            </span>
                        ) : (
                            <span className="uncolored">
                                <AiOutlineStar />
                            </span>
                        )}
                    </span>
                );
            })}
        </div>
    );
};