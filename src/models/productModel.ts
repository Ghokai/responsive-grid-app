export default interface ProductModel {
  id: string;
  name: string;
  slug: string;
  brand: string;
  type: string;
  image: string;
  price: number;
  size: string;
  rating: number;
  [key: string]: any; // ProductModel is indexable; not a new property
}
