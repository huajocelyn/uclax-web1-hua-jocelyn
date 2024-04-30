import styled from "styled-components";
import PropTypes from "prop-types";

const Inset = ({ children }) => {
    return <InsetStyled className="Inset">{children}</InsetStyled>;
};

export default Inset;

Inset.propTypes = {
    children: PropTypes.any,
};

const InsetStyled = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 0px 10px;
`;
