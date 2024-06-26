import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS, and Javascript`}
            >
                <strong>HTML</strong> stands for "HyperText Markup Language."
                "Markup language" means that rather than using a programming
                language to perform functions, HTML uses tags to identify
                different types of content and the purposes they serve to the
                webpage. <strong>CSS</strong>, or "Cascading Style Sheets," is
                used to control presentation, formatting, and layout. It
                dictates how HTML elements of a website should appear on the
                front end of the page. It allows for the addition of interactive
                elements like background color, headers, shapes, graphics, and
                more that make websites and web applications much more engaging
                to the viewer. It also allows websites to adapt to different
                screen sizes and device types. <strong>JavaScript</strong> is
                another front-end programming language that lets web developers
                design interactive sites. Whereas HTML & CSS are used to control
                presentation, formatting, and layout, JavaScript is used to
                control the behavior of different web elements. Most of the
                dynamic behavior you see on a web page is thanks to JavaScript,
                which augments a browser's default controls and behaviors.
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
                In React, linking to resources typically involves using the
                anchor tag for external links on the ‘Link’ component from React
                Router for internal navigation within your application. However,
                the concepts of “Root Relative” and “Document Relative” paths
                are more related to web development in general rather than React
                specifically.
                <strong> Root Relative Paths</strong>: These paths start from
                the root directory of your website/application. They always
                begin with a forward slash (/), indicating the root of the
                website. For example, if your website’s root is
                ‘https://example.com,’ and you want to link to a page located at
                ‘https://example.com/about,’ you would use “/about” as the path.
                In React, you can use this approach when defining the “to” prop
                in “Link” components from React Router or when specifying the
                “href” attribute in anchor tags.{" "}
                <strong> Document Relative Paths</strong>: These paths are
                relative to the current document’s location. They don’t include
                the domain name or the root directory. Instead, they specify the
                path relative to the current URL. For example, if you are on a
                page ‘https://example.com/products’ and want to link to a page
                ‘https://example/products/detail,’ you would use ‘detail’ as the
                path. In React, you can use document-relative paths by simply
                specifying the relative path in the ‘to’ prop of the ‘Link’
                component or the ‘href’ attribute of an anchor tag.
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <strong>JPEG</strong> (joint photographic experts group) files
                are one of the most common ways to store digital photos. Many
                modern cameras use them to shoot and store images. They go
                through a compression process to significantly reduce the image
                file size - making them easier to store and load on web pages.
                JPEG images can contain up to 16 million colors. JPEGs contain
                less data than PNGs - and therefore, are usually smaller in
                size. JPEGs use a lossy compression process - meaning some data
                from the image is permanently deleted when it’s made smaller.
                This could compromise the quality of your file in the long term
                because each time you edit and save it, you lose more data.
                <strong> PNGs</strong> (portable network graphics files) are
                raster-based files, that is, pixel-based image format. If you
                scale up a raster image too far, it becomes grainy and
                pixelated. Similarly, if the image is too small, it can become
                distinct. While PNGs are capable of handling very high
                resolutions, they’re not infinitely expandable. They’re
                compressible, and can handle 16 million colors. They’re mostly
                used for web graphics, logos, charts, and illustrations, rather
                than high-quality photographs, because they take up more storage
                space than JPEGs.
                <strong> SVG</strong> (scalable vector graphics) work well for
                logos and graphics because you can scale them up or down for
                different purposes. They’re also a popular choice in web design
                because search engines like Google can reach their XML
                programming language. This helps with SEO and website rankings.
                Unlike PNGs, SVGs are vector-based. This means that they use
                mathematical algorithms to display images, which you can then
                scale to any size without negatively impacting their quality.
                They can expand to any size without losing their resolution.
                <strong> GIF</strong> (graphic interchange format) image files
                are commonly used on the web to display graphics and logos. They
                also support basic animation, which means they’re a popular file
                format for memes on social media sites. GIF is a raster file
                format designed for relatively basic images that appear mainly
                on the internet. Each file can support up to 8 bits per pixel
                and can contain 256 indexed colors. GIF files also allow images
                or frames to be combined, creating basic animations.
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                A <strong> Product Manager</strong> (PM) plays a critical role
                in the development and success of a product within an
                organization. They are the key driver in the lifecycle of a
                product, from conception through development, launch, and
                beyond, ensuring that the product meets market needs and
                contributes to the company’s success. Some key responsibilities:
                Define the product vision, conduct market research, prioritize
                features and initiatives, and lead cross-functional teams. A{" "}
                <strong> Scrum Master</strong> is a crucial role in Agile
                project management, particularly within the Scrum framework. The
                Scrum Master facilitates the Scrum process, ensuring the team
                follows Agile practices and principles. A{" "}
                <strong> UX Designer</strong> (User Experience) focuses on
                creating products that provide meaningful and relevant
                experiences to users. This involves designing the entire process
                of acquiring and integrating the product, including aspects of
                branding, design, usability, and function. They focus on
                understanding the user’s needs and designing solutions that
                provide a seamless and efficient user experience. A{" "}
                <strong> Developer/Engineer</strong> is a professional who uses
                technical enterprise to create, design, and maintain systems,
                applications, or infrastructures. These roles can be broadly
                categorized based on the specific domain they operate in, such
                as software, hardware, network, or systems engineering. Some
                responsibilities of a developer include: working on the
                front-end (user interface) and back-end (server, database)
                components, and involved in tasks like coding, debugging,
                testing, and documentation. Some responsibilities of an engineer
                include: designing software systems and architectures, ensuring
                scalability, efficiency, and reliability.{" "}
                <strong> Quality Assurance</strong> (QA) and{" "}
                <strong> Software Development Engineer in Test </strong> (SDET)
                are roles focused on ensuring the quality and reliability of
                software products. Both roles are integral to the software
                development lifecycle, but SDETs typically bring a more
                technical and development-oriented approach to the testing
                process. <strong> DevOps</strong> is a set of practices that
                combines software development (Dev) and IT operations (Ops)
                aimed at shortening the system development lifecycle and
                providing continuous delivery with high software quality. The
                role of a DevOps engineer is to bridge the gap between
                development and operations, ensuring smoother, faster, and more
                reliable software delivery.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
