module.exports = async (sock, from, command) => {
  switch (command) {
    case "waifu":
      return sock.sendMessage(from, {
        text: "✨ Your waifu has appeared!"
      });

    case "rimuru":
      return sock.sendMessage(from, {
        text: "👑 Greetings. I am Rimuru Tempest."
      });

    case "animequote":
      return sock.sendMessage(from, {
        text: "The world isn't perfect. But it's there for us, trying the best it can."
      });
  }
};
