import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import {Alert} from 'react-bootstrap'
import statusCode from "./utility/statusCode";
function Products() {
    const dispatch = useDispatch()
    const {data:products,status} = useSelector(state => state.products)
        
    useEffect(() => {
        //dispatch
        dispatch(getProducts())
    }, [dispatch]);

    
        if(status === statusCode.LOADING){
            return <p className="text-[50px] text-center font-[800]">Loading...........</p>
        }
        if(status === statusCode.ERROR){
            return <p className="text-[24px] text-center font-[500]"> <Alert key="danger" variant="danger">Failed to load products. Please try again later.
        </Alert></p>
        }

    const addToCart=(prod)=>{
        dispatch(add(prod))
    }
    
    const cards = products.map((product, i) => (
        <div key={i} className="flex flex-col">
            <Card className="flex-1" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} className="p-4 h-[300px]" />
                <Card.Body className="flex flex-col justify-between">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR.{product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="flex justify-center items-center bg-white">
                    <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>
            <h1 className="underline text-center text-[30px] font-[700]">Product Dashboard</h1>
            <div className="flex flex-wrap justify-center mx-4 mt-10 gap-5">{cards}</div>
        </div>
    );
}

export default Products;
