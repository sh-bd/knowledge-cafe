import React from 'react';

const Question = () => {
    return (
        <>
            <header className="mt-4">
                <h2 className='fw-semibold'>Assignment Questions:</h2>
            </header>

            <main>

                <div className="accordion mt-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. Props vs state
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p> <span className='fw-semibold'>State</span> is handled in the component and we can update it inside the component while <span className='fw-semibold'>props</span> are handled outside the component and must be updated outside of the component.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. How does useState work?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p><span className='fw-semibold'>useState</span> is a Hook in React. This Hook enables the developer to
                                    make functional components have a state. It returns an array containing two components. The current state value and a function to update the current value of
                                    the state.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. Purpose of useEffect other than fetching data.
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p><span className='fw-semibold'>useEffect</span> is also used for updating the title of the page, adding event listener, managing a timer, optimizing the  performance of a website and many more con be done using useEffect.</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                4. How Does React work?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <span className='fw-semibold'>React: </span> React is a JavaScript library that helps developers build user interfaces. It uses a virtual DOM to efficiently update the UI, making it faster and more responsive. React components manage their own state and can interact with other components through props.
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Question;