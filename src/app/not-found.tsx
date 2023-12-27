import Link from 'next/link'
import { Typography } from '@/sharedComponents/Typography/Typography'

export default function GeneralNotFound() {
    return (
        <section className={`pageNotFound`}>
            <div className={`container`}>
                <Typography variant={1}>404</Typography>
                <p className='notFound'>Page not Found</p>
                <p>
                    The Page you are looking for does not seem to exist.
                    You may want to head back to the homepage.
                </p>
                <Link className='button' href="/">Return Home</Link>
            </div>
        </section>
    )
}