import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    // console.log(useParams())
    const [product, setProduct] = useState([])
    const { productId } = useParams()
    console.log(productId)

    async function showApi() {
        await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        showApi()
    }, [])
    return (
        <>
            <div className="col-lg-6 mx-auto my-5 p-5 shadow">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={product.p_url} alt="" className="w-100" height={250} />
                    </div>
                    <div className="col-lg-6">
                        <h2>{product.p_name}</h2>
                        <ul className="list-unstyled">
                            <li>category :- {product.category}</li>
                            <li>price :- {product.p_price}</li>
                            <li>desc :- {product.p_desc}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct
