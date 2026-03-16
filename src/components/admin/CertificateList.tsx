'use client';

import { useState, useEffect } from 'react';
import { getCertificates, deleteCertificate, updateCertificate } from '@/app/actions/admin';
import { Edit2, Trash2, Check, X, AlertCircle, Award, Download } from 'lucide-react';

export default function CertificateList() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Edit State
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [actionPassword, setActionPassword] = useState('');
  
  // Delete Confirmation State
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    setLoading(true);
    const res = await getCertificates();
    setLoading(false);
    if (res.error) {
      setError(res.error);
    } else {
      setCertificates(res.data || []);
    }
  };

  const handleEditClick = (cert: any) => {
    setEditingId(cert.id);
    setEditFormData({ ...cert });
    setActionPassword('');
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (id: number) => {
    if (!actionPassword) {
      alert('Action Password is required to update.');
      return;
    }
    setError('');
    const res = await updateCertificate(id, editFormData, actionPassword);
    if (res.error) {
      setError(res.error);
    } else {
      setEditingId(null);
      loadCertificates(); // Reload
    }
  };

  const handleDelete = async (id: number) => {
    if (!actionPassword) {
      alert('Action Password is required to delete.');
      return;
    }
    setError('');
    const res = await deleteCertificate(id, actionPassword);
    if (res.error) {
      setError(res.error);
    } else {
      setConfirmDeleteId(null);
      setActionPassword('');
      loadCertificates(); // Reload
    }
  };

  const downloadCSV = () => {
    if (certificates.length === 0) return;

    const headers = ['Ref No', 'Employee', 'Position', 'Start Date', 'End Date'];
    const rows = certificates.map(cert => [
      cert.ref_no,
      cert.name,
      cert.position,
      new Date(cert.start_date).toLocaleDateString(),
      new Date(cert.end_date).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(val => `"${val.toString().replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `certificates_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading && certificates.length === 0) {
    return (
      <div className="flex justify-center p-8">
        <div className="w-8 h-8 border-4 border-navy border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-navy flex items-center gap-2">
          <Award className="w-5 h-5 text-safety-orange" />
          Existing Records ({certificates.length})
        </h3>
        <div className="flex items-center gap-4">
          <button 
            onClick={downloadCSV}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-navy transition"
          >
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button 
            onClick={loadCertificates}
            className="text-xs font-bold text-gray-500 hover:text-navy transition"
          >
            Refresh
          </button>
        </div>
      </div>

      {error && (
        <div className="m-4 bg-red-50 border border-red-100 text-red-700 p-4 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-semibold">{error}</p>
        </div>
      )}

      {certificates.length === 0 ? (
        <div className="p-8 text-center text-gray-400 text-sm">
          No certificate records found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="p-4 text-xs font-black text-gray-500 uppercase">Ref No</th>
                <th className="p-4 text-xs font-black text-gray-500 uppercase">Employee</th>
                <th className="p-4 text-xs font-black text-gray-500 uppercase">Position</th>
                <th className="p-4 text-xs font-black text-gray-500 uppercase">Start Date</th>
                <th className="p-4 text-xs font-black text-gray-500 uppercase">End Date</th>
                <th className="p-4 text-xs font-black text-gray-500 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {certificates.map((cert) => {
                const isEditing = editingId === cert.id;
                
                return (
                  <tr key={cert.id} className="hover:bg-gray-50/30 transition-colors">
                    <td className="p-4 text-sm font-mono text-gray-800">
                      {isEditing ? (
                        <input 
                          type="text" name="ref_no" value={editFormData.ref_no} onChange={handleEditChange}
                          className="p-1 border rounded bg-white w-full font-mono text-xs"
                        />
                      ) : cert.ref_no}
                    </td>
                    <td className="p-4 text-sm font-bold text-navy">
                      {isEditing ? (
                        <input 
                          type="text" name="name" value={editFormData.name} onChange={handleEditChange}
                          className="p-1 border rounded bg-white w-full font-bold"
                        />
                      ) : cert.name}
                    </td>
                    <td className="p-4 text-sm text-gray-600">
                      {isEditing ? (
                        <select 
                          name="position" value={editFormData.position} onChange={handleEditChange}
                          className="p-1 border rounded bg-white w-full text-xs"
                        >
                          <option value="Bricklayer (Mason)">Bricklayer (Mason)</option>
                          <option value="Electrician">Electrician</option>
                          <option value="Plumber">Plumber</option>
                          <option value="Carpenter (Kathmistri)">Carpenter (Kathmistri)</option>
                          <option value="Welder">Welder</option>
                          <option value="Painter">Painter</option>
                        </select>
                      ) : cert.position}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {isEditing ? (
                        <input 
                          type="date" name="start_date" value={editFormData.start_date.split('T')[0]} onChange={handleEditChange}
                          className="p-1 border rounded bg-white text-xs"
                        />
                      ) : new Date(cert.start_date).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-sm text-gray-500">
                      {isEditing ? (
                        <input 
                          type="date" name="end_date" value={editFormData.end_date.split('T')[0]} onChange={handleEditChange}
                          className="p-1 border rounded bg-white text-xs"
                        />
                      ) : new Date(cert.end_date).toLocaleDateString()}
                    </td>
                    <td className="p-4 text-right">
                      {isEditing ? (
                        <div className="flex items-center gap-2 justify-end">
                          <input 
                            type="password" placeholder="Password" value={actionPassword} onChange={(e) => setActionPassword(e.target.value)}
                            className="p-1 border rounded bg-white text-xs w-20"
                          />
                          <button onClick={() => handleUpdate(cert.id)} className="p-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md">
                            <Check size={14} />
                          </button>
                          <button onClick={() => setEditingId(null)} className="p-1.5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-md">
                            <X size={14} />
                          </button>
                        </div>
                      ) : confirmDeleteId === cert.id ? (
                        <div className="flex items-center gap-2 justify-end">
                          <input 
                            type="password" placeholder="Pass" value={actionPassword} onChange={(e) => setActionPassword(e.target.value)}
                            className="p-1 border rounded bg-white text-xs w-16"
                          />
                          <button onClick={() => handleDelete(cert.id)} className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md text-xs font-bold">
                            Del
                          </button>
                          <button onClick={() => setConfirmDeleteId(null)} className="p-1.5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-md">
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 justify-end">
                          <button 
                            onClick={() => handleEditClick(cert)}
                            className="p-1.5 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => { setConfirmDeleteId(cert.id); setActionPassword(''); }}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
