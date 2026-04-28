// Stripe configuration — lazy init so the constructor never runs at build time
import Stripe from 'stripe';

let _stripe = null;

export function getStripeInstance() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }
  return _stripe;
}

// Helper function to create a payment intent
export async function createPaymentIntent(amount, metadata = {}) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata,
    });
    return paymentIntent;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}

// Helper function to confirm payment
export async function confirmPayment(paymentIntentId) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return paymentIntent;
  } catch (error) {
    console.error('Error confirming payment:', error);
    throw error;
  }
}
