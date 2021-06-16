import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './Orders.css'
import { useStateValue } from './StateProvider';
import Order from './Order';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user}, dispatch] = useStateValue();


    console.log('i am the user >>>>', user)
    useEffect(() => {
        if(user){
        db.collection('user')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
        }else{
            setOrders([])
        }
      
    }, [user])
console.log('i am the order >>>>', orders)
    return (
        <div className="orders">
            <h1>Your orders</h1>
            <div class="orders__order"> 
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
