import axios from 'axios';

const Plan = () => {
    const products = [
        {
          image: "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2020/08/SPH_Newsletters_Blogs_AUG10_GS-POST.png",
          title: 'Basic',
          price: 100,
          description: 'Basic plan'
        },
        {
          image: "https://www.newmedicaleconomics.es/wp-content/uploads/2022/07/medicine-doctor-hand-working-with-modern-computer-interface-1-scaled.jpg",
          title: 'Premium',
          price: 200,
          description: 'Premium plan'
        },
      ]
    
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', color: 'darkviolet' }} >Medical Plans</h1>
          {
            products.map((product, index) => (
              <div key={index}>
                <h3 style={{ fontSize: '1.5rem', color: 'blue' }}>{product.title}</h3>
                <p style={{ fontSize: '1rem' }}>{product.description}</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'green' }}>{product.price} ARS</p>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '500px', height: '300px', border: '1px solid #ccc' }}
                />
                <button  
                  onClick={() => {
                    axios.post('http://localhost:3001/payment', product)
                    .then((res) => window.location.href = res.data.response.body.init_point)
                  }}
                  style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  backgroundColor: 'green',
                  color: 'white',
                  fontSize: '1rem',
                  marginTop: '10px',
                  cursor: 'pointer',
                  width: '500px',
                }}>
                  Buy
                </button>
              </div>
            ))
          }
        </div>
      );
    };
export default Plan 