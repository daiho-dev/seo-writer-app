import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateLeadParagraph } from '../../utils/seo-functions';

export const LeadTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const leadParagraph = generateLeadParagraph(keyword);
      setResult(leadParagraph);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEOリード文生成</h2>
        <p className="text-gray-600 mb-4">
          キーワードを入力して、記事の冒頭に最適なリード文を生成します。読者の注目を集め、検索エンジンにも評価される導入文を作成します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: 副業 始め方"
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
              リード文生成
            </Button>
          </div>
        </form>
      </Card>
      
      {result && (
        <ResultBox result={result} title="生成されたリード文" />
      )}
    </div>
  );
};