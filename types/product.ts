export type ProductType = 'Physical' | 'Service' | 'Bundle';

export interface ProductRow {
  SKU: string; Product_Name: string; Category: string; Variant: string; Family: string;
  Brand: string; Model: string; Size_ft: string; Diameter_in: string; Color: string;
  Type: ProductType; Components_Included: string; MSRP_USD: string; Cost_USD: string;
  Weight_lb: string; Packaged_LxWxH_in: string; Vendor: string; Vendor_SKU: string;
  Tags: string; Handle: string; Status: string; Description_Short: string;
}
export interface Product extends ProductRow {
  price: number; weight: number; diameter: number; sizeFt?: number; tags: string[];
}
