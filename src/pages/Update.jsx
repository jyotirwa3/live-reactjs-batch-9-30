import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Flip, toast, ToastContainer } from 'react-toastify'

const Update = () => {
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams()

    const redirect = useNavigate()
    async function showApi() {
        await axios.get(`${import.meta.env.VITE_API_URL}/products/${id}`)
            .then((res) => {
                reset(res.data)
            })
    }

    useEffect(() => {
        showApi()
    }, [])


    async function product(data) {
        await axios.put(`${import.meta.env.VITE_API_URL}/products/${id}`, data)
            .then(() => {
                redirect('/view')
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit(product)} className="col-lg-6 mx-auto my-5 p-5 shadow">
                <div className="mt-4">
                    <select className="form-select" {...register('category')}>
                        <option value="" disabled selected>--select category--</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Cloth">Cloth</option>
                        <option value="Toy">Toy</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="mt-4">
                    <input type="text" {...register('p_name')} className="form-control" placeholder="enter product name" />
                </div>
                <div className="mt-4">
                    <input type="number" {...register('p_price')} className="form-control" placeholder="enter product price" />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('p_url')} className="form-control" placeholder="enter product url" />
                </div>
                <div className="mt-4">
                    <textarea {...register('p_desc')} className="form-control" placeholder="enter description"></textarea>
                </div>
                <div className="mt-4">
                    <button className="btn btn-warning">Update</button>
                </div>
            </form>
            <ToastContainer />
        </>
    )
}

export default Update
