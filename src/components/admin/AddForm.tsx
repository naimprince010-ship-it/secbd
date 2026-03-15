'use client';

import { useState } from 'react';
import { addCertificate } from '@/app/actions/admin';
import { AlertCircle, CheckCircle2, Copy, Link as LinkIcon, Lock } from 'lucide-react';

export default function AddForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [refNoLink, setRefNoLink] = useState('');
  
  const [formData, setFormData] = useState({
    ref_no: '',
    name: '',
    passport_no: '',
    position: '',
    start_date: '',
    end_date: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    // Call Server Action
    const res = await addCertificate(formData, formData.password);
    setLoading(false);

    if (res.error) {
      setError(res.error);
    } else {
      setSuccess(true);
      setRefNoLink(`/verify?ref=${formData.ref_no}`);
      // Clear data but preserve password for quick consecutive entries
      setFormData({ 
        ...formData, 
        ref_no: '', 
        name: '', 
        passport_no: '', 
        position: '', 
        start_date: '', 
        end_date: '' 
      });
    }
  };

  const copyToClipboard = () => {
    const fullUrl = `${window.location.origin}/verify?ref=${formData.ref_no || refNoLink.split('=')[1]}`;
    navigator.clipboard.writeText(fullUrl);
    alert('Verification Link Copied!');
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-navy mb-6">Add New Certificate Record</h2>
      
      {success && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl flex flex-col gap-3 animate-in fade-in duration-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 fill-green-100" />
            <span className="font-bold">Record Saved Successfully!</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-green-100 mt-1">
            <LinkIcon size={16} className="text-green-600 flex-shrink-0" />
            <p className="text-xs font-mono truncate flex-1">{refNoLink}</p>
            <button 
              onClick={copyToClipboard}
              className="px-2.5 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md text-xs font-bold transition flex items-center gap-1"
            >
              <Copy size={12} /> Copy
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">Reference No</label>
            <input 
              type="text" name="ref_no" value={formData.ref_no} onChange={handleChange}
              placeholder="e.g. SEC/2026/CONST/084" required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none transition-all"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">Employee Name</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange}
              placeholder="e.g. SOHAG SARDER" required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">Passport Details</label>
            <input 
              type="text" name="passport_no" value={formData.passport_no} onChange={handleChange}
              placeholder="e.g. A21043816" required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">Position / Role</label>
            <input 
              type="text" name="position" value={formData.position} onChange={handleChange}
              placeholder="e.g. Bricklayer" required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">Start Date</label>
            <input 
              type="date" name="start_date" value={formData.start_date} onChange={handleChange} required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-black text-gray-500 uppercase">End Date</label>
            <input 
              type="date" name="end_date" value={formData.end_date} onChange={handleChange} required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <div className="space-y-1 max-w-xs">
            <label className="text-xs font-black text-gray-500 uppercase flex items-center gap-1">
              <Lock size={12} className="text-safety-orange" /> Action Password
            </label>
            <input 
              type="password" name="password" value={formData.password} onChange={handleChange}
              placeholder="Verification password" required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-safety-orange outline-none"
            />
          </div>
        </div>

        <button 
          type="submit" disabled={loading}
          className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2"
        >
          {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'Register Employee Record'}
        </button>
      </form>
    </div>
  );
}
