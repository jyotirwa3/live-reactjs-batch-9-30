import axios from "axios"
import { useForm } from "react-hook-form"
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
const Home = () => {

  const { register, handleSubmit, reset } = useForm()

  async function product(data) {
    // const res = await axios.post('https://684baaa1ed2578be881c0ca9.mockapi.io/api/products',data)
    // console.log(res.data)
    const newData = { ...data, createdAt: new Date() }
    // console.log({data,createdAt:new Date()})
// console.log(`${import.meta.env.VITE_API_URL}/products`)
    await axios.post(`${import.meta.env.VITE_API_URL}/products`, newData)
      .then((res) => {
        console.log(res.data)
        toast.success('your product has been inserted!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
        reset()
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
          <button className="btn btn-success">submit</button>
        </div>
      </form>
      <ToastContainer />
    </>
  )
}

// const arr = [12,44,6,3,9,8,1]

// console.log(arr)
// arr.sort((a,b)=>{
//   // console.log("a = ",a,"b = ",b)
//   // return a-b 
//   return b-a
// })
// console.log(arr)

// const arr2 = [12,44,6,3,9,8,1]
// console.log(arr2)
// const sortedArr = arr2.toSorted((a,b)=>{
//   return a-b
// })
// console.log(sortedArr)
// console.log(arr2)

export default Home
