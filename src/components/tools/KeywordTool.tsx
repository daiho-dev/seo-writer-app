import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ResultBox } from '../ui/ResultBox';
import { generateSuggestions } from '../../utils/seo-functions';

export const KeywordTool: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;

    setIsLoading(true);
    
    // 実際のプロダクションでは非同期APIコールを行います
    setTimeout(() => {
      const suggestions = generateSuggestions(keyword);
      setResults(suggestions);
      setIsLoading(false);
    }, 800); // 処理感を出すための遅延
  };

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-medium text-gray-900 mb-4">キーワードサジェスト</h2>
        <p className="text-gray-600 mb-4">
          キーワードを入力して、SEOに効果的なサジェストキーワードを取得しましょう。
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="キーワード"
            placeholder="例: SEO対策"
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
              サジェスト取得
            </Button>
          </div>
        </form>
      </Card>
      
      {results.length > 0 && (
        <Card>
          <h3 className="text-md font-medium text-gray-900 mb-3">キーワードサジェスト結果</h3>
          <ul className="space-y-2">
            {results.map((suggestion, index) => (
              <li 
                key={index}
                className="p-2 bg-gray-50 rounded border border-gray-200 text-gray-800"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};