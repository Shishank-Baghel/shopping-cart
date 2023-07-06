import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const Product = ()=>{
    const dispatch = useDispatch();

    const[products, setProducts]= useState([]);

    useEffect(()=>{
        // api
        fetch('https://fakestoreapi.com/products')
        .then(response=> response.json())
        .then(result=>setProducts(result))

    },[])


    const addToCart =(product)=>{
        // dispatch a action
        dispatch(add(product))
    }

    const card = products.map(product=>
        (
            <div className="col-md-3" style={{marginBottom:'20px'}}>
        <Card key={product.id} className='h-100'>
            <div className="center">
        <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary" onClick= {()=> addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
      </div>
    ))


    return(
        <>
        <h1>Product Dashboard</h1>
       <div className="row">
        {card}
       </div>

        </>
    )
}

export default Product;