'use client';

import { CheckCircle, Calendar, User, Briefcase, FileText } from 'lucide-react';

interface CertificateData {
  name: string;
  passport_no: string;
  position: string;
  start_date: string;
  end_date: string;
  status: string;
  ref_no: string;
}

interface VerifyCardProps {
  data: CertificateData;
}

export default function VerifyCard({ data }: VerifyCardProps) {
  // Helper to format date if needed
  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: '2-digit' 
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden mt-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-6 text-center text-white">
        <h1 className="text-xl font-bold tracking-wider">
          SHARIATPUR ENGINEERS & CONSULTANT
        </h1>
        <p className="text-xs text-blue-200 mt-1 uppercase">
          Experience Certificate Verification
        </p>
      </div>

      {/* Verified Badge */}
      <div className="flex justify-center -mt-5">
        <div className="flex items-center gap-1.5 bg-green-50 z-10 border border-green-200 text-green-700 px-4 py-1.5 rounded-full shadow-md font-semibold text-sm">
          <CheckCircle className="w-4 h-4 fill-green-100" />
          VERIFIED
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="text-center mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-widest">
            Reference Number
          </p>
          <p className="text-lg font-mono font-bold text-gray-800 tracking-wide mt-0.5">
            {data.ref_no}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-gray-100 py-6">
          <DetailItem
            icon={<User className="text-blue-600" size={18} />}
            label="Employee Name"
            value={data.name}
          />
          <DetailItem
            icon={<FileText className="text-blue-600" size={18} />}
            label="Passport No"
            value={data.passport_no}
          />
          <DetailItem
            icon={<Briefcase className="text-blue-600" size={18} />}
            label="Role / Position"
            value={data.position}
          />
          <DetailItem
            icon={<Calendar className="text-blue-600" size={18} />}
            label="Tenure / Duration"
            value={`${formatDate(data.start_date)} to ${formatDate(data.end_date)}`}
          />
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-md text-xs font-medium">
            Status: {data.status}
          </div>
          <p className="text-[10px] text-gray-400 mt-4">
            This verification is issued electronically by Shariatpur Engineers & Consultant.
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2.5 bg-blue-50 rounded-lg flex-shrink-0">{icon}</div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-sm font-semibold text-gray-900 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
