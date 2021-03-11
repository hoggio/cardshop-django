import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';
// import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('http://localhost:8000/api/products/');
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Head>
        <title>CardShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Latest Cards</h1>
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
}
