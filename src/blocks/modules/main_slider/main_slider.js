import $ from 'jquery';
import 'slick-carousel';

const MainSlider = class MainSlider {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_first').slick({
                slidesToShow: 1,
                arrows: true,
                infinite: true,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainSlider;