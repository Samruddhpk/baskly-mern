import styled from "styled-components";

const Wrapper = styled.section`
display: grid;
padding: 2rem;
gap: 2rem;
height: 80vh;
text-align: center;
.title{
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;

h2{ 
font-size: 3rem;
letter-spacing: 2px;
}
p{
    line-height: 1.5;
}
a{

    width: 100%;
}
.hero-btn{
    width: 100%;
    padding: 1rem;
}

}
.img-container{
    display: none;
}

@media screen and (min-width: 768px) {
text-align: left;
grid-template-columns: 1fr 1fr;
place-content: center;
.img-container{
    display: block;
}
.title{
a{
    width: max-content;
}
    h2{
    font-size: 5rem;
    }
  
}
}

`;



export default Wrapper;