import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
 
const Funfact = (props) => {

    const [ didViewCountUp, setDidViewCountUp] = useState(false)

    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };

    const achievementData = props.data;

    return (
        <section className="funFacts-area ptb-80">
            <div className="container">
                <div className="row">
                    {achievementData.map((data, idx) => (
                        <div className="col-lg-3 col-md-6">
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
                    
                </div>
            </div>
        </section>
    );
}
 
export default Funfact;