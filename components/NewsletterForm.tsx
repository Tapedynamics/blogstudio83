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
        setMessage(data.message || 'Iscrizione completata!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Errore durante l\'iscrizione');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Errore di connessione. Riprova più tardi.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-[--accent-light] to-[--accent] rounded-lg p-6 sm:p-8 border border-[--border]">
      <div className="text-center mb-6">
        <div className="mb-3 text-3xl sm:text-4xl">✨</div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[--foreground]">
          Unisciti alla Rivoluzione
        </h3>
        <p className="text-sm sm:text-base text-[--text-muted] max-w-xl mx-auto">
          Ricevi contenuti esclusivi, pratiche di bellezza consapevole e verità che non troverai altrove.
          Direttamente nella tua casella di posta.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email"
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-full border-2 border-[--border] bg-white text-[--foreground] placeholder:text-[--text-muted] focus:outline-none focus:ring-2 focus:ring-[--primary] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed text-base"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-[--primary] text-white rounded-full font-semibold hover:bg-[--primary-dark] hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-base shadow-md"
          >
            {status === 'loading' ? 'Invio...' : 'Iscriviti'}
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

        <p className="mt-4 text-xs text-center text-[--text-muted]">
          Iscrivendoti, accetti di ricevere email da Consapevolmente Belli.
          Puoi disiscriverti in qualsiasi momento.
        </p>
      </form>
    </div>
  );
}
