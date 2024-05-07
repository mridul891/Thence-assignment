
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div style={{ width: '30vw' }}>
            <Slider {...settings}>
                <div>
                    <h1 className='text-3xl'>Enhance fortune 50 <br /> company’s insights <br />teams research <br />capabilities</h1 >
                </div>
                <div>
                    <h1 className='text-3xl'>Enhance fortune 50 <br /> company’s insights <br />teams research <br />capabilities</h1 >
                </div>
                <div>
                    <h1 className='text-3xl'>Enhance fortune 50 <br /> company’s insights <br />teams research <br />capabilities</h1 >
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

export default Carousel;
