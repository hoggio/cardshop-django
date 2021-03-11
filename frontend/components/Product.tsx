import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Rating from './Rating';
import styles from '../styles/Product.module.css';

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link href={`/product/${product._id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={400}
        />
      </Link>
      <Card.Body>
        <Link href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={product.rating} text="Rating" color="#f8e825" />
          </div>
        </Card.Text>
        <Card.Text as="h3" className={styles.h3}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
