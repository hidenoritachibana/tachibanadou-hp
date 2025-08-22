import { FileText, ClipboardList, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardPage = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 仮の JSON データ
  const jsonData = {
    quoteEnabled: true,
    invoiceEnabled: true,
    receiptEnabled: false,
        profileEnabled: true,

  };

  const actions = [
    {
      title: '見積書作成',
      description: '見積書を作成します',
      icon: <ClipboardList className="w-8 h-8 text-green-600" />,
      link: '/quote/create',
      disabled: !jsonData.quoteEnabled,
    },
    {
      title: '請求書作成',
      description: '請求書を作成します',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      link: '/invoice/create',
      disabled: !jsonData.invoiceEnabled,
    },
    {
      title: '領収書作成',
      description: '機能追加予定',
      icon: <Receipt className="w-8 h-8 text-yellow-600" />,
      link: '/receipt/create',
      disabled: !jsonData.receiptEnabled,
    },
  ];

  return (

      <div className="bg-gray-100 py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">ダッシュボード</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        </div>
      </div>
  );
};

export default DashboardPage;