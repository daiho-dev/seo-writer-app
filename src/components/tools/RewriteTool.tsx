import React, { useState } from 'react';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { rewriteContent } from '../../utils/seo-functions';

export const RewriteTool: React.FC = () => {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsLoading(true);
    
    setTimeout(() => {
      const rewrittenContent = rewriteContent(content);
      setResult(rewrittenContent);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">SEOリライト</h2>
        <p className="text-gray-600 mb-4">
          既存の文章を入力して、SEOに最適化されたより充実した内容にリライトします。キーワード密度、文章構造、情報量などを改善します。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextArea
            label="リライトする文章"
            placeholder="リライトしたい文章を入力してください..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            required
          />
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              isLoading={isLoading}
              disabled={!content.trim() || isLoading}
            >
              リライト実行
            </Button>
          </div>
        </form>
      </Card>
      
      {result && (
        <ResultBox result={result} title="リライト結果" />
      )}
    </div>
  );
};