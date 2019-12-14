import ProductModel from "../models/productModel";
const data = require("./productList.json");
const fakeApiResponseTimeMS = 1500;

export default class ProductApi {
  static async getProducts(): Promise<ProductModel[]> {
    return new Promise(res =>
      setTimeout(() => {
        res(data);
      }, fakeApiResponseTimeMS)
    );
  }
}
