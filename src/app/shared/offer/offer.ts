export interface IOffer {
  offer_id: string,//1
  title: string,
  desc: string,
  condition: string,
  price_normal: number,
  price_discount: number,
  discount: number,
  supplier: string,
  startDate: string,
  endDate: string,
  url_link: string,
  url_video: string,
  activate: number,//13
}
