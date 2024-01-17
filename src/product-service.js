import { getAllProducts, getProductById } from "./database";

// karena kasusnya mock modules. tentu saja modulesnya kita implementasikan dulu kan
// makanya tidak langsung di database.js

export class ProductService {
  static findById(id){
    return getProductById(id);
  }

  static findAll(){
    return getAllProducts();
  }
}