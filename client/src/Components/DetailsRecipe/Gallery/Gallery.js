import styles from './Gallery.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

export const Gallery = ({
    images }) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    // Previous image
    const prevSlide = () => {
        slideNumber === 0 ? setSlideNumber(images.length - 1) : setSlideNumber(slideNumber - 1);
    }

    // Next image
    const nextSlide = () => {
        slideNumber + 1 === images.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
    }

    return <article className={styles["gallery-article"]}>
        {
            openModal &&
            <div className={styles["sliderwrap"]}>
                <FontAwesomeIcon className={styles["btnClose"]} icon={faCircleXmark} onClick={handleCloseModal} />
                <FontAwesomeIcon className={styles["btnPrev"]} icon={faCircleChevronLeft} onClick={prevSlide} />
                <FontAwesomeIcon className={styles["btnNext"]} icon={faCircleChevronRight} onClick={nextSlide} />
                <div className={styles["full-screen-image"]}>
                    <img src={images[slideNumber].url} alt="" />
                </div>
            </div>
        }

        <div>
            {images && <img className={styles["profile-image"]}
            
            src={images[0].url}></img>}
        </div>
        <div className={styles["gallery-wrap"]}>
            {
                images && images.map((image, index) => {
                    return <div
                        key={index}
                        className={styles["single"]}
                        onClick={() => handleOpenModal(index)}>
                        <img src={image.url} alt="" />
                    </div>
                })
            }
        </div>
    </article>
}