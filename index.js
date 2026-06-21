const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "✨ Prisma Market",
    Markup.inlineKeyboard([
      Markup.button.webApp(
        "Открыть Prisma Market 🛒",
        process.env.WEBAPP_URL
      ),
    ])
  );
});

bot.launch();
