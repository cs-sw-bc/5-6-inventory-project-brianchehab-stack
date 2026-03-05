
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

function addproduct(id, name, category, price, quantity) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            console.log(`Product with ID ${id} already exists. Inventory not updated.`);
            return;
        }
    }
    const newProduct = {
        id: id,
        name: name,
        category: category,
        price: price,
        quantity: quantity
    };
    inventory.push(newProduct);
    console.log(`Inventory after adding ID ${id}:`, inventory);
}

addproduct(4, "Smartphone", "Electronics", 499.99, 20);
addproduct(1, "Tablet", "Electronics", 299.99, 15); // This will show an error message since ID 1 already exists

// 2) Update Product

function updateProduct(id, updates) {
    let found = false;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            found = true;
            for (let key in updates) {
                inventory[i][key] = updates[key];
            }
            console.log(`Product with ID ${id} updated successfully.`);
            return;
        }
    }
    console.log(inventory);
    
    if (!found) {
        console.log(`Product with ID ${id} not found. Inventory not updated.`);
    }
}

updateProduct(5, { price: 49.99 }); // This will show an error message since ID 5 does not exist

// 3) Delete Product

function deleteProduct(id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory.splice(i, 1);
            console.log(`Product with ID ${id} deleted successfully.`);
            return;
        }
    }
    console.log(`Product with ID ${id} not found in the inventory. No update was made.`);
}

deleteProduct(3); // This will delete the product with ID 3
deleteProduct(5); // This will show an error message since ID 5 does not exist

console.log('Updated Inventory:', inventory);

// 4) Search by Category or name

function searchByName(name) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            return inventory[i];
        }
    }
    return null;
}

function searchByCategory(category) {
    let results = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].category === category) {
            results.push(inventory[i]);
        }
    }
    return results;
}

const deskchair = searchByName("Desk Chair");
console.log(`Your search for "${deskchair.name}" returned the following results:`);
console.log(deskchair);

const electronics = searchByCategory("Electronics");
console.log(`Your search for "${electronics[0].category}" returned the following results:`);
console.log(electronics);

// 5) Sort Products: Name (A to Z), Category (A to Z), or Price (Ascending)

function sortByName() {
    let n = inventory.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (inventory[j].name > inventory[j + 1].name) {
                let temp = inventory[j];
                inventory[j] = inventory[j + 1];
                inventory[j + 1] = temp;
            }
        }
    }
}

inventory.sort((a, b) => a.name.localeCompare(b.name));
console.log(`Your name sort returned the following list:`);
console.log(inventory);

function sortByCategory() {
    let n = inventory.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (inventory[j].category > inventory[j + 1].category) {
                let temp = inventory[j];
                inventory[j] = inventory[j + 1];
                inventory[j + 1] = temp;
            }
        }
    }
}

inventory.sort((a, b) => a.category.localeCompare(b.category));
console.log(`Your category sort returned the following list:`);
console.log(inventory);

function sortByPrice() {
    let n = inventory.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (inventory[j].price > inventory[j + 1].price) {
                let temp = inventory[j];
                inventory[j] = inventory[j + 1];
                inventory[j + 1] = temp;
            }
        }
    }
}

inventory.sort((a, b) => a.price - b.price);
console.log(`Your price sort returned the following list:`);
console.log(inventory);
