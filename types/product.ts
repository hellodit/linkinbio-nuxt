interface Product {
    id: number;
    slug: string;
    image_url: string;
    name: string;
    title: string;
    price: number;
    discount_price?: number;
    original_price?: number;
    is_published: boolean;
    created_at: string;
}