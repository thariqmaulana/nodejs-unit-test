import { getAllProducts, getProductById } from "../src/database"
import { ProductService } from "../src/product-service"

jest.mock("../src/database");

test("mock modules getproductbyid", () => {
  //kalau tidak jest.mock maka akan keluar throw error kita
  //mockImp ini seperti simulasi hubungan dengan pihak ke-3 atau database misalnya
  //sepertinya getProduct di manipulasi disini
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: "product mock"
    }
  })

  //ini menggunakan mockImp
  const product = ProductService.findById(1);

  expect(product).toEqual({
    id: 1,
    name: "product mock"
  })
})

test("mock modules getAllProducts", () => {
  const products = [
    {
      id: 1,
      name: "product mock 1"
    },
    {
      id: 2,
      name: "product mock 2"
    }
  ]

  getAllProducts.mockImplementation(() => {
    return products;
  })

  expect(ProductService.findAll()).toEqual(products);
})