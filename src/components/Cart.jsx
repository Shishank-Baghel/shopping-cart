import React from 'react';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch();

  const removeToCart =(id)=>{
    dispatch(remove(id));
  }

  const card = products.map(product=>
    (
        <div className="col-md-12" style={{marginBottom:'20px'}}>
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
    <Card.Footer style={{background:'white'}}>
    <Button variant="danger" onClick={()=>removeToCart(product.id)} >Remove from cart</Button>
    </Card.Footer>
  </Card>
  </div>
))

  return (
    <>
    <h1>CART</h1>
    <div className='row'>
    {card}

    </div>
    </>
  )
}

export default Cart