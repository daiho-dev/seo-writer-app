import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateContent } from '../../utils/seo-functions';

export const ContentTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const content = generateContent(keyword);
      setResult(content);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEO本文生成</h2>
        <p className="text-gray-600 mb-4">
          キーワードを入力して、SEOに最適化された記事本文の構造を生成します。見出し、段落、リストなどを含む完全な本文フレームワークを提供します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: 投資 初心者"
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
              本文生成
            </Button>
          </div>
        </form>
      </Card>
      
      {result && (
        <ResultBox result={result} title="生成された本文" />
      )}
    </div>
  );
};