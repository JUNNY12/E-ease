'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { Button } from "@/sharedComponents/Button/Button";
import styles from "../styles/search.module.scss";
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

export const collections = [
    'Programming',
    'Business',
    'Marketing',
    'Science',
    'Literature',
    'E-books',
    'Fiction',
    'Non-fiction',
    'Engineering',
    'History',
    'Art', ,
    'Sports',
    'Health',
    'Cooking',
]

export default function MobileCollection() {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState('');
    const pathName = usePathname();

    const currentCollection = pathName.split('/')[2];

    useEffect(() => {
        if (currentCollection && collections.includes(currentCollection)) {
            setCurrent(currentCollection);
        }
        else{
            setCurrent('All');
        }

    }, [currentCollection]);

    useEffect(() => {
        setShow(false);
    }, [pathName]);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={styles.mobileCollection}>
            <div className={styles.buttonContainer}>
                <Button onClick={handleShow}>
                    <span>{current}</span>
                    <span>
                        {show ? <BiUpArrow /> : <BiDownArrow /> }
                    </span>
                </Button>
            </div>
            {show && (  
                <ul>
                    {collections.map((collection, index) => (
                        <li key={index}>
                            <Link href={`/search/${collection}`}>
                                {collection}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
