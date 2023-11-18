# README - LINE Bot Client

## Install & Config

```bash
git clone git@github.com:MItsutoshiNAKANO/line-bot.git
cd line-bot
# Read all files carefully!
npm install
cp sample.line-bot.rc.json .line-bot.rc.json
vi .line-bot.rc.json # Define your Channel Acccess Token & Line ID.
```

## Usage

```bash
./line-bot.mjs message...
```

## Why do I write this

I misunderstood the specification about arguments
of MessagingApiClient.pushMessage() in @line/bot-sdk.
So, I wrote the wrong script.

* @see <./misunderstanding.md>
* @see <https://github.com/line/line-bot-sdk-nodejs/issues/598>

Now, my bug was fixed.
This script can post messages to LINE.
