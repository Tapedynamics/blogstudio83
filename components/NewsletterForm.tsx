'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || '¡Suscripción completada!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Error durante la suscripción');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Error de conexión. Inténtalo más tarde.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#faf8f3] to-[#f4f0e8] rounded-lg p-6 sm:p-8 border border-[#e7e3d9]">
      <div className="text-center mb-6">
        <div className="mb-3 text-3xl sm:text-4xl">✨</div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#2d3436]">
          Únete a la Revolución
        </h3>
        <p className="text-sm sm:text-base text-[#6b7280] max-w-xl mx-auto">
          Recibe contenidos exclusivos, prácticas de belleza consciente y verdades que no encontrarás en ninguna otra parte.
          Directamente en tu bandeja de entrada.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-full border-2 border-[#e7e3d9] bg-white text-[#2d3436] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#7d9d7f] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-base"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-[#7d9d7f] text-white rounded-full font-semibold hover:bg-[#5d7d5f] hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base shadow-md"
          >
            {status === 'loading' ? 'Enviando...' : 'Suscríbete'}
          </button>
        </div>

        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm text-center ${
              status === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message}
          </div>
        )}

        <p className="mt-4 text-xs text-center text-[#6b7280]">
          Al suscribirte, aceptas recibir emails de Conscientemente Bellos.
          Puedes darte de baja en cualquier momento.
        </p>
      </form>
    </div>
  );
}
