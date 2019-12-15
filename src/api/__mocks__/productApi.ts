import ProductModel from "../../models/productModel";
import { productListTestData } from "../../testUtils/productListTestData";

export default class ProductApi {
  static async getProducts(): Promise<ProductModel[]> {
    return new Promise(res => res(productListTestData));
  }
}
