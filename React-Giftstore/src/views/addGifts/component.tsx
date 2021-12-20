import { useFormik } from "formik";
import { FC } from "react";
import Input from "../../components/login/component";
import { initialValues, onSubmit, validationSchema  } from "./forms";
import "./styles.css"

const AddGifts: FC = () => {

    const formik = useFormik({
        initialValues,
        onSubmit:(values) => onSubmit(values),
        validationSchema,
    });

    return(
        <div className="add-container">
            <div className="add-title">
                <p className="add-title">Fill in the form to add new products</p>
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
                <Input
                    name="description"
                    className="product-inputs"
                    placeholder="Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
                <Input
                    name="price"
                    className="product-inputs"
                    placeholder="Price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                <Input
                    name="picture"
                    className="product-inputs"
                    placeholder="picture-link"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.picture}
                />
                <Input
                    name="availability"
                    className="product-inputs"
                    placeholder="On stock?"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.availability}
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

export default AddGifts;