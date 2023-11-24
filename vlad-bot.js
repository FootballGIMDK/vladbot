const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling: true});

const QUESTS = 8;
let userStates = {};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  userStates[chatId] = { questNumber: 1 };
  bot.sendMessage(chatId, `🌟 Вітаємо, наш маленький грішник! Ласкаво просимо до пригоди, наче з кіно! 🌟

🎉 Твої 34 – це не просто цифра, це твоя головна роль у пригоді, що нагадує сюжет відомого трилера! 🏙️🎬

💥 Погодься, твоє життя – немов сценарій, повний таємниць, викликів та гріхів. Сьогодні ти станеш головним героєм своєї історії, відчувши, в деякій мірі, вплив гріхів, подібно до фільму "Se7en".

🔥 Перед тобою постануть 7 випробувань. Кожен крок – це можливість відчути себе у ролі героя, гідного головної ролі у фільмі. 🔥

💡 Знай: Це твоя історія, де кожен кожен крок робить тебе ближчим до загадкового подарунку. Відчуй кожний момент та виконуй всі завдання, навіть якщо маєш певні сумніви!

🚀 Тисни 'Я трішки грішник!=)' і розпочни свою пригоду!`, {
    reply_markup: {
      keyboard: [[{ text: "Я трішки грішник!" }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === "Я трішки грішник!" || (userStates[chatId] && userStates[chatId].questNumber <= QUESTS)) {
    handleQuest(chatId, userStates[chatId].questNumber, msg.text);
  }
});

function handleQuest(chatId, questNumber, inputText) {
  switch (questNumber) {
    case 1:
      startQuest(chatId, inputText);
    break;
    case 2:
      silverStart(chatId, inputText);
    break;
    case 3:
      bookStore(chatId, inputText);
    break;
    case 4:
      sexshop(chatId, inputText);
    break;
    case 5:
      sexshop2(chatId, inputText);
    break;
    case 6:
      drunkBerry(chatId, inputText);
    break;
    case 7:
      drunkBerry2(chatId, inputText);
    break;
    case 8:
      final(chatId, inputText);
      break;
    default:
    bot.sendMessage(chatId, `Вітаємо тебе❤️! 34 - це тільки початок! Все попереду!`);
    break;
  }
}

function startQuest(chatId, inputText) {
  const startMsg1 = "І не кажи, що інколи ти не відкладаєш щось на завтра, чи не хочеш працювати тоді, коли отримуєш повідомлення 'hi vlad' у зумі=). Як би ти не хотів полінуватись та відкласти свої таски на понеділок - сьогодні ти повинен відвідати місце, яке єдине в Києві змушує тебе бороти свою лінь. Якщо здогадався, де тебе чекають - вписуй назву локації!";
  
  if (inputText.toLowerCase() === "silver breeze") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Звісно, а як же інакше, руки в ноги і гайда на роботу! Субота - а ти ще ні пул-реквеста не зробив, ні Балі не відписав=) Натисни кнопку 'Я тут', коли будеш в Сільвері", {
      reply_markup: {
        keyboard: [[{ text: "Я тут" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function silverStart(chatId, inputText) {
  const startMsg1 = `Якщо ти вже пробрався через охорону, то тут полінуватись уже не вдасться. Тобі буде необхідно пройтись по деяких кімнатах, і знайти ключик, що відкриє тобі 6ти-значний код, що дозволить тобі продовжити нашу подорож. Для початку, знайди рум 601 та знайди предмет, що допоможе тобі з розгадкою. Коли знайдеш шестизначний код - введеш його у відповідь на цей меседж.

  Наблизитись до розгадки тобі допоможе знамените на увесь світ зображення, датоване 1932 роком, де абсолютно безстрашні люди займаються абсолютно звичайною справою, якою б ти, до прикладу, займався б в цей час в будній день`;
  
  if (inputText.toLowerCase() === "535490") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Найс! Думали, що ти вже тут через свою лінь здасишся=) Та все ж, ми не впевнені, що ти подолав цей гріх. Здається, тобі пора спуститись, так би мовити, фром зе скай ту зе ЛЕНД та відвідати місце, де ти знайдеш потрібну тобі КНИГУ, що підкаже, куди рухатись далі", {
      reply_markup: {
        keyboard: [[{ text: "Усі вниз" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function bookStore(chatId, inputText) {
  const startMsg1 = "Потрібний тобі артефакт у тебе в руках? Якщо так, то придивись уважно до деталей, юний Декстер, та знайди і впиши адресу наступної локації українською без розділових знаків. При пошуку врахуй свій вік";
  
  if (inputText.toLowerCase() === "верхній вал 42в") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Запригуй в авто, викликай таксі, замовляй самокат або біжи туди)) ти ж любиш бігати))) Головне - не злись на затори, холод і твоїх трішки крейзі друзів, що не двють тобі відпочивати. Бо гнів - це твій наступний гріх, який на локації ми спробуємо трішки побороти. Не продовжуй поки далі - натисни кнопку, коли станеш трішки спокійніший)", {
      reply_markup: {
        keyboard: [[{ text: "Я дзен! Я в рівновазі! Я пелюстка сакури, що відірвалась, і летить на теплому вітрі!)))" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function sexshop(chatId, inputText) {
  const startMsg1 = "Ага, ти тепер спокійний ментально, але ж ми помітили той проблиск в очах, який промайнув, коли ти в коробці намагався вгадати, що ж це фалічний предмет, наш маленький хтивий друг. Твоя наступна локація - це місце, де люди знаходять доповнення для своїх потаємних бажань. І якщо попередня локація була верхньою, то тут змінюється роль)) Головне, щоб ти на шляху не зустрів жодного нещастя, Лемоні) Коли здогадаєшся - вводь адресу локації)";
  
  if (inputText.toLowerCase() === "нижній вал 33") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Готуйся трішки почервоніти, адже тобі потрібно вийти з твоєї локації не з пустими руками) Придбай на локації щось екстравагантне у свій хтивий арсенал, повертайся до своїх друзів та тисни кнопку нижче. Коли вони переконаються, що ти таки ще той хтивий казанова - отримаєш код, який тебе поведе далі", {
      reply_markup: {
        keyboard: [[{ text: "Ну з закупками можна і на Щекавицю" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function sexshop2(chatId, inputText) {
  const startMsg1 = `Вводь отриманий код, пустун)))`;
  
  if (inputText.toLowerCase() === "69") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Добре, добре)) Сподіваюсь, ти не всі гроші витратив в магазині спокуси. Точніше, точно не всі, бо гріх жадоба теж не дрімає. Чи може хочеш сказати, що ти не жадібний? Доведи тоді це - закинь будь-який збір 5000 тисяч гривень. Але якщо хочеш трохи зекономити - запитай друзів, як ти можеш це зробити) Тисни кнопку 'русня не люди' коли переказ тої чи іншої суми буде здійснено", {
      reply_markup: {
        keyboard: [[{ text: "Русня не люди" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function drunkBerry(chatId, inputText) {
  const startMsg1 = `Зайшов ти вже далеченько. Мабуть, гордишся собою, що ти такий розумний. Як ти гордишся тим, що в планці стоїш довго чи тим що не вживаєш алкоголь... Але гординя теж до добра не веде, подивимось який ти гордий будеш цим на наступній локації. Сідай в машину та розминай прес)) Щоб знайти та ввести наступну локацію, уважно дослухайся і дивися не спʼяній поки доїдеш.`;
  
  if (inputText.toLowerCase() === "п'яна вишня") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Коли виконаєш завдання від твоїх скажених друзів - тисни кнопку", {
      reply_markup: {
        keyboard: [[{ text: "Я міцний як скеля!" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}

function drunkBerry2(chatId, inputText) {
  const startMsg1 = `Розім'явся трішки? Сподіваємось що так. Але поки знай, до чого тобі треба тягнутись - світовий рекорд стояння в планці 9 годин 30 хв 01 секунду. Введи ці цифри без пробілів, щоб дізнатись, що буде далі`;
  
  if (inputText.toLowerCase() === "93001") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Видно зразу, що не вмієш пити. Хто ж випив, і не закушує. Загляни за кут, і займай столик в реберні. Відпочинь і поїж від пуза як ти любиш, ненажера)) Коли поїси - тисни кнопку 'хочу ще одне реберце)))'", {
      reply_markup: {
        keyboard: [[{ text: "хочу ще одне реберце)))" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  } else {
    bot.sendMessage(chatId, startMsg1);
  }
}


function final(chatId, inputText) {
  const startMsg1 = `Молодець! Ти достойно зі всім справився! Але, здається, про один гріх ми забули. Бери оці координати, та прямуй туди. Коли знайдеш те, що тебе там чекає, введи три літери виробника, щоб дізнатись усе в нашій історії`;
  
  if (inputText.toLowerCase() === "skg") {
    userStates[chatId].questNumber++;
    bot.sendMessage(chatId, "Тепер не ти, а тобі всі будуть заздрити, коли ти будеш кататись на борді або бігти марафон в цьому костюмі! Нехай жодна травма тобі більше не дошкуляє, і наш корисний девайс, сподіаємось, тобі допоможе бути швидшим та спритнішим!", {
      reply_markup: {
        keyboard: [[{ text: "Тепер я дракон!" }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
    bot.sendMessage(chatId, 'Вітаємо тебе❤️! 34 - це тільки початок! Все попереду!');
  } else {
    bot.sendLocation(chatId, 50.429314, 30.593092);
    bot.sendMessage(chatId, startMsg1);
  }
}


bot.on('polling_error', (error) => {
  console.log(error);
});