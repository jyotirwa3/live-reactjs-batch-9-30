import axios from "axios"
import { useEffect, useState } from "react"
import { FaEye, FaTrash } from "react-icons/fa"
import { FaPencil } from "react-icons/fa6";
import { FcFullTrash } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const About = () => {
  const [products, setProduct] = useState([])


  ////////// searching state
  const [search, setSearch] = useState("")
  console.log(search)

  ////////// select price
  const [price, setPrice] = useState("")
  console.log(price)

  ////// select category
  const [category, setCategory] = useState("")

  async function showApi() {
    await axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProduct(res.data)
      }).catch((err) => console.log(err))

  }

  useEffect(() => {
    showApi()
  }, [])

  async function trash(id) {
    try {
      if (confirm("do you want to delete this product?")) {
        await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`)
        showApi()
      }
    } catch (error) {
      console.log('error: ', error);
    }
  }

  const categories = products.map((product) => {
    return product.category
  })
  const uniqueCategory = new Set(categories)
  console.log([...uniqueCategory])

  const filterProduct = products
    .filter((product) => {
      // console.log(product.category)
      return product.p_name.toLowerCase().includes(search.toLowerCase())
    })
    .sort((a, b) => {
      if (price === "lToH") {
        return a.p_price - b.p_price
      } else {
        return b.p_price - a.p_price
      }
    })
    .filter((product) => {
      if (category) {
        return product.category === category
      }else{
        return product
      }
    })
  console.log(filterProduct)
  return (
    <>
      {/* {console.log(products)} */}
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4">
            <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="enter category name" />
          </div>
          <div className="col-lg-4">
            <select className="form-select" onChange={(e) => setPrice(e.target.value)}>
              <option value="" selected disabled>--select option--</option>
              <option value="lToH">Low to High</option>
              <option value="hToL">High to Low</option>
            </select>
          </div>
          <div className="col-lg-4">
            <select className="form-select" onChange={(e)=>setCategory(e.target.value)}>
              <option value="" selected disabled>--select category--</option>
              {
                [...uniqueCategory].map((category) => {
                  return (
                    <option>{category}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover table-success container my-5">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>category</th>
            <th>name</th>
            <th>price</th>
            <th>desc</th>
            <th>date</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            filterProduct.map(({ category, p_name, p_price, p_desc, createdAt, id, p_url }, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category}</td>
                  <td>{p_name}</td>
                  <td>{p_price}</td>
                  <td>{p_desc}</td>

                  <td>{new Date(createdAt).toDateString()}</td>
                  <td>
                    <img src={p_url} alt="" width={100} height={100} />
                  </td>
                  <td>
                    <button onClick={() => trash(id)} className="btn btn-outline-danger"><FaTrash /></button>
                    <NavLink to={`/singleProduct/${id}`} className="btn btn-info mx-2">
                      <FaEye />
                    </NavLink>
                    <NavLink to={`/update/${id}`} className="btn btn-outline-warning">
                      <FaPencil />
                    </NavLink>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

// const date = new Date()
// console.log(date.toLocaleDateString())

const date = new Date('2025-06-12T15:01:19.597Z')
console.log(date.toDateString())

const arr = [34, 4, 5]
console.log(arr.includes(42))

export default About
