import { useRef } from 'react';

import './circle.styles.css';

const Circle = (props) => {
        let circleType;
        let toggleStar = 0;
        const selectedRating = useRef(0);

        const setRating = (id) => {
                toggleButtonColor(id);
        }

        const setClickedRating = (id) => {
                selectedRating.current = id;
                props.rating(id);
        }

        const toggleButtonColor = (id) => {
                document.getElementById(id).classList.add("circle-clicked");
                document.getElementById(id).classList.remove("circle-hover");

                // check if rating is selected and remove the old selected
                if (selectedRating.current) {
                        document.getElementById(selectedRating.current).classList.remove("circle-clicked");
                        document.getElementById(selectedRating.current).classList.add("circle-hover");
                }
                // check if the same rating is clicked and remove circle-clicked class
                if (selectedRating.current === id) {
                        document.getElementById(selectedRating.current).classList.remove("circle-clicked");
                        document.getElementById(selectedRating.current).classList.add("circle-hover");
                        setClickedRating(0);
                } else {
                        setClickedRating(id);
                }
        }

        const startIconClicked = () => {
                if (toggleStar) {
                        document.getElementById("star").classList.remove("star-color-clicked");
                        document.getElementById("star").classList.add("star-color-unclicked");
                        toggleStar = 0;
                } else {
                        document.getElementById("star").classList.add("star-color-clicked");
                        document.getElementById("star").classList.remove("star-color-unclicked");
                        toggleStar = 1;
                }
        }

        if (props.svg === 'true') {
                circleType =
                        <div className='circle' onClick={startIconClicked}>
                                <div className='star'>
                                        <img id='star' className='star-size star-color-unclicked' src={props.svgSource} alt='Star' />
                                </div>
                        </div>;
        } else if (props.svg === 'false') {
                circleType =
                        <div className='rating'>
                                {props.numbers.map((number, index) => {
                                        return <div className='circle circle-hover' onClick={() => setRating(index + 1)} id={index + 1} key={number}>{number}</div>;
                                })}
                        </div>;
        }

        return <div>{circleType}</div>
}

export default Circle;