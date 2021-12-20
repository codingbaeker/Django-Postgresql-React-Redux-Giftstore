import { useFormik } from "formik";
import { FC } from "react";
import Input from "../../components/login/component";
import { initialValues, onSubmit, validationSchema  } from "./forms";
import "./styles.css"

const DeleteGifts: FC = () => {

    const formik = useFormik({
        initialValues,
        onSubmit:(values) => onSubmit(values),
        validationSchema,
    });

    return(
        <div className="add-container">
            <div className="add-title">
                <p className="add-title">Which Product would you like to delete?</p>
            </div>
            <div className="add-form">
                <Input
                    name="name"
                    className="product-inputs"
                    placeholder="Product Name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <a href="/Gifts">
                    <button
                        type="button"
                        className="button-form"
                        onClick={() => (formik.handleSubmit(), console.log("Sucess"))}
                        >
                    Enter
                    </button> 
                </a>
            </div>
        </div>
    )
}

export default DeleteGifts;