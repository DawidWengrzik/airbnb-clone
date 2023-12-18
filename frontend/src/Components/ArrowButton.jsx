import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const ArrowButton = ({direction, clickHandler, classes}) => {
    return (
        <button className={classes} onClick={clickHandler}>
            <span className="btn-icon">
                { direction === 1 && <HiChevronLeft /> }
                { direction === -1 && <HiChevronRight /> }
            </span>
        </button>
    )
}

export default ArrowButton