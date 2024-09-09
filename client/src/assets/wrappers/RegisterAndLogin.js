import styled from "styled-components";


const Wrapper = styled.section`
padding: 2rem 1rem;
.form-container{
    border-radius:10px ;
    .title{
        text-align: center;
        margin-bottom: 2rem;
    }
    p{
        text-align: center;
        margin-top: 1rem;
    a{
        text-decoration: underline;
        color: blue;
    }

   
    }
     button{
        background-color: var(--black);
        color: var(--white);
    }
    button:hover{
        background-color: transparent;
        color: var(--black);
    }
/* .form{ */
    /* display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap; */
/* } */
}
`;

export default Wrapper;