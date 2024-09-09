import styled from "styled-components";

const Wrapper = styled.section`
display: grid;
padding: 2rem;
gap: 2rem;
.title{
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;

h2{
    font-size: 5rem;
    letter-spacing:2px;
}
p{
    line-height: 1.5;
}
}
.img-container{
    display: none;
}


@media screen and (min-width: 768px) {
grid-template-columns: 1fr 1fr;
.img-container{
    display: block;
}
}

`;



export default Wrapper;