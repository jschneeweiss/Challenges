import './circle.styles.css';

const Circle = ({ svg, svgSource, numbers }) => {
        let circleType;

        if (svg === 'true') {
                circleType =
                        <div className='circle'>
                                <div className='star'>
                                        <img className='star-size star-color-unclicked' src={svgSource} alt='Star' />
                                </div>
                        </div>;
        } else if (svg === 'false') {
                circleType =
                        <div className='rating'>
                                {numbers.map((number) => {
                                        return <div className='circle circle-hover' key={number}>{number}</div>;
                                })}
                        </div>;
        }

        return <div>{circleType}</div>
}

export default Circle;