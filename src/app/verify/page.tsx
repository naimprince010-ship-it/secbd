'use client';

import { useState } from 'react';
import VerifyForm from '@/components/verify/VerifyForm';
import VerifyCard from '@/components/verify/VerifyCard';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function VerifyPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header section with logo/icon */}
      <div className="text-center mb-10 max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-600 rounded-2xl shadow-md">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Verify Certificate
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter the reference number to verify the authenticity of an experience certificate.
        </p>
      </div>

      {/* Search Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <VerifyForm 
          onResult={setResult} 
          onLoading={setLoading} 
          onError={setError} 
        />
      </div>

      {/* States */}
      <div className="mt-8 w-full max-w-2xl flex justify-center">
        {loading && (
          <div className="flex flex-col items-center gap-3 mt-10">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500 font-medium tracking-wide">Verifying...</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg shadow-sm max-w-md mx-auto mt-6">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {result && !loading && !error && (
          <VerifyCard data={result} />
        )}
      </div>

      {/* Layout footer or disclaimer */}
      <div className="mt-auto pt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Shariatpur Engineers & Consultant. All rights reserved.
      </div>
    </div>
  );
}
