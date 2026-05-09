import { useEffect, useRef, useState } from "react";
import type { ProductType } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../redux/reduxStore";
import { setPageData } from "../redux/productSlice";
const Products = () => {
    const dispatch=useDispatch();
    
    let abortController = useRef<AbortController | undefined>(undefined);
    const [products, setProducts] = useState<ProductType[] | undefined>(undefined);
    const [page, setPage] = useState(1);
const cachedProducts=useSelector((state:RootType)=>state.product.pagedData[page])

    useEffect(() => {

        if(cachedProducts)
        {
            setProducts(cachedProducts);
            console.log("From cache");
            return;
        }

        abortController.current?.abort();
        abortController.current = new AbortController()
            ; fetch("http://localhost:3000/getProducts?page=" + page, {
                signal: abortController.current?.signal
            })
                .then((response) => {
                    return response.json();
                }).then((response) => {
                    setProducts(response.products);
console.log("Fetchd from server..")
                    dispatch(setPageData({
                        page:page,
                        products:response.products
                    }));


                })
    }, [page]);

    return (
        <>

            {
                products?.map((item) => {
                    return (

                        <div>
                            <h3>{item.title} -{item.price}</h3>
                            <div>{item.description}</div>
                        </div>
                    )
                })
            }
            <button onClick={() => setPage(page - 1)}>Previous</button><button onClick={() => setPage(page + 1)}>Next</button>
        </>
    )


}
export default Products;
