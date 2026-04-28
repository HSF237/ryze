import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL || 'https://your-store-url.com',
  consumerKey: process.env.WOOCOMMERCE_KEY || 'ck_placeholder',
  consumerSecret: process.env.WOOCOMMERCE_SECRET || 'cs_placeholder',
  version: "wc/v3",
  queryStringAuth: true // Force Basic Authentication as query string for high performance
});

export default api;
