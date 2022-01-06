import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import CartIcon from './CartIcon';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [orderList, setOrderList] = useState([]);

    const addToCart = (item) => {
        const itemIndex = orderList.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrderList([...order, newItem]);
        } else {
            const newOrderList = orderList.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrderList(newOrderList);
        }
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setIsLoaded(false);
            })
            .catch(error => {
                console.log(error);
                setGoods([]);
                setIsLoaded(false);
            });
    }, []);

    return (
        <main className="container content">
            <CartIcon quantity={orderList.length} />
            {isLoaded ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
        </main>
    );
}

export default Shop;