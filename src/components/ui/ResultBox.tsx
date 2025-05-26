import React from 'react';
import { Copy } from 'lucide-react';

interface ResultBoxProps {
  result: string;
  title?: string;
}

export const ResultBox: React.FC<ResultBoxProps> = ({ result, title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="mt-6 border border-gray-200 rounded-md bg-gray-50">
      {title && (
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-100 rounded-t-md">
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
      )}
      <div className="relative p-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-normal leading-relaxed">
          {result || '結果がここに表示されます...'}
        </pre>
        {result && (
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-1.5 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors"
            title="コピー"
          >
            <Copy size={16} />
          </button>
        )}
      </div>
    </div>
  );
};