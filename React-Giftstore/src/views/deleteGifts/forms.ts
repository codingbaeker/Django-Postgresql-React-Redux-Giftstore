import * as yup from "yup";
import { Product } from "../../models/gifts/types";
import { deleteProduct } from "../../services/gifts/services";

export interface formValues{
    name: string;
}

export const initialValues: formValues = {
    name: "",
}

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
    name: yup.string().required("Product name is required"),
});

export const onSubmit = (
    values: formValues,
) => {
    const possibleProduct: Partial<Product> = {
        name: values.name,
    }
    deleteProduct(possibleProduct);
    
};