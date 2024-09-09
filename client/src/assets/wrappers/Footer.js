import styled from "styled-components";


const Wrapper = styled.footer`
background-color: var(--black);
padding:  1rem;
text-align: center;
position: fixed;
bottom: 0;
width: 100%;
ul{
    display: none;
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


@media screen and (min-width: 768px){
position: relative;
padding: 3rem;
.footer-center{
    display: flex;
    justify-content: space-between;
    align-items: end;
ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }
}
    
}
`;


export default Wrapper;