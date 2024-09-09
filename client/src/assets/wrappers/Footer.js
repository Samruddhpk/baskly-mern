import styled from "styled-components";


const Wrapper = styled.footer`
background-color: var(--black);
padding: 3rem;
.footer-center{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
a{
    color: var(--white);
}
a:hover{
    color: var(--grey-300);
}
h5{
    color: var(--grey-50);
}
`;


export default Wrapper;