import styles from '../styles/information.module.scss'
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { BiCart, BiDownArrow, BiUpArrow } from "react-icons/bi";

type Props = {
    show: boolean,
    handleClick:()=> void;
}

export default function SummaryTopHeader({ show, handleClick }: Props) {
  
    return (
        <div className={styles.summaryTopHeader} role='button' onClick={handleClick}>
            <div>
                <span><BiCart /></span>
                <span>Show order summary</span>
                <span>
                    {show? <BiUpArrow /> : <BiDownArrow/>}
                </span>
            </div>

            <div>
                <p>{formatCurrency(30)}</p>
            </div>

        </div>
    )
}