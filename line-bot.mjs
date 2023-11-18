#! /usr/bin/env node
'use strict'
/** SPDX-License-Identifier: MIT */
import fs from 'fs'
/**
 * @see https://github.com/line/line-bot-sdk-nodejs/blob/master/docs/guide/client.md
 */
import { messagingApi } from '@line/bot-sdk'
const { MessagingApiClient } = messagingApi

const file = fs.readFileSync('.line-bot.rc.json', 'utf8')
const { channelAccessToken, to } = JSON.parse(file)
new MessagingApiClient({ channelAccessToken }).pushMessage({
  to, messages: [{ type: 'text', text: process.argv.slice(2).join() }]
})
