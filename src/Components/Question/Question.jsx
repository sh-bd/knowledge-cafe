import React from 'react';

const Question = () => {
    return (
        <>
            <header className="mt-4">
                <h2 className='fw-semibold'>Frequently Asked Questions</h2>
            </header>

            <main>

                <div className="accordion mt-4" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                            <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                4. How Does React work?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <span className='fw-semibold'>React</span> works on mainly 6 basic concepts- <br /><br />

                                i. <span className='fw-medium'>JSX</span>:
                                It is a HTML-like markup inside a javascript file. Some of the attributes and properties are different than normal HTML. <br />

                                ii. <span className='fw-medium'>Components</span>:
                                Every piece of UI is a components and these are the foundation to building a website. The name always starts with a capital letter. <br />

                                iii. <span className='fw-medium'>Props</span>:
                                React components use props to communicate with other each other. <br />

                                iv. <span className='fw-medium'>useState</span>:
                                useSate is a react hook that lets the developer add a state variable to your component. <br />

                                v. <span className='fw-medium'>Event handlers</span>:
                                When an event handlers updates the state of a component, it triggers a re-render of the component and its children. <br />

                                vi. <span className='fw-medium'>useEffect</span>:
                                The useEffect Hook allows you to perform side effects in your components. i.e. fetching data. <br />
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    );
};

export default Question;