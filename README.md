loudspeaker-gettingstarted
==========================

An example web-page, demonstrationg how to get started with making sounds with the loudspeaker. This getting-started guide is still a work in progress. The idé is to set up this server on the Raspberry Pi, and then connect to the synth-server from any onther device by using websockets.

### Install guide

_You'll need:_
* [Node](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [SoX](http://sox.sourceforge.net/) __Runs only on linux__

_Installing SoX and node-gyp on Ubuntu:_

```
sudo apt-get install sox
sudo apt-get install build-essential
sudo npm install -g node-gyp
```

_Get up and running with:_
```
git clone https://github.com/teodoran/loudspeaker-gettingstarted.git
cd loudspeaker-gettingstarted
npm install
npm start
```
