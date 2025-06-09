const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const BOT_TOKEN = '7981650250:AAFDLKiyKdHPMA8i53-nqMnInbajI3cBwsM'; // توكن البوت
const CHAT_ID = '1778771084'; // معرفك الشخصي

async function sendPhoto(photoPath) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;

  const form = new FormData();
  form.append('chat_id', CHAT_ID);
  form.append('photo', fs.createReadStream(photoPath));

  try {
    await axios.post(url, form, { headers: form.getHeaders() });
    console.log('✔️ Photo sent to Telegram');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

sendPhoto('face.jpg');
