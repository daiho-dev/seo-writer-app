import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateHeadings } from '../../utils/seo-functions';

export const HeadingTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const headings = generateHeadings(keyword);
      setResults(headings);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEO見出し生成</h2>
        <p className="text-gray-600 mb-4">
          キーワードを入力して、検索エンジンと読者に最適化された見出し構造を生成します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: プログラミング 初心者"
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
              見出し生成
            </Button>
          </div>
        </form>
      </Card>
      
      {results.length > 0 && (
        <Card>
          <h3 className="text-md font-medium text-gray-900 mb-3">見出し構造</h3>
          <div className="p-4 bg-gray-50 rounded border border-gray-200">
            {results.map((heading, index) => (
              <div key={index} className={`${heading.startsWith('##') ? 'ml-4 mt-2' : 'mt-4 font-bold'} text-gray-800`}>
                {heading}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};