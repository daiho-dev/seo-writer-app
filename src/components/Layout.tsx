import React, { ReactNode } from 'react';
import { PenLine } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PenLine className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">SEO ライティングツール</h1>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 max-w-6xl">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-500 text-sm">
            SEO ライティングツール &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};