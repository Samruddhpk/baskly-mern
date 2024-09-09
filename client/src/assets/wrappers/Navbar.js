import styled from "styled-components";


const Wrapper = styled.nav`
padding: 1rem;
.nav-left{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-center{
    display: none;
}


@media screen and (min-width: 768px) 
{
.nav-left{
    display: none;
}
    .nav-center{
    display: block;
    padding: 1rem 2rem;
    width: 90vw;
    max-width: 1170px;
    margin:0  auto;
    text-align: center;
}   
}

`;


export default Wrapper;