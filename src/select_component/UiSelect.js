import React from 'react';
import Slider from "react-slick";

// export const UiSelect  = (props) => {

export class UiSelect extends React.Component {

    state = {
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0,
        // activeSlide2: this.props.price[0],
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

            beforeChange: (current, next) =>{this.setState({ oldSlide: current, activeSlide: next
            });

            }
                ,
            afterChange: current => {this.setState({

                activeSlide2: document.getElementsByClassName(
                    'slick-current')[0].innerText });
            }

        };

        if (this.state.activeSlide2 === 0){
            return (

                <div>
                    <Slider {...settings}>
                        {this.props.price}
                    </Slider>

                    <h1>{this.props.price[0]}</h1>
                </div>
            );
        }else {
            return (

                <div>
                    <Slider {...settings}>
                        {this.props.price}
                    </Slider>

                    <h1>{this.state.activeSlide2}</h1>
                </div>
            );
        }


        }


}


