ruokakauppacom
==============
# tuote on todennäköisesti aina loppu™

Osta ruokaa ja selaa ruokakauppaa!
Yeoman AngularJS fullstackilla™ luotu applikaatio.

# Riippuvaisuudet
* MongoDB
* Grunt

# Ohjeet
node.js käyttää NODE_ENV ja PORT -ympäristömuuttujia - muokkaa niitä, jos haluat käyttää productionia.
Suorita seuraavasti:

```
git clone https://github.com/narck/ruokakauppacom
cd ruokakauppacom/
npm install
bower install
grunt build
cd dist/
node server.js
```