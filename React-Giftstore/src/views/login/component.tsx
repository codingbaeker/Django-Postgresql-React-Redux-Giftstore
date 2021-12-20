import { useFormik } from "formik";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { loginRequested, signinRequested } from "../../redux/user/actions";
import { User } from "../../models/user/types";
import { initialValues, onSubmit, validationSchema } from "./forms";
import { useShowError } from "../../utils/ui/stringError";
import Input from "../../components/login/component";
import "./styles.css";


const Login: FC = () => {
    
    const dispatch = useDispatch();

    const passUser = (user:Partial<User>) => {
        dispatch(loginRequested(user));
    };

    const signUser = (user: Partial<User>) => {
        dispatch(signinRequested(user));
    };
    
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => onSubmit(values, passUser, signUser),
        validationSchema,
    });

    const errors = useShowError(formik.touched, formik.errors);

    return (
        <div className="login-container">
            <p className="login-title">Administration Login</p>
            <div className="login-form">
                {/* <label>
                    Are you new around here?
                    <input
                        type="checkbox"
                        name="register"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.register}
                    />
                </label> */}
                <Input
                    name="username"
                    className="login-inputs"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    ErrorComponent={errors("username")}
                    id="username"
                />
                <Input
                    name="email"
                    className="login-inputs"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    ErrorComponent={errors("email")}
                    id="email"
                />
                <Input
                    name="password"
                    className="login-inputs"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    ErrorComponent={errors("password")}
                    id="password"
                />
                <button
                    type="button"
                    className="button-black"
                    onClick={() => formik.handleSubmit()}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default Login;