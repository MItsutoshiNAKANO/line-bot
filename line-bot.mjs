#! /usr/bin/env node
'use strict'
/** SPDX-License-Identifier: MIT */
/**
 * @see https://github.com/line/line-bot-sdk-nodejs/blob/master/docs/guide/client.md
 */
import { messagingApi } from '@line/bot-sdk'
const { MessagingApiClient } = messagingApi
import fs from'fs'

function send (text, to, channelAccessToken) {
  const lineClient = new MessagingApiClient({ channelAccessToken })
  return lineClient.pushMessage(to, [{ type: 'text', text }])
}

const file = fs.readFileSync('.line-bot.rc.json', 'utf8')
const { channelAccessToken, to } = JSON.parse(file)
send(process.argv.join(), to, channelAccessToken)
