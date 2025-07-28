const Home = () => {
  async function save() {
    const data = {
      category:"test",
      p_name:"p_name",
      p_price:9898,
      p_desc:"sdjhfsdjhfg"
    }
    const response = fetch('https://684baaa1ed2578be881c0ca9.mockapi.io/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = response.json()
    console.log(result)
      
  }
  return (
    <>
      <button onClick={save}>insert</button>
    </>
  )
}

export default Home
