import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateTitles } from '../../utils/seo-functions';

export const TitleTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    // 実際のプロダクションでは非同期APIコールを行います
    setTimeout(() => {
      const titles = generateTitles(keyword);
      setResults(titles);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEOタイトル生成</h2>
        <p className="text-gray-600 mb-4">
          キーワードを入力して、クリック率の高いSEO最適化されたタイトル候補を生成します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: 筋トレ 効果"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              isLoading={isLoading}
              disabled={!keyword.trim() || isLoading}
            >
              タイトル生成
            </Button>
          </div>
        </form>
      </Card>
      
      {results.length > 0 && (
        <Card>
          <h3 className="text-md font-medium text-gray-900 mb-3">タイトル候補</h3>
          <ul className="space-y-3">
            {results.map((title, index) => (
              <li 
                key={index}
                className="p-3 bg-gray-50 rounded border border-gray-200 text-gray-800 font-medium"
              >
                {title}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};