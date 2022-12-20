import './circle.styles.css';

const Circle = ({ svg, svgSource, numbers }) => {
        let circleType;
        let selectedRating = 0;
        let toggle = 0;

        const setRating = (id) => {
                toggleButtonColor(id);
        }

        const toggleButtonColor = (id) => {
                console.log('id', id);
                let test = document.getElementById(id);
                console.log('test: ', test);
                console.log('selectedRating: ', selectedRating);
                document.getElementById(id).classList.add("circle-clicked");
                document.getElementById(id).classList.remove("circle-hover");

                // check if rating is selected and remove the old selected
                if (selectedRating) {
                        document.getElementById(selectedRating).classList.remove("circle-clicked");
                        document.getElementById(selectedRating).classList.add("circle-hover");
                }
                // check if the same rating is clicked and remove circle-clicked class
                if (selectedRating === id) {
                        document.getElementById(selectedRating).classList.remove("circle-clicked");
                        document.getElementById(selectedRating).classList.add("circle-hover");
                        selectedRating = 0;
                } else {
                        selectedRating = id;
                }
        }

        const toggleStar = () => {
                if (toggle) {
                        document.getElementById("star").classList.remove("star-color-clicked");
                        document.getElementById("star").classList.add("star-color-unclicked");
                        toggle = 0;
                } else {
                        document.getElementById("star").classList.add("star-color-clicked");
                        document.getElementById("star").classList.remove("star-color-unclicked");
                        toggle = 1;
                }
        }



        if (svg === 'true') {
                circleType =
                        <div className='circle' onClick={toggleStar}>
                                <div className='star'>
                                        <img id='star' className='star-size star-color-unclicked' src={svgSource} alt='Star' />
                                </div>
                        </div>;
        } else if (svg === 'false') {
                circleType =
                        <div className='rating'>
                                {numbers.map((number, index) => {
                                        return <div className='circle circle-hover' onClick={() => setRating(index + 1)} id={index + 1} key={number}>{number}</div>;
                                })}
                        </div>;
        }

        return <div>{circleType}</div>
}

export default Circle;