import { useState } from 'react';

export default function AiChat() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setResult(data.text || data.message);
    } catch (err) {
      setResult('Error calling AI.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginTop: '20px' }}>
      <h3>AI 프롬프트 실험창</h3>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="AI에게 무엇이든 물어보세요 (예: 글의 톤을 바꿔줘)"
          rows={4}
          style={{ width: '100%', padding: '10px', color: '#333' }}
        />
        <button 
          type="submit" 
          disabled={loading}
          style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
        >
          {loading ? 'AI가 생각 중...' : '생성하기'}
        </button>
      </form>
      {result && (
        <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', backgroundColor: '#f9f9f9', padding: '15px', color: '#333' }}>
          <strong>결과:</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}