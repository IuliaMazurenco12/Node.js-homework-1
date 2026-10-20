
const fs = require('fs');
const path = require('path');


const LOG_FILE = path.join(__dirname, 'log.txt');


function logMessage(message) {
  // Добавляем дату и время, чтобы было видно, когда записано сообщение
  const time = new Date().toLocaleString();
  const line = `[${time}] ${message}\n`;


  fs.appendFile(LOG_FILE, line, (err) => {
    if (err) {
      console.error('Ошибка записи в лог:', err.message);
      return;
    }
    console.log('Записано в лог:', message);
  });
}


module.exports = { logMessage };