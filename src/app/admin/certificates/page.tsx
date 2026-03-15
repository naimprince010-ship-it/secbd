'use client';

import AddForm from '@/components/admin/AddForm';
import { Award } from 'lucide-react';

export default function CertificatesAdminPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-black text-navy mb-2 flex items-center gap-2">
          <Award className="w-8 h-8 text-safety-orange" />
          Manage Certificates
        </h1>
        <p className="text-gray-500">Add and manage employee experience certificate records securely.</p>
      </div>

      <div className="mt-8">
        <AddForm />
      </div>
    </div>
  );
}
