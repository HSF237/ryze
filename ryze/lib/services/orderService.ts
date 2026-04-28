import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export interface OrderData {
  first_name: string;
  last_name: string;
  address_1: string;
  city: string;
  state: string;
  postcode: string;
  email: string;
  phone: string;
  line_items: { product_id: string; name: string; quantity: number; price: number }[];
  total: number;
}

export const createFirebaseOrder = async (orderData: OrderData) => {
  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, {
      ...orderData,
      status: "pending",
      payment_status: "paid", // Assuming payment is handled before this call in our current flow
      created_at: serverTimestamp(),
      order_number: `RZ-${Math.floor(Math.random() * 90000) + 10000}`
    });
    
    return { id: docRef.id, success: true };
  } catch (error) {
    console.error("Firebase Order Error:", error);
    throw error;
  }
};
