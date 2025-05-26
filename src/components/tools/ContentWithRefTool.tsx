import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateContentWithReference } from '../../utils/seo-functions';

export const ContentWithRefTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [reference, setReference] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const content = generateContentWithReference(keyword, reference);
      setResult(content);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">参照付きSEO本文生成</h2>
        <p className="text-gray-600 mb-4">
          キーワードと参照文を入力して、参照情報を基にSEOに最適化された記事本文を生成します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: クラウドファンディング"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            required
          />
          
          <TextArea
            label="参照情報"
            placeholder="参考にしたい情報や引用したい文章を入力してください。この情報を基に本文が生成されます。"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            rows={6}
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              isLoading={isLoading}
              disabled={!keyword.trim() || isLoading}
            >
              参照付き本文生成
            </Button>
          </div>
        </form>
      </Card>
      
      {result && (
        <ResultBox result={result} title="参照情報を基に生成された本文" />
      )}
    </div>
  );
};