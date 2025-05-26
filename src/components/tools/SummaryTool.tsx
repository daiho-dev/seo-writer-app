import React, { useState } from 'react';
import { TextArea } from '../ui/TextArea';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateSummary } from '../../utils/seo-functions';

export const SummaryTool: React.FC = () => {
  const [headings, setHeadings] = useState('');
  const [keywords, setKeywords] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headings.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const summary = generateSummary(headings, keywords);
      setResult(summary);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEOまとめ文生成</h2>
        <p className="text-gray-600 mb-4">
          記事の見出し構成とキーワードを入力して、記事の締めくくりに最適なまとめ文を生成します。読者のアクションを促し、記事の価値を再確認させる効果的なまとめを作成します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextArea
            label="見出し構成"
            placeholder="# メインタイトル&#13;&#10;## サブタイトル1&#13;&#10;## サブタイトル2"
            value={headings}
            onChange={(e) => setHeadings(e.target.value)}
            rows={6}
            required
          />
          
          <Input
            label="含めたいキーワード（カンマ区切りで複数入力可）"
            placeholder="例: 時間管理,生産性向上,タスク管理"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              isLoading={isLoading}
              disabled={!headings.trim() || isLoading}
            >
              まとめ文生成
            </Button>
          </div>
        </form>
      </Card>
      
      {result && (
        <ResultBox result={result} title="生成されたまとめ文" />
      )}
    </div>
  );
};