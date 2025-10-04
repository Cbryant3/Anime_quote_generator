const quotes = [
  "A lesson without pain is meaningless. – Edward Elric, FMAB",
  "I will become a great hero! – Naruto Uzumaki",
  "Power comes in response to a need. – Guts, Berserk",
  "Fear is not evil. – Rurouni Kenshin",
  "I'll take a potato chip… and eat it! – Light Yagami, Death Note",
  "If you don’t take risks, you can’t create a future! – Monkey D. Luffy, One Piece",
  "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. – Kenshin Himura, Rurouni Kenshin",
  "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
  "People’s lives don’t end when they die. It ends when they lose faith. – Itachi Uchiha, Naruto",
  "Power is not will. It is the phenomenon of physically making things happen. – Edward Elric, FMAB",
  "A lesson learned is a lesson earned. – Holo, Spice and Wolf",
  "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
  "If you don’t take risks, you can’t create a future. – Monkey D. Luffy, One Piece",
  "The world isn’t perfect. But it’s there for us trying the best it can… that's what makes it beautiful. – Roy Mustang, FMAB",
  "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki",
  "You can’t sit around envying other people’s worlds. You have to go out and change your own. – Rintarou Okabe, Steins;Gate",
  "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. – Kenshin Himura, Rurouni Kenshin",
  "If you really want to be strong, stop caring about what your enemies think. – Levi, Attack on Titan",
  "When you give up, your dreams are gone. – Gon Freecss, Hunter x Hunter",
  "If you don’t take risks, you can’t create a future! – Luffy, One Piece",
  "The world isn’t perfect. But it’s there for us trying the best it can… that’s what makes it beautiful. – Roy Mustang, FMAB",
  "No one knows what the future holds. That’s why its potential is infinite. – Rintarou Okabe, Steins;Gate",
  "A lesson without pain is meaningless. That’s the way I see it. – Edward Elric, FMAB",
  "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto",
  "People’s lives don’t end when they die. It ends when they lose faith. – Itachi Uchiha",
  "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
  "When you give up, your dreams are gone. – Gon Freecss, Hunter x Hunter",
  "If you really want to be strong, stop caring about what your enemies think. – Levi, Attack on Titan",
  "Whatever you lose, you’ll find it again. But what you throw away you’ll never get back. – Kenshin Himura",
  "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
  "You can’t sit around envying other people’s worlds. You have to go out and change your own. – Rintarou Okabe, Steins;Gate",
  "Power comes in response to a need, not a desire. – Guts, Berserk"
];
document.getElementById("newQuote").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});