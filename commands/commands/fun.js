module.exports = async (sock, from, command) => {
  switch (command) {
    case "joke":
      return sock.sendMessage(from, {
        text: "😂 Why do programmers prefer dark mode? Because light attracts bugs."
      });

    case "ping":
      return sock.sendMessage(from, {
        text: "🏓 Pong!"
      });
  }
};
