
export function updateTotal(order){
    let newTotal = 0;
    order.map(item =>{
        newTotal = newTotal + (item.price * item.count);
    })
    return newTotal.toFixed(2);
}