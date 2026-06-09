module.exports = async (sock, from, command) => {
  switch (command) {
    case "tagall":
      return sock.sendMessage(from, {
        text: "@everyone",
        mentions: []
      });

    case "rules":
      return sock.sendMessage(from, {
        text: "📜 Group Rules:\n1. Respect everyone\n2. No spam\n3. Enjoy the anime community"
      });
  }
};
