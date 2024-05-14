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
                <strong>Git</strong> is a free, open-source software distributed
                version control system designed to manage all source code
                history during software development. It is designed for
                coordinating work between programmers, but it can be used to
                keep a history of commits, reverse changes, and let developers
                share code. <strong>GitHub </strong> is a collaboration and
                version control platform for storing and managing code. Using
                this tool, you can collaborate with others on projects from
                anywhere. The main <strong>Git</strong> vs.{" "}
                <strong>GitHub </strong>
                difference is in their functionality. While they both provide
                source code management and make merging and sharing code easier,
                that is pretty much where their similarities end. Think of Git
                as a single computer and GitHub as a network of multiple
                interconnected computers, all with the same end goal but a
                wildly different role for how to get there.
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
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-end Developer?`}
            >
                <strong>Front-end developers</strong> focus on the user-facing
                side of the website. They design the visual aspect of websites
                for users to interact with, including colors, layout, and fonts.
                Front-end developers ensure that visitors can easily interact
                with and navigate sites by using programming languages, design
                skills, and other tools. Whereas{" "}
                <strong>Back-end developers</strong> focus on the server side of
                websites. They use technical skills to perform the
                behind-the-scenes work that creates a website’s structure and
                overall functionality, allowing a site’s front end to exist.
                They create a site’s operations, databases, and application
                programming interface (API).
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs. Document Relative)?`}
            >
                Answer 5 goes here
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                Answer 6 goes here
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                Answer 7 goes here
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
