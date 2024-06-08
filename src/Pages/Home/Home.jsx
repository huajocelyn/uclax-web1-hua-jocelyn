import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";

import Slideshow from "./slideshow/slideshow";
import Tabbed from "./tabbed/tabbed";

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <Inset>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
