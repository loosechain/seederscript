var randomGen = require("random-words");

var list = [];
var i = 0;
for (i = 500000; i > 0; i--) {
  list.push({
    name: randomGen({ exactly: 2, join: " " }),
    twitter: `http://www.twitter.com/${randomGen()}`,
    facebook: `http://www.facebook.com/${randomGen()}`,
    linkedIn: `http://www.linkedin.com/${randomGen()}`,
    discord: `http://www.discord.com/${randomGen()}`,
    telegram: `http://www.telegram.com/${randomGen()}`,
    instagram: `http://www.instagram.com/${randomGen()}`,
    bio: randomGen({ exactly: 20, join: " " }),
    web: `http://wwww.${randomGen()}.com`
  });
}
console.log(list);
