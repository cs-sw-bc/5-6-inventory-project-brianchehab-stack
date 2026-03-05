const inventory = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 999.99,
        quantity: 10
    },
    {
        id: 2,
        name: "Desk Chair",
        category: "Furniture",
        price: 199.99,
        quantity: 5
    },
    {
        id: 3,
        name: "Notebook",
        category: "Stationery",
        price: 2.99,
        quantity: 100
    }
];

console.log("Initial Inventory:", inventory);

//Part 2 Orders as a Queue (FIFO)

let orderQueue = [];
let dispatchStack = [];



function placeOrder(order) {
    if (!order) {
        console.log("Invalid order: no data provided.");
        return;
    }



    if (typeof order.orderId !== 'number') {

        console.log("Invalid order: missing or invalid orderId.");
        return;
    }

    if (typeof order.productId !== 'number') {
        console.log("Invalid order: missing or invalid productId.");
        return;
    }

    if (typeof order.quantity !== 'number' || order.quantity <= 0) {
        console.log("Invalid order: quantity must be greater than 0.");
        return;
    }

    orderQueue.push(order);
    console.log(`Order ${order.orderId} placed in the queue.`);
}

function processNextOrder() {
    if (orderQueue.length === 0) {
        console.log("No order was found, kindly place order in the queue.");
        return;
    }

    const order = orderQueue.shift();

    let productFound = false;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === order.productId) {
            productFound = true;


            if (inventory[i].quantity < order.quantity) {
                console.log(`Order ${order.orderId} cannot be processed: No enough stock for ${inventory[i].name}.`);
            } else {
                inventory[i].quantity -= order.quantity;
                dispatchStack.push(order);
                console.log(`Order ${order.orderId} processed: ${order.quantity} x ${inventory[i].name} dispatched.`);

            }

            break;
        }
    }


    if (!productFound) {
        console.log(`Order ${order.orderId} failed: Product ${order.productId} not found.`);

    }
}


placeOrder({ orderId: 101, productId: 1, quantity: 3 });
placeOrder({ orderId: 102, productId: 2, quantity: 6 });
placeOrder({ orderId: 104, productId: 4, quantity: 1 });
placeOrder({ orderId: 105, productId: 3, quantity: 50 });

console.log("Current Queue(s):", orderQueue);
processNextOrder('No order was found, kindly place order in the queue.');
processNextOrder('OrderID 101');
processNextOrder('OrderID 102');
processNextOrder('OrderID 104');
processNextOrder('OrderID 105');

console.log("Current Queue(s):", orderQueue);
console.log("Current Inventory:", inventory);


