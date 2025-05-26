import { generateSEOContent } from './api';

export const generateSuggestions = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) return [];
  const result = await generateSEOContent('suggestions', keyword);
  return result.split('\n').filter(line => line.trim());
};

export const generateTitles = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) return [];
  const result = await generateSEOContent('titles', keyword);
  return result.split('\n').filter(line => line.trim());
};

export const generateHeadings = async (keyword: string): Promise<string[]> => {
  if (!keyword.trim()) return [];
  const result = await generateSEOContent('headings', keyword);
  return result.split('\n').filter(line => line.trim());
};

export const generateLeadParagraph = async (keyword: string): Promise<string> => {
  if (!keyword.trim()) return '';
  return await generateSEOContent('lead', keyword);
};

export const generateContent = async (keyword: string): Promise<string> => {
  if (!keyword.trim()) return '';
  return await generateSEOContent('content', keyword);
};

export const generateContentWithReference = async (keyword: string, reference: string): Promise<string> => {
  if (!keyword.trim()) return '';
  return await generateSEOContent('contentWithRef', keyword, reference);
};

export const generateSummary = async (headings: string, keywords: string): Promise<string> => {
  if (!headings.trim()) return '';
  const prompt = `見出し構成:\n${headings}\n\nキーワード:${keywords}`;
  return await generateSEOContent('summary', prompt);
};

export const rewriteContent = async (content: string): Promise<string> => {
  if (!content.trim()) return '';
  return await generateSEOContent('rewrite', content);
};