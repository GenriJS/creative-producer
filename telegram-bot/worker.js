export default {
    async fetch(request, env) {
      // CORS если нужно
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        });
      }
  
      if (request.method !== 'POST') {
        return new Response('Данные формы не были отправлены.', { status: 200 });
      }
  
      const formData = await request.formData();
  
      const name     = formData.get('name')     || '';
      const contact  = formData.get('contact')  || '';
      const message  = formData.get('message')  || '';
      const workType = formData.get('workType') || '';
  
      let text = `Тип сотрудничества: ${workType}\nИмя: ${name}\nКонтакт: ${contact}`;
      if (message) text += `\nСообщение: ${message}`;
  
      const BOT_TOKEN = env.BOT_TOKEN;
      const CHAT_ID   = env.CHAT_ID;
  
      const file = formData.get('file');
      let ok = false;
  
      if (file && file.size > 0) {
        const tgForm = new FormData();
        tgForm.append('chat_id', CHAT_ID);
        tgForm.append('caption', text);
        tgForm.append('document', file, file.name);
  
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
          method: 'POST',
          body: tgForm
        });
        ok = res.ok;
      } else {
        const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: CHAT_ID, text })
        });
        ok = res.ok;
      }
  
      return new Response(
        ok ? 'Сообщение успешно отправлено!' : 'Ошибка отправки сообщения.',
        {
          status: 200,
          headers: { 'Access-Control-Allow-Origin': '*' }
        }
      );
    }
  };