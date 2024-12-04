
import Slider from "react-slick";
export const Nifty50Slide = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <>
            <div className="slider-container slide-set-met">
                <Slider {...settings}>
                    <div>
                        <div className="cart-itiems">
                            <img src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_TradingVSdemat-2.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="cart-itiems">
                            <img src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_TradingVSdemat-2.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="cart-itiems">
                            <img src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_TradingVSdemat-2.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="cart-itiems">
                            <img src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_TradingVSdemat-2.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="cart-itiems">
                            <img src="https://www.smallcase.com/wp-content/uploads/2023/05/SEO_TradingVSdemat-2.png" alt="" />
                        </div>
                    </div>

                </Slider>
            </div>
        </>
    )
}
