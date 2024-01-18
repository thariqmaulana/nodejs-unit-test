import { getAllProducts, getProductById } from "../src/database"

 jest.mock("../src/database.js", () => {
  //defaultnya seperti ini sebenarnya
  // aslinya seperti ini saja 
  // return{
  //   __esModule: true, 
  //   getAllProducts: jest.fn(),
  //   getProductById: jest.fn()
  // }
  const originalModule = jest.requireActual("../src/database.js");
  //hasilnya {
  //   getAllProducts
  // dll
  // }

  // ... digabung istilahnya
  //selain ini akan memanggil actualmodulenya. sepertinya tersimpan di ...originalModule
  //hanya getAllProducts yang di mock
  return{
    __esModule: true, 
    ...originalModule,
    getAllProducts: jest.fn()
    
  }
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

  
})