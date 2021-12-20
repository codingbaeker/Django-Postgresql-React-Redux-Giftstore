import { Product } from "../../models/gifts/types";
import { authorizationFetch } from "../../utils/requests/auth";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch("http://104.237.129.63:8012/api/products/Product", {
        method: "GET",
    }
    );

    if (response.status === 200) {

        const Products: Product[] = await response.json();
        return Products
    } else {
        throw new Error ("Error in request")
    };
};

export const addProduct = async(
    basicProduct: Partial<Product>
    ): Promise<Product> => {
        const response = await authorizationFetch(
        "http://104.237.129.63:8012/api/products/Product/",{
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(basicProduct)
    });
    if (response.status ===201) {
        const infoProduct: Product = await response.json();
        return infoProduct;
    } else {
        throw new Error("Error in request");
    };
};

export const updateProduct = async(
    basicProduct: Partial<Product>
    ): Promise<Product> => {
        const response = await authorizationFetch(
        `http://104.237.129.63:8012/api/products/Product/${basicProduct.name}/` ,{
            headers: {
                "content-type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(basicProduct)
    });
    if (basicProduct.name && response.status ===200) {
        const infoProduct: Product = await response.json();
        return infoProduct;
    } else {
        throw new Error("Error in request");
    };
};

export const deleteProduct = async(
    basicProduct: Partial<Product>
    ) => {
        const response = await authorizationFetch(
        `http://104.237.129.63:8012/api/products/Product/${basicProduct.name}/`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body:null
        });

        if (basicProduct.name && response.status === 204) {
            return response
        } else {
            throw new Error("Error in request");
        }
};