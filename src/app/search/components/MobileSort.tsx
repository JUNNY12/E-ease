'use client'
import { useEffect, useState } from "react";
import { Button } from "@/sharedComponents/Button/Button";
import styles from "../styles/search.module.scss";
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import Link from "next/link";

const sorts = [
    'Trending',
    'Newest',
    'Oldest',
    'Price: low to high',
    'Price: high to low',
]

export default function MobileSort() {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState('');


    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={styles.mobileSort}>
            <div className={styles.buttonContainer}>
                <Button onClick={handleShow}>
                    <span>
                        Trending
                    </span>
                    <span>
                        {show ? <BiUpArrow /> : <BiDownArrow />}
                    </span>
                </Button>
            </div>
            {show && (
                <ul>
                    {sorts.map((sort, index) => (
                        <li key={index}>
                            <Link href={`#`}>
                                {sort}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
