const {
  default: makeWASocket,
  useMultiFileAuthState
} = require("@whiskeysockets/baileys");

const fs = require("fs");

async function startBot() {

  // Ensure session folder exists
  if (!fs.existsSync("./session")) {
    fs.mkdirSync("./session");
  }

  const { state, saveCreds } =
    await useMultiFileAuthState("./session");

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection } = update;

    if (connection === "open") {
      console.log("🧠 Great Sage connected successfully");
    }

    if (connection === "close") {
      console.log("🔁 Reconnecting...");
      startBot();
    }
  });
}

startBot();
