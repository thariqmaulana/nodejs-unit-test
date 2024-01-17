// anggap sebuah module!!!
// kita akan mock 1 module ini

export const getProductById = (id) => {
  //anggap
  //select * from products where id = ${id}
  //karena tidak ada alias percontohan saja maka kita throw error
  throw new Error("Not Implemented");
}

export const getAllProducts = () => {
  throw new Error("Not Implemented");
}