import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { TabNavigation } from './components/TabNavigation';
import { KeywordTool } from './components/tools/KeywordTool';
import { TitleTool } from './components/tools/TitleTool';
import { HeadingTool } from './components/tools/HeadingTool';
import { LeadTool } from './components/tools/LeadTool';
import { ContentTool } from './components/tools/ContentTool';
import { ContentWithRefTool } from './components/tools/ContentWithRefTool';
import { SummaryTool } from './components/tools/SummaryTool';
import { RewriteTool } from './components/tools/RewriteTool';

function App() {
  const [activeTab, setActiveTab] = useState('keyword');

  const tabs = [
    { id: 'keyword', label: 'キーワード' },
    { id: 'title', label: 'タイトル' },
    { id: 'heading', label: '見出し' },
    { id: 'lead', label: 'リード文' },
    { id: 'content', label: '本文' },
    { id: 'content-ref', label: '本文（リファレンス有）' },
    { id: 'summary', label: 'まとめ' },
    { id: 'rewrite', label: 'リライト' },
  ];

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'keyword':
        return <KeywordTool />;
      case 'title':
        return <TitleTool />;
      case 'heading':
        return <HeadingTool />;
      case 'lead':
        return <LeadTool />;
      case 'content':
        return <ContentTool />;
      case 'content-ref':
        return <ContentWithRefTool />;
      case 'summary':
        return <SummaryTool />;
      case 'rewrite':
        return <RewriteTool />;
      default:
        return <KeywordTool />;
    }
  };

  return (
    <Layout>
      <TabNavigation 
        tabs={tabs} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <div className="p-6">
        {renderActiveTab()}
      </div>
    </Layout>
  );
}

export default App;