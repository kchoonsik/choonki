# AI 샘플 실험실 (Python API 연동)

이 페이지에서는 실제로 **Gemini API**를 호출하여 AI와 대화하거나 프롬프트를 테스트해 볼 수 있습니다.

<div id="ai-chat" style="padding: 20px; border: 1px solid #ccc; border-radius: 10px; margin-top: 20px;">
  <h3 style="color: white;">AI 프롬프트 실험창</h3>
  <textarea id="prompt-input" placeholder="AI에게 무엇이든 물어보세요 (예: 글의 톤을 바꿔줘)" rows="4" style="width: 100%; padding: 10px; margin-top: 10px; color: black;"></textarea>
  <button onclick="sendPrompt()" id="submit-btn" style="margin-top: 10px; padding: 10px 20px; background-color: #3f51b5; color: white; border: none; border-radius: 5px; cursor: pointer;">생성하기</button>
  <div id="result-area" style="margin-top: 20px; white-space: pre-wrap; background-color: #222; padding: 15px; display: none;">
    <strong>결과:</strong>
    <p id="result-text" style="color: #ddd;"></p>
  </div>
</div>

<script>
async function sendPrompt() {
  const input = document.getElementById('prompt-input').value;
  const btn = document.getElementById('submit-btn');
  const resultArea = document.getElementById('result-area');
  const resultText = document.getElementById('result-text');

  if (!input) return alert('프롬프트를 입력하세요!');

  btn.innerText = 'AI가 생각 중...';
  btn.disabled = true;

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });
    const data = await res.json();
    resultArea.style.display = 'block';
    resultText.innerText = data.text || data.message;
  } catch (err) {
    resultArea.style.display = 'block';
    resultText.innerText = '에러 발생: ' + err.message;
  } finally {
    btn.innerText = '생성하기';
    btn.disabled = false;
  }
}
</script>
