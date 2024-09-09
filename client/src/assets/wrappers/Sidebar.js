import styled from "styled-components";


const Wrapper = styled.aside`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 999;
background-color: var(--background-color);
display: flex;
justify-content: center;
padding: 1rem;
transition: var(--transition);
ul{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    letter-spacing: 1.2px;
    font-size: 2rem;
a:hover{
    color: black;
}

}
.close-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 2rem;
    transition: var(--transition);
&:hover{
    transform: rotate(90deg);
}

}



`;


export default Wrapper;