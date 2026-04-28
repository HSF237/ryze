// Order management functions
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, getDoc, Timestamp } from 'firebase/firestore';

// Create a new order
export async function createOrder(orderData) {
  try {
    const ordersCollection = collection(db, 'orders');

    const newOrder = {
      ...orderData,
      status: 'pending_payment',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };

    const docRef = await addDoc(ordersCollection, newOrder);
    return { id: docRef.id, ...newOrder };
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
}

// Get order by ID
export async function getOrder(orderId) {
  try {
    const orderRef = doc(db, 'orders', orderId);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      return { id: orderSnap.id, ...orderSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
}

// Get orders by email
export async function getOrdersByEmail(email) {
  try {
    const ordersCollection = collection(db, 'orders');
    const q = query(ordersCollection, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching orders by email:', error);
    throw error;
  }
}

// Update order status
export async function updateOrderStatus(orderId, status) {
  try {
    const orderRef = doc(db, 'orders', orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error('Error updating order:', error);
    throw error;
  }
}

// Get all orders (for admin)
export async function getAllOrders() {
  try {
    const ordersCollection = collection(db, 'orders');
    const querySnapshot = await getDocs(ordersCollection);

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })).sort((a, b) => b.createdAt - a.createdAt);
  } catch (error) {
    console.error('Error fetching all orders:', error);
    throw error;
  }
}

// Order schema reference (for documentation)
export const orderSchema = {
  id: 'firestore-generated-id',
  // Customer info
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  phone: 'string',

  // Shipping address
  address: 'string',
  city: 'string',
  state: 'string',
  zipCode: 'string',
  country: 'string',

  // Product info
  productId: 'aeroposture-v2',
  productName: 'AeroPosture™ Smart Posture Trainer',
  quantity: 'number',
  price: 49.99,
  size: 'sm|md|lg|xl',

  // Payment info
  paymentIntentId: 'stripe-payment-intent-id',
  amount: 'number (in cents)',

  // Order status
  status: 'pending_payment|paid|processing|shipped|delivered|cancelled',

  // Timestamps
  createdAt: 'Timestamp',
  updatedAt: 'Timestamp',

  // Optional: supplier order info
  supplierOrderId: 'optional-supplier-order-id',
  trackingNumber: 'optional-tracking-number',
};
