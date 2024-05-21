let products = [];
let id = 0;

function resetProducts() {
  products = [];
  id = 0;
}

function addProduct(nombre, precio) {
  if (!nombre || !precio) {
    throw new Error("ningun parametro esta definido");
  }
  const duplicado = products.find((product) => product.nombre === nombre);
  if (duplicado) {
    throw new Error("el producto ya existe");
  }
  id++;
  products.push({ id, nombre, precio });
}

// addProduct('product1',2);
// addProduct('product2',5 )
// console.log(products)

function removeProduct(id) {
  const remove = products.findIndex((product) => product.id === id);

  if (remove === -1) {
    throw new Error("producto no existe");
  }
  const removeP = products.splice(remove, 1);
  return removeP[0];
}

// addProduct('Producto1', 1);
// addProduct('Producto2', 2);
// addProduct('Producto3', 3);
// console.log( products);
// removeProduct(2);
// console.log(products);




function getProduct(id) {
  const get = products.find((product) => product.id === id);
  if (!get) {
    throw new Error("producto no existe");
  }
  return get;
}



function updateProduct(id,nombre,precio){
  const update= products.findIndex(product => product.id === id)
  if(update === -1){
      throw new Error('producto no existe');
  }
  if(nombre !== undefined){
   products[update].nombre = nombre 
  }if(precio !== undefined){
   products[update].precio = precio 
  }
};


// addProduct('Producto 1', 5);
// addProduct('Producto 2', 2);
// addProduct('Producto 3', 1);
// console.log('actualizar', products);

function getProducts() {
  return products;
}

module.exports = {
  addProduct,
  resetProducts,
  removeProduct,
  getProduct,
  updateProduct,
  getProducts
};
