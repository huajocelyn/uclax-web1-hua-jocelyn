import styled from "styled-components";

// Scripts
// import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>
            <ReactComponent title="The Idea of You" />
            <ReactComponent title="Princess Diaries" />
            <ReactComponent title="Anyone But You" showDisc={true} />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
