export const generateText = async (prompt: string, maxTokens: number = 500) => {
  try {
    const response = await fetch(
      `https://free-gpt-api.dev/api/v1/chat?message=${encodeURIComponent(prompt)}`
    );
    const data = await response.json();
    return data?.reply || '回答が得られませんでした。';
  } catch (error) {
    console.error('Error generating text:', error);
    return '申し訳ありません。テキスト生成中にエラーが発生しました。';
  }
};

export const generateSEOContent = async (type: string, keyword: string, reference?: string) => {
  const prompts: Record<string, string> = {
    suggestions: `以下のキーワードに関連するSEOキーワードを8つ生成してください。箇条書きで出力してください：${keyword}`,
    titles: `以下のキーワードを使用したSEOに最適化された記事タイトルを5つ生成してください。箇条書きで出力してください：${keyword}`,
    headings: `以下のキーワードを使用した記事の見出し構造を生成してください。マークダウン形式で出力してください：${keyword}`,
    lead: `以下のキーワードを使用した記事のリード文（導入部分）を生成してください：${keyword}`,
    content: `以下のキーワードを使用した記事の本文を生成してください。見出し構造を含むマークダウン形式で出力してください：${keyword}`,
    contentWithRef: `以下のキーワードと参考情報を使用して記事の本文を生成してください。見出し構造を含むマークダウン形式で出力してください。\n\nキーワード：${keyword}\n\n参考情報：${reference}`,
    summary: `以下のキーワードを使用した記事のまとめ文を生成してください：${keyword}`,
    rewrite: `以下の文章をSEOに最適化してリライトしてください：${keyword}`,
  };

  return await generateText(prompts[type]);
};
