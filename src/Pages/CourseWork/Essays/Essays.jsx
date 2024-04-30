import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS, and Javascript`}
            >
                Answer 1 goes here
            </SingleEssay>
            <SingleEssay
                question={`Q2: What's the difference between Git and Github?`}
            >
                Answer 2 goes here
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                <strong>jQuery</strong> is a utility library that enables
                developers to build web apps effortlessly using JavaScript. It
                is essentially a “lightweight” JavaScript library. When it came
                out back in 2006, JavaScript was not as widely used, or even
                easy to use. But JQuery in a sense, revolutionized the industry,
                by wrapping many lines of JavaScript code into methods that you
                can call with a single line of code. <strong>React</strong> is a
                library that allows embedding HTML within JavaScript. It is an
                open-source, declarative, efficient and extremely flexible
                JavaScript library that was created by Facebook in 2011,
                essentially for the purpose of building interactive UI elements.
                Before React, developers used to build IUs by hand using raw
                JavaScript or React predecessors like jQuery, which meant longer
                time and less accuracy. React provides reusable library code
                which cuts down on the total development time and also shortens
                the score of errors. With React, developers can build
                large-scale, dynamic looking single page applications that are
                sophisticated but convenient to use. jQuery is a fine choice for
                simple web building, using animations and effects, React helps
                you perform more sophisticated functions and principally
                highlights IU development, DOM manipulation, and the likes.
            </SingleEssay>
            <SingleEssay question={`Q4: Sample Question...`}>
                Answer 4 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
