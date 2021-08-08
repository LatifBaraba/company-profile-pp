import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Funfact = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const [didViewCountUp, setDidViewCountUp] = useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };

    const achievementData = props.data;

    return (
        <section className="funFacts-area ptb-80">
            <div className="container">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={5000}
                    keyBoardControl={false}
                    customTransition="all .3"
                    transitionDuration={3000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {/* <div className="row"> */}
                    {achievementData.map((data, idx) => (
                        <div className="col-lg-12 col-md-12">
                            <div className="funFact">
                                {/* <i className="fa fa-smile-o"></i> */}
                                <h2 className="count">
                                    <VisibilitySensor
                                        onChange={onVisibilityChange}
                                        offset={{
                                            top: 10
                                        }}
                                        delayedCall
                                    >
                                        <CountUp
                                            start={0}
                                            end={
                                                didViewCountUp
                                                    ? data.achievement_total
                                                    : 0
                                            }
                                            duration={6}
                                        />
                                    </VisibilitySensor>
                                </h2>
                                <p>{data.achievement_name}</p>
                            </div>
                        </div>
                    ))}
                    {/* </div> */}
                </Carousel>
            </div>
        </section >
    );
}

export default Funfact;