export interface Iproduct {
  pid: string;
  pname: string;
  pstatus: string;
  canReturn: number;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Ires<T> {
  msg: string;
  data: T;
}