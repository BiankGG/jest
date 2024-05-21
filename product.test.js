const {
  resetProducts,
  addProduct,
  removeProduct,
  getProducts,
  getProduct,
  updateProduct,
} = require("./app");

beforeEach(() => {
  resetProducts();
});

describe("addproduct", () => {
  test("should add a product", () => {
    expect(() => addProduct("nombre", "precio")).not.toThrow();
  });
  test("should fail when adding a repeated product", () => {
    addProduct("producto1", 5);
    expect(() => addProduct("producto1", 5)).toThrow();
  });
  test("should fail when adding a product with no name", () => {
    expect(() => addProduct("", 2)).toThrow();
  });
  test("should fail when adding a product with no price", () => {
    expect(() => addProduct("producto2", null)).toThrow();
  });
});

describe("removeProduct", () => {
  test("should remove a product ", () => {
    addProduct("Producto 1", 1);
    addProduct("Producto 2", 2);
    addProduct("Producto 3", 3);


  });
});

// .toBe matcher checks referential identity
// .toBeDefined para verificar que una variable no sea undefined.

describe("getProduct", () => {
  test("should get a product", () => {
    addProduct("producto1", 10);
    const idP = 1;
    const product = getProduct(idP);
    expect(product).toBeDefined();
    expect(product.id).toBe(idP);
    expect(product.nombre).toBe("producto1");
    expect(product.precio).toBe(10);
  });
});



// if you know how to test something, .noit allows you to test its opposite. 
// Use .toThrow in a test to verify that a function throws an error when called. 

describe("updateProduct",()=>{
  beforeEach(() => {
    resetProducts();
    addProduct("Producto 1", 1);
    addProduct("Producto 2", 2);
    addProduct("Producto 3", 3);
  });
  test(" should update a product", () => {
    expect(()=> updateProduct(1, 'producto1', 3)).not.toThrow()
  });
  test("should fail when updating a product that does not exist", () => {
    expect(()=> updateProduct(4,'producto4',2)).toThrow()
  });
  test("should only update the price", () => {
  expect(()=> updateProduct(3,undefined,3)).not.toThrow()

  });
  test("should only update the name", () => {
  expect(()=> updateProduct(3,'actualizar3',undefined)).not.toThrow()

  });
})
