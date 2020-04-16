import React from 'react';
import Slider from "react-slick";

export class UiSelect extends React.Component {

    state = {
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
    };

    render() {
        var settings = {
            className: "center",
            centerMode: true,
            infinite: false,
            slidesToScroll: 1,
            focusOnSelect: true,
            variableWidth: true,
            speed: 500,
            beforeChange: (current, next) => {
                this.setState({
                    oldSlide: current, activeSlide: next
                });

            },
            afterChange: current => {
                this.setState({

                    activeSlide2: document.getElementsByClassName(
                        'slick-current')[0].innerText
                });
            }

        };

        if (this.state.activeSlide2 === 0) {
            return (
                <div>
                    <Slider {...settings}>
                        {this.props.price}
                    </Slider>

                    <p className="current-select">Selected val {this.props.price[0]}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <Slider {...settings}>
                        {this.props.price}
                    </Slider>

                    <p className="current-select">Selected val {this.state.activeSlide2}</p>
                </div>
            );
        }
    }
}


