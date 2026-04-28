// API route for creating and managing orders
import { NextResponse } from 'next/server';
import { getStripeInstance } from '@/lib/stripe';
import { createOrder, updateOrderStatus, getAllOrders } from '@/lib/orders';

// POST: Create a new order
export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      zipCode,
      country,
      productId,
      productName,
      quantity,
      price,
      size,
      paymentMethodId,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !address || !price || !quantity) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate total amount
    const totalAmount = price * quantity;

    // Create payment intent with Stripe
    const paymentIntent = await getStripeInstance().paymentIntents.create({
      amount: Math.round(totalAmount * 100), // Convert to cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
      metadata: {
        firstName,
        lastName,
        email,
      },
    });

    // If payment succeeds, create order
    if (paymentIntent.status === 'succeeded') {
      const orderData = {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zipCode,
        country,
        productId,
        productName,
        quantity,
        price,
        size,
        paymentIntentId: paymentIntent.id,
        amount: totalAmount,
        status: 'paid',
      };

      const order = await createOrder(orderData);

      // TODO: Send confirmation email here
      // TODO: Log order to supplier system

      return NextResponse.json(
        {
          success: true,
          message: 'Order created successfully',
          orderId: order.id,
          paymentIntent,
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { error: 'Payment failed', paymentIntent },
      { status: 402 }
    );
  } catch (error) {
    console.error('Order API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

// GET: Fetch orders (admin only)
export async function GET(request) {
  try {
    // TODO: Add auth check to ensure only admin can access
    const orders = await getAllOrders();
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error('Fetch orders error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
