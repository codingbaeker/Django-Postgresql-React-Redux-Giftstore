import * as yup from "yup";
import { Product } from "../../models/gifts/types";
import { updateProduct } from "../../services/gifts/services";

export interface formValues{
    name: string;
    description: string;
    price: number;
    picture: string;
    availability: boolean;
}

export const initialValues: formValues = {
    name: "",
    description: "",
    price: 9999,
    picture: "",
    availability: false,
}

export const validationSchema: yup.SchemaOf<formValues> = yup.object().shape({
    name: yup.string().required("Product name is required"),
    description: yup.string().required("Description is required"),
    price: yup.number().required("Price is required"),
    picture: yup.string().required("Picture is required"),
    availability: yup.boolean().required("This Field is required"),
});

export const onSubmit = (
    values: formValues,
) => {
    const possibleProduct: Partial<Product> = {
        name: values.name,
        description: values.description,
        price: values.price,
        picture: values.picture,
        availability: values.availability,
    }
    updateProduct(possibleProduct);
    
};