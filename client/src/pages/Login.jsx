import { FormRow } from "../components";
import { useNavigation, Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLogin";

const Login = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";


    return (
        <Wrapper>
            <Link to="/" className="btn">Back Home</Link>
            <div className="form-container">

                <div className="title">
                    <h4>Login</h4>
                </div>

                <Form method="post" className="form">

                    <FormRow type="email" name="email" labelText="Email" defaultValue="Sam@gmail.com" />
                    <FormRow type="password" name="password" labelText="Password" defaultValue="secret" />

                    <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    <p>Don't have an Account? <Link to="/register">Register</Link></p>
                </Form>
            </div>
        </Wrapper>
    );
};
export default Login;