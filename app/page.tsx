'use client';

import { useState } from 'react';
import { pingIgnition } from './lib/ignitionApi';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    setLoading(true);
    try {
      const result = await pingIgnition(); // result = { message: "hello" }
      setMessage(result.message ?? 'No message received');
    } catch (err) {
      console.error('Ignition API error:', err);
      setMessage('Error contacting Ignition');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ignition + React Demo</h1>

      <button
        onClick={handlePing}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ping Ignition GetApi
      </button>

      <p className="mt-4 text-lg">{loading ? 'Loading...' : message}</p>

      <div className="mt-10 border rounded-md overflow-hidden h-[600px]">
        <iframe
          src="http://localhost:8088/data/perspective/client/PaintTest/alarms"
          className="w-full h-[600px] rounded-md border"
          title="Ignition Perspective Client"
        />
      </div>
    </main>
  );
}
