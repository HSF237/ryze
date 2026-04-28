'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleAuth = () => {
    // Simple password check (for production, use proper auth)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'admin') {
      setIsAuthenticated(true);
      fetchOrders();
    } else {
      setError('Invalid password');
    }
  };

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch('/api/orders');

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err.message || 'Error loading orders');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <section className="container-page py-14 lg:py-20">
        <div className="max-w-md mx-auto">
          <h1 className="h-display text-3xl font-extrabold mb-6">Admin Access</h1>
          <p className="text-ink-500 mb-6">Enter admin password to view orders</p>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
              className="w-full px-4 py-3 border border-ink-200 rounded-lg focus:outline-none focus:border-brand-500"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              onClick={handleAuth}
              className="w-full px-4 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-600"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-14 lg:py-20">
      <header className="mb-8">
        <Link href="/" className="text-sm text-ink-500 hover:text-ink-900">← Back to store</Link>
        <h1 className="h-display text-3xl sm:text-4xl font-extrabold mt-2">Orders Dashboard</h1>
        <p className="text-ink-500 mt-1">
          All customer orders. Use this to fulfill orders with your supplier.
        </p>
      </header>

      {isLoading ? (
        <div className="text-center py-12">
          <p className="text-ink-500">Loading orders...</p>
        </div>
      ) : error ? (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
          {error}
        </div>
      ) : orders.length === 0 ? (
        <div className="rounded-lg bg-ink-50 border border-ink-200 p-6 text-center">
          <p className="text-ink-500">No orders yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-ink-200">
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-ink-900">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-ink-100 hover:bg-ink-50">
                  <td className="py-3 px-4 font-mono text-sm">{order.id.slice(0, 8)}</td>
                  <td className="py-3 px-4">{order.firstName} {order.lastName}</td>
                  <td className="py-3 px-4 text-sm">{order.email}</td>
                  <td className="py-3 px-4">{order.productName}</td>
                  <td className="py-3 px-4 font-semibold">${order.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === 'paid' ? 'bg-green-100 text-green-800' :
                      order.status === 'pending_payment' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'shipped' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-ink-500">
                    {order.createdAt?.toDate?.().toLocaleDateString() || 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 p-6 bg-ink-50 rounded-lg">
            <h3 className="font-semibold text-ink-900 mb-3">How to fulfill orders:</h3>
            <ol className="space-y-2 text-sm text-ink-700 list-decimal list-inside">
              <li>Check each order's customer details above</li>
              <li>Log into your CJ Dropshipping or AliExpress account</li>
              <li>Place an order for the AeroPosture product using the customer's shipping address</li>
              <li>Update the order status here when the supplier ships</li>
              <li>Share tracking number with customer via email</li>
            </ol>
          </div>
        </div>
      )}
    </section>
  );
}
