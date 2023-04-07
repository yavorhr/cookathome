import styles from './Gallery.module.css';
import { useState } from 'react';

export const Gallery = ({
    images }) => {
        console.log(images);
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    return <article>
        <div className={styles["gallery-wrap"]}>
            {
                images && images.map((image, index) => {
                  return <div key={index} className={styles["single"]}>
                        <img src={image.url} alt="" />
                    </div>
                })
            }
        </div>
    </article>
}