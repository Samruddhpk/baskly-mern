import { FormRow } from "../components";
import { Form, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLogin";


const Register = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    return (

        <Wrapper>
            <Link to="/" className="btn">Back Home</Link>
            <div className="form-container">

                <div className="title">
                    <h4>Create An Account</h4>
                </div>

                <Form method="post" className="form">
                    <FormRow type="text" name="firstName" labelText="First Name" defaultValue="Sam" />
                    <FormRow type="text" name="lastName" labelText="Last Name" defaultValue="pk" />
                    <FormRow type="email" name="email" labelText="Email" defaultValue="Sam@gmail.com" />
                    <FormRow type="password" name="password" labelText="Password" defaultValue="secret" />
                    <FormRow type="tel" name="phone" labelText="Phone" defaultValue="+912255448877" />

                    <button type="submit" className="btn btn-block" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </div>
        </Wrapper>
    );
};
export default Register;