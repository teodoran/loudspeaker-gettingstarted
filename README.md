loudspeaker-gettingstarted
==========================

An example web-page, demonstrationg how to get started with making sounds with the loudspeaker. This getting-started guide is still a work in progress. The idé is to set up this server on the Raspberry Pi, and then connect to the synth-server from any onther device by using websockets.

### Install guide

_You'll need:_
* [Node](https://nodejs.org/en/download/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

_Flocking and Node.js:_

Flocking is used under the hood to generate sound. From their dokumentation: "Flocking supports Node.js versions 0.12.x and 4.2.x. It depends on several third-party Node libraries for audio output and MIDI input.""

"On Mac and Windows, you shouldn't need any additional dependencies. However, on Linux, the ALSA development library is required."

On Ubuntu and Debian:

```
apt-get install libasound2-dev
```

On Fedora and CentOS:

```
yum install alsa-lib-devel
```

_Get up and running with:_
```
git clone https://github.com/teodoran/loudspeaker-gettingstarted.git
cd loudspeaker-gettingstarted
npm install
npm start
```

### API guide

This will contain the dokumentation of the requests you can send to the loadspeaker. Something along the line of:

```
{
	"device": "loudspeaker",
	"note": "Db"
}
```