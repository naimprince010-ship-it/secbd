'use client';

import { useState } from 'react';
import AddForm from '@/components/admin/AddForm';
import CertificateList from '@/components/admin/CertificateList';
import { Award } from 'lucide-react';

export default function CertificatesAdminPage() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-black text-navy mb-2 flex items-center gap-2">
          <Award className="w-8 h-8 text-safety-orange" />
          Manage Certificates
        </h1>
        <p className="text-gray-500">Add and manage employee experience certificate records securely.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 mt-8">
        <AddForm onSuccess={handleRefresh} />
        <CertificateList key={refreshTrigger} />
      </div>
    </div>
  );
}
