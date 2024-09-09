import styled from "styled-components";

const Wrapper = styled.header`
text-align: center;
padding: 0.5rem ;
.header-btn{
    background-color: transparent;
    outline: none;
    padding: 0.5rem 1rem;
    border: 0.5px solid var(--grey-700);
    cursor: pointer;
    transition: var(--transition);

    &:hover{
        background-color: var(--black);
        color: var(--white);
    }
}

  @media screen and (min-width: 768px) {
        text-align: right;
    }
`;

export default Wrapper;