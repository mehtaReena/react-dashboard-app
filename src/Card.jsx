import React from 'react';

function Card(props) {
    return (
        <div class="chart-box">
            <div className="card">
                <h2> OUTCOMES</h2>
                <div className="row">
                    <div className="text-align">Outcome</div>
                    <div className="text-align">Option1</div>
                    <div className="text-align">Option2</div>
                </div>
                <hr/>
                <div>
                    <div className="row">
                    <div className="text-align">Sediments</div>
                        <div className="text">
                            <div>+9%</div>
                            <div className="triangle-down"></div>
                        </div>
                        <div className="text">
                            <div>-4%</div>
                            <div className="triangle-up"></div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="text-align">Phosphours</div>
                        <div className="text">
                            <div>+10%</div>
                            <div className="triangle-down"></div>
                        </div>
                        <div className="text">
                            <div>-5%</div>
                            <div className="triangle-up"></div>
                        </div>
                        </div>


                        <div className="row">
                        <div className="text-align">Water</div>
                            <div className="text">
                            <div>+11%</div>
                            <div className="triangle-down"></div>
                        </div>
                        <div className="text">
                            <div>-8%</div>
                            <div className="triangle-up"></div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            );
}

            export default Card;