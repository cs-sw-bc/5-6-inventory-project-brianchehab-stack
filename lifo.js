
let orderQueue = [];
let dispatchStack = [];
let inventory = [
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



function placeOrder(order) {
    if (!order || order.quantity <= 0) {
        console.log("Invalid order. Quantity must be greater than 0.");
        return;
    }
    orderQueue.push(order);
    console.log(`Order for product ${order.id} added to queue.`);
}


function processNextOrder() {
    if (orderQueue.length === 0) {
        console.log("No orders to process.");
        return;
    }

    const order = orderQueue.shift(); 
    const product = inventory.find(p => p.id === order.id);

    if (!product) {
        console.log(`Product ID ${order.id} not found. Order skipped.`);
        return; 
    }

    if (product.quantity < order.quantity) {
        console.log(`Not enough stock for product ${product.name}. Order skipped.`);
        return; 
    }

    
    product.quantity -= order.quantity;
    dispatchStack.push(order);
   

    console.log(`Processed order for product ${product.name}. Dispatched quantity: ${order.quantity}. Remaining stock: ${product.quantity}`);
}

function undoLastDispatch() {
    if (dispatchStack.length === 0) {
        console.log("No dispatches to undo.");
        return;
    }

    const order = dispatchStack.pop(); 
    const product = inventory.find(p => p.id === order.id);

    if (product) {
    }

    orderQueue.unshift(order); 
    product.quantity += order.quantity;
    console.log(`Undid dispatch for product ${order.id}. Order removed from queue and inventory restored.`);
}


placeOrder({ id: 1, quantity: 3 });
placeOrder({ id: 2, quantity: 6 }); 

placeOrder({ id: 4, quantity: 2 }); 

processNextOrder();
processNextOrder();
processNextOrder();
processNextOrder();

undoLastDispatch();



console.log("Product to be returned:", orderQueue);
console.log("Inventory after return:", inventory);
