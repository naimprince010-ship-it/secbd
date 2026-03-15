'use client';

import { useState } from 'react';
import { verifyCertificate } from '@/app/actions/verify';

interface VerifyFormProps {
  onResult: (result: any) => void;
  onLoading: (isLoading: boolean) => void;
  onError: (error: string) => void;
}

export default function VerifyForm({ onResult, onLoading, onError }: VerifyFormProps) {
  const [refNo, setRefNo] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onError('');
    onResult(null);
    onLoading(true);

    try {
      const res = await verifyCertificate(refNo);
      onLoading(false);

      if (res.error) {
        onError(res.error);
      } else {
        onResult(res.data);
      }
    } catch (err) {
      onLoading(false);
      onError('An unexpected error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <label htmlFor="refNo" className="text-sm font-medium text-gray-700">
          Certificate Reference Number
        </label>
        <div className="flex gap-2">
          <input
            id="refNo"
            type="text"
            value={refNo}
            onChange={(e) => setRefNo(e.target.value)}
            placeholder="e.g., SEC/2026/CONST/084"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow transition duration-150"
          >
            Verify
          </button>
        </div>
      </div>
    </form>
  );
}
