/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CatalogItem } from '../core/types.ts';

export const fullReferenceCatalog: CatalogItem[] = [
  {
    "id": "cmd-1",
    "originalName": "aiimage",
    "name": "aiimage",
    "category": "ai",
    "description": "Perintah aiimage kategori ai",
    "aliases": [
      "dalle",
      "txt2img",
      "imagine"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}aiimage",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-2",
    "originalName": "aiimg",
    "name": "aiimg",
    "category": "ai",
    "description": "Perintah aiimg kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}aiimg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-3",
    "originalName": "byenexara",
    "name": "byenexara",
    "category": "ai",
    "description": "Perintah byenexara kategori ai",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}byenexara",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-4",
    "originalName": "byeopenai",
    "name": "byeopenai",
    "category": "ai",
    "description": "Perintah byeopenai kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}byeopenai",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-5",
    "originalName": "editimg",
    "name": "editimg",
    "category": "ai",
    "description": "Perintah editimg kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}editimg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-6",
    "originalName": "hitamkan",
    "name": "hitamkan",
    "category": "ai",
    "description": "Perintah hitamkan kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hitamkan",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-7",
    "originalName": "jadianime",
    "name": "jadianime",
    "category": "ai",
    "description": "Perintah jadianime kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}jadianime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-8",
    "originalName": "nexara",
    "name": "nexara",
    "category": "ai",
    "description": "Perintah nexara kategori ai",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}nexara",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-9",
    "originalName": "openai",
    "name": "openai",
    "category": "ai",
    "description": "Perintah openai kategori ai",
    "aliases": [
      "ai",
      "gemini",
      "ask",
      "tanya"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}openai",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-10",
    "originalName": "toanime",
    "name": "toanime",
    "category": "ai",
    "description": "Perintah toanime kategori ai",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}toanime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-11",
    "originalName": "voicejapan",
    "name": "voicejapan",
    "category": "ai",
    "description": "Perintah voicejapan kategori ai",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}voicejapan",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-12",
    "originalName": "douyin",
    "name": "douyin",
    "category": "download",
    "description": "Perintah douyin kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}douyin",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-13",
    "originalName": "facebook",
    "name": "facebook",
    "category": "download",
    "description": "Perintah facebook kategori download",
    "aliases": [
      "fb",
      "fbdl",
      "fbvideo"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}facebook",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-14",
    "originalName": "igdl",
    "name": "igdl",
    "category": "download",
    "description": "Perintah igdl kategori download",
    "aliases": [
      "instagram",
      "ig",
      "reels"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}igdl",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-15",
    "originalName": "igreel",
    "name": "igreel",
    "category": "download",
    "description": "Perintah igreel kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}igreel",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-16",
    "originalName": "igstory",
    "name": "igstory",
    "category": "download",
    "description": "Perintah igstory kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}igstory",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-17",
    "originalName": "igtv",
    "name": "igtv",
    "category": "download",
    "description": "Perintah igtv kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}igtv",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-18",
    "originalName": "mediafire",
    "name": "mediafire",
    "category": "download",
    "description": "Perintah mediafire kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}mediafire",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-19",
    "originalName": "otakudesudl",
    "name": "otakudesudl",
    "category": "download",
    "description": "Perintah otakudesudl kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}otakudesudl",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-20",
    "originalName": "pindl",
    "name": "pindl",
    "category": "download",
    "description": "Perintah pindl kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}pindl",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-21",
    "originalName": "spotify",
    "name": "spotify",
    "category": "download",
    "description": "Perintah spotify kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}spotify",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-22",
    "originalName": "threads",
    "name": "threads",
    "category": "download",
    "description": "Perintah threads kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}threads",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-23",
    "originalName": "tiktokmusic",
    "name": "tiktokmusic",
    "category": "download",
    "description": "Perintah tiktokmusic kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tiktokmusic",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-24",
    "originalName": "tiktoknowm",
    "name": "tiktoknowm",
    "category": "download",
    "description": "Perintah tiktoknowm kategori download",
    "aliases": [
      "tiktok",
      "tt",
      "ttdl"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tiktoknowm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-25",
    "originalName": "tiktokslidevideo",
    "name": "tiktokslidevideo",
    "category": "download",
    "description": "Perintah tiktokslidevideo kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tiktokslidevideo",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-26",
    "originalName": "tiktokwm",
    "name": "tiktokwm",
    "category": "download",
    "description": "Perintah tiktokwm kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tiktokwm",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-27",
    "originalName": "twitterdl",
    "name": "twitterdl",
    "category": "download",
    "description": "Perintah twitterdl kategori download",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}twitterdl",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-28",
    "originalName": "ytmp3",
    "name": "ytmp3",
    "category": "download",
    "description": "Perintah ytmp3 kategori download",
    "aliases": [
      "yta",
      "ytaudio"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ytmp3",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-29",
    "originalName": "ytmp4",
    "name": "ytmp4",
    "category": "download",
    "description": "Perintah ytmp4 kategori download",
    "aliases": [
      "ytv",
      "ytvideo"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ytmp4",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-30",
    "originalName": "akinator",
    "name": "akinator",
    "category": "game",
    "description": "Perintah akinator kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}akinator",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-31",
    "originalName": "akinatorstart",
    "name": "akinatorstart",
    "category": "game",
    "description": "Perintah akinatorstart kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}akinatorstart",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-32",
    "originalName": "akinatorstop",
    "name": "akinatorstop",
    "category": "game",
    "description": "Perintah akinatorstop kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}akinatorstop",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-33",
    "originalName": "asahotak",
    "name": "asahotak",
    "category": "game",
    "description": "Perintah asahotak kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}asahotak",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-34",
    "originalName": "bom",
    "name": "bom",
    "category": "game",
    "description": "Perintah bom kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bom",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-35",
    "originalName": "buylimit",
    "name": "buylimit",
    "category": "game",
    "description": "Perintah buylimit kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}buylimit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-36",
    "originalName": "caklontong",
    "name": "caklontong",
    "category": "game",
    "description": "Perintah caklontong kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}caklontong",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-37",
    "originalName": "dare",
    "name": "dare",
    "category": "game",
    "description": "Perintah dare kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}dare",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-38",
    "originalName": "family100",
    "name": "family100",
    "category": "game",
    "description": "Perintah family100 kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}family100",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-39",
    "originalName": "hint",
    "name": "hint",
    "category": "game",
    "description": "Perintah hint kategori game",
    "aliases": [
      "clue"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hint",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-40",
    "originalName": "math",
    "name": "math",
    "category": "game",
    "description": "Perintah math kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}math",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-41",
    "originalName": "nyerah",
    "name": "nyerah",
    "category": "game",
    "description": "Perintah nyerah kategori game",
    "aliases": [
      "surrender"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}nyerah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-42",
    "originalName": "redeem",
    "name": "redeem",
    "category": "game",
    "description": "Perintah redeem kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}redeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-43",
    "originalName": "sambungkata",
    "name": "sambungkata",
    "category": "game",
    "description": "Perintah sambungkata kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sambungkata",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-44",
    "originalName": "siapakahaku",
    "name": "siapakahaku",
    "category": "game",
    "description": "Perintah siapakahaku kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}siapakahaku",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-45",
    "originalName": "sloth",
    "name": "sloth",
    "category": "game",
    "description": "Perintah sloth kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sloth",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-46",
    "originalName": "suit",
    "name": "suit",
    "category": "game",
    "description": "Perintah suit kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}suit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-47",
    "originalName": "susunkalimat",
    "name": "susunkalimat",
    "category": "game",
    "description": "Perintah susunkalimat kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}susunkalimat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-48",
    "originalName": "susunkata",
    "name": "susunkata",
    "category": "game",
    "description": "Perintah susunkata kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}susunkata",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-49",
    "originalName": "susunlirik",
    "name": "susunlirik",
    "category": "game",
    "description": "Perintah susunlirik kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}susunlirik",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-50",
    "originalName": "tebakbendera",
    "name": "tebakbendera",
    "category": "game",
    "description": "Perintah tebakbendera kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakbendera",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-51",
    "originalName": "tebakbom",
    "name": "tebakbom",
    "category": "game",
    "description": "Perintah tebakbom kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakbom",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-52",
    "originalName": "tebakchara",
    "name": "tebakchara",
    "category": "game",
    "description": "Perintah tebakchara kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakchara",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-53",
    "originalName": "tebakemoji",
    "name": "tebakemoji",
    "category": "game",
    "description": "Perintah tebakemoji kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakemoji",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-54",
    "originalName": "tebakgambar",
    "name": "tebakgambar",
    "category": "game",
    "description": "Perintah tebakgambar kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakgambar",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-55",
    "originalName": "tebakkata",
    "name": "tebakkata",
    "category": "game",
    "description": "Perintah tebakkata kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakkata",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-56",
    "originalName": "tebaklagu",
    "name": "tebaklagu",
    "category": "game",
    "description": "Perintah tebaklagu kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebaklagu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-57",
    "originalName": "tebaklaguanime",
    "name": "tebaklaguanime",
    "category": "game",
    "description": "Perintah tebaklaguanime kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebaklaguanime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-58",
    "originalName": "tebaklagukpop",
    "name": "tebaklagukpop",
    "category": "game",
    "description": "Perintah tebaklagukpop kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebaklagukpop",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-59",
    "originalName": "tekateki",
    "name": "tekateki",
    "category": "game",
    "description": "Perintah tekateki kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tekateki",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-60",
    "originalName": "tfbalance",
    "name": "tfbalance",
    "category": "game",
    "description": "Perintah tfbalance kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tfbalance",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-61",
    "originalName": "tictactoe",
    "name": "tictactoe",
    "category": "game",
    "description": "Perintah tictactoe kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tictactoe",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-62",
    "originalName": "truth",
    "name": "truth",
    "category": "game",
    "description": "Perintah truth kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}truth",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-63",
    "originalName": "ulartangga",
    "name": "ulartangga",
    "category": "game",
    "description": "Perintah ulartangga kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ulartangga",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-64",
    "originalName": "undercover",
    "name": "undercover",
    "category": "game",
    "description": "Perintah undercover kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}undercover",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-65",
    "originalName": "uno",
    "name": "uno",
    "category": "game",
    "description": "Perintah uno kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}uno",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-66",
    "originalName": "werewolf",
    "name": "werewolf",
    "category": "game",
    "description": "Perintah werewolf kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}werewolf",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-67",
    "originalName": "werewolf2",
    "name": "werewolf2",
    "category": "game",
    "description": "Perintah werewolf2 kategori game",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}werewolf2",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-68",
    "originalName": "tebakmember",
    "name": "tebakmember",
    "category": "game",
    "description": "Permainan tebak nama member JKT48 berdasarkan clue dan generasi",
    "aliases": [
      "member48",
      "tebakoshi"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-69",
    "originalName": "tebakjiko",
    "name": "tebakjiko",
    "category": "game",
    "description": "Perintah tebakjiko kategori game",
    "aliases": [
      "jiko"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebakjiko",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-70",
    "originalName": "tebaksetlist",
    "name": "tebaksetlist",
    "category": "game",
    "description": "Perintah tebaksetlist kategori game",
    "aliases": [
      "setlist"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tebaksetlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-71",
    "originalName": "trivia48",
    "name": "trivia48",
    "category": "game",
    "description": "Kuis trivia seputar fakta dan sejarah 48Group / JKT48",
    "aliases": [
      "kuis48"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}trivia48",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-72",
    "originalName": "susunmember",
    "name": "susunmember",
    "category": "game",
    "description": "Perintah susunmember kategori game",
    "aliases": [],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}susunmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-73",
    "originalName": "gachakartu",
    "name": "gachakartu",
    "category": "game",
    "description": "Gacha kartu idol digital fiktif (Common, Rare, SR, UR)",
    "aliases": [
      "gacha"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}gachakartu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-74",
    "originalName": "koleksikartu",
    "name": "koleksikartu",
    "category": "game",
    "description": "Perintah koleksikartu kategori game",
    "aliases": [
      "binder",
      "kartuku"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}koleksikartu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-75",
    "originalName": "leaderboard48",
    "name": "leaderboard48",
    "category": "game",
    "description": "Perintah leaderboard48 kategori game",
    "aliases": [
      "topglobal",
      "topwota"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}leaderboard48",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-76",
    "originalName": "misiharian",
    "name": "misiharian",
    "category": "game",
    "description": "Perintah misiharian kategori game",
    "aliases": [
      "daily",
      "klaim"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}misiharian",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-77",
    "originalName": "changelog",
    "name": "changelog",
    "category": "general",
    "description": "Perintah changelog kategori general",
    "aliases": [
      "updates",
      "changes"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}changelog",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-78",
    "originalName": "everyone",
    "name": "everyone",
    "category": "general",
    "description": "Perintah everyone kategori general",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}everyone",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-79",
    "originalName": "infobot",
    "name": "infobot",
    "category": "general",
    "description": "Menampilkan informasi teknis dan spesifikasi sistem bot",
    "aliases": [
      "info",
      "about"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}infobot",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-80",
    "originalName": "menu",
    "name": "menu",
    "category": "general",
    "description": "Menampilkan daftar menu perintah Freya-san Bot",
    "aliases": [
      "help",
      "bantuan"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}menu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-81",
    "originalName": "owner",
    "name": "owner",
    "category": "general",
    "description": "Perintah owner kategori general",
    "aliases": [
      "creator",
      "developer"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}owner",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-82",
    "originalName": "ping",
    "name": "ping",
    "category": "general",
    "description": "Memeriksa kecepatan respon server dan latensi bot",
    "aliases": [
      "p",
      "speed"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ping",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-83",
    "originalName": "resend",
    "name": "resend",
    "category": "general",
    "description": "Perintah resend kategori general",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}resend",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-84",
    "originalName": "runtime",
    "name": "runtime",
    "category": "general",
    "description": "Perintah runtime kategori general",
    "aliases": [
      "uptime"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}runtime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-85",
    "originalName": "sender",
    "name": "sender",
    "category": "general",
    "description": "Perintah sender kategori general",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sender",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-86",
    "originalName": "streak",
    "name": "streak",
    "category": "general",
    "description": "Perintah streak kategori general",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}streak",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-87",
    "originalName": "version",
    "name": "version",
    "category": "general",
    "description": "Perintah version kategori general",
    "aliases": [
      "ver"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}version",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-88",
    "originalName": "absen",
    "name": "absen",
    "category": "group",
    "description": "Perintah absen kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}absen",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-89",
    "originalName": "add",
    "name": "add",
    "category": "group",
    "description": "Perintah add kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}add",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-90",
    "originalName": "addalarm",
    "name": "addalarm",
    "category": "group",
    "description": "Perintah addalarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addalarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-91",
    "originalName": "addbadword",
    "name": "addbadword",
    "category": "group",
    "description": "Perintah addbadword kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addbadword",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-92",
    "originalName": "addlist",
    "name": "addlist",
    "category": "group",
    "description": "Perintah addlist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-93",
    "originalName": "addpoin",
    "name": "addpoin",
    "category": "group",
    "description": "Perintah addpoin kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addpoin",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-94",
    "originalName": "addreminder",
    "name": "addreminder",
    "category": "group",
    "description": "Perintah addreminder kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addreminder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-95",
    "originalName": "addwhitelist",
    "name": "addwhitelist",
    "category": "group",
    "description": "Perintah addwhitelist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}addwhitelist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-96",
    "originalName": "afk",
    "name": "afk",
    "category": "group",
    "description": "Perintah afk kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}afk",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-97",
    "originalName": "antibadword",
    "name": "antibadword",
    "category": "group",
    "description": "Perintah antibadword kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antibadword",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-98",
    "originalName": "antibadwordnokick",
    "name": "antibadwordnokick",
    "category": "group",
    "description": "Perintah antibadwordnokick kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antibadwordnokick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-99",
    "originalName": "antibot",
    "name": "antibot",
    "category": "group",
    "description": "Perintah antibot kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antibot",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-100",
    "originalName": "antidelete",
    "name": "antidelete",
    "category": "group",
    "description": "Perintah antidelete kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antidelete",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-101",
    "originalName": "antigroupsw",
    "name": "antigroupsw",
    "category": "group",
    "description": "Perintah antigroupsw kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antigroupsw",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-102",
    "originalName": "antikudeta",
    "name": "antikudeta",
    "category": "group",
    "description": "Perintah antikudeta kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antikudeta",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-103",
    "originalName": "antilink",
    "name": "antilink",
    "category": "group",
    "description": "Perintah antilink kategori group",
    "aliases": [
      "antilinkwa"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antilink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-104",
    "originalName": "antilinkchannel",
    "name": "antilinkchannel",
    "category": "group",
    "description": "Perintah antilinkchannel kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antilinkchannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-105",
    "originalName": "antilinknokick",
    "name": "antilinknokick",
    "category": "group",
    "description": "Perintah antilinknokick kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antilinknokick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-106",
    "originalName": "antilinkuniversal",
    "name": "antilinkuniversal",
    "category": "group",
    "description": "Perintah antilinkuniversal kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antilinkuniversal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-107",
    "originalName": "antiluar",
    "name": "antiluar",
    "category": "group",
    "description": "Perintah antiluar kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antiluar",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-108",
    "originalName": "antimentionsw",
    "name": "antimentionsw",
    "category": "group",
    "description": "Perintah antimentionsw kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antimentionsw",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-109",
    "originalName": "antisticker",
    "name": "antisticker",
    "category": "group",
    "description": "Perintah antisticker kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antisticker",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-110",
    "originalName": "antiviewonce",
    "name": "antiviewonce",
    "category": "group",
    "description": "Perintah antiviewonce kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antiviewonce",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-111",
    "originalName": "antiwame",
    "name": "antiwame",
    "category": "group",
    "description": "Perintah antiwame kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antiwame",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-112",
    "originalName": "antiwamenokick",
    "name": "antiwamenokick",
    "category": "group",
    "description": "Perintah antiwamenokick kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}antiwamenokick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-113",
    "originalName": "banmember",
    "name": "banmember",
    "category": "group",
    "description": "Perintah banmember kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}banmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-114",
    "originalName": "blacklist",
    "name": "blacklist",
    "category": "group",
    "description": "Perintah blacklist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}blacklist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-115",
    "originalName": "cekabsen",
    "name": "cekabsen",
    "category": "group",
    "description": "Perintah cekabsen kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}cekabsen",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-116",
    "originalName": "cekidgroup",
    "name": "cekidgroup",
    "category": "group",
    "description": "Perintah cekidgroup kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}cekidgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-117",
    "originalName": "cekpoint",
    "name": "cekpoint",
    "category": "group",
    "description": "Perintah cekpoint kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}cekpoint",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-118",
    "originalName": "ceksewa",
    "name": "ceksewa",
    "category": "group",
    "description": "Perintah ceksewa kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}ceksewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-119",
    "originalName": "cekwarn",
    "name": "cekwarn",
    "category": "group",
    "description": "Perintah cekwarn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}cekwarn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-120",
    "originalName": "createschedulecall",
    "name": "createschedulecall",
    "category": "group",
    "description": "Perintah createschedulecall kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}createschedulecall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-121",
    "originalName": "delalarm",
    "name": "delalarm",
    "category": "group",
    "description": "Perintah delalarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delalarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-122",
    "originalName": "delbadword",
    "name": "delbadword",
    "category": "group",
    "description": "Perintah delbadword kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delbadword",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-123",
    "originalName": "delblacklist",
    "name": "delblacklist",
    "category": "group",
    "description": "Perintah delblacklist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delblacklist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-124",
    "originalName": "delete",
    "name": "delete",
    "category": "group",
    "description": "Perintah delete kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delete",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-125",
    "originalName": "deleteabsen",
    "name": "deleteabsen",
    "category": "group",
    "description": "Perintah deleteabsen kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}deleteabsen",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-126",
    "originalName": "deletepoin",
    "name": "deletepoin",
    "category": "group",
    "description": "Perintah deletepoin kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}deletepoin",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-127",
    "originalName": "deletetotalpesan",
    "name": "deletetotalpesan",
    "category": "group",
    "description": "Perintah deletetotalpesan kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}deletetotalpesan",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-128",
    "originalName": "dellist",
    "name": "dellist",
    "category": "group",
    "description": "Perintah dellist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}dellist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-129",
    "originalName": "delreminder",
    "name": "delreminder",
    "category": "group",
    "description": "Perintah delreminder kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delreminder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-130",
    "originalName": "delultahku",
    "name": "delultahku",
    "category": "group",
    "description": "Perintah delultahku kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delultahku",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-131",
    "originalName": "delwarn",
    "name": "delwarn",
    "category": "group",
    "description": "Perintah delwarn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delwarn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-132",
    "originalName": "delwhitelist",
    "name": "delwhitelist",
    "category": "group",
    "description": "Perintah delwhitelist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}delwhitelist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-133",
    "originalName": "demote",
    "name": "demote",
    "category": "group",
    "description": "Perintah demote kategori group",
    "aliases": [
      "unadmin",
      "turun"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}demote",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-134",
    "originalName": "demotedetector",
    "name": "demotedetector",
    "category": "group",
    "description": "Perintah demotedetector kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}demotedetector",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-135",
    "originalName": "descgc",
    "name": "descgc",
    "category": "group",
    "description": "Perintah descgc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}descgc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-136",
    "originalName": "disablealarm",
    "name": "disablealarm",
    "category": "group",
    "description": "Perintah disablealarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}disablealarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-137",
    "originalName": "done",
    "name": "done",
    "category": "group",
    "description": "Perintah done kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}done",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-138",
    "originalName": "enablealarm",
    "name": "enablealarm",
    "category": "group",
    "description": "Perintah enablealarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}enablealarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-139",
    "originalName": "gamemode",
    "name": "gamemode",
    "category": "group",
    "description": "Perintah gamemode kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}gamemode",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-140",
    "originalName": "getlist",
    "name": "getlist",
    "category": "group",
    "description": "Perintah getlist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}getlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-141",
    "originalName": "groupadmin",
    "name": "groupadmin",
    "category": "group",
    "description": "Perintah groupadmin kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}groupadmin",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-142",
    "originalName": "groupinfo",
    "name": "groupinfo",
    "category": "group",
    "description": "Perintah groupinfo kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}groupinfo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-143",
    "originalName": "groupschedule",
    "name": "groupschedule",
    "category": "group",
    "description": "Perintah groupschedule kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}groupschedule",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-144",
    "originalName": "groupsetting",
    "name": "groupsetting",
    "category": "group",
    "description": "Perintah groupsetting kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}groupsetting",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-145",
    "originalName": "grouptime",
    "name": "grouptime",
    "category": "group",
    "description": "Perintah grouptime kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}grouptime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-146",
    "originalName": "hidetag",
    "name": "hidetag",
    "category": "group",
    "description": "Perintah hidetag kategori group",
    "aliases": [
      "tagall",
      "pengumuman",
      "totag"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}hidetag",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-147",
    "originalName": "kick",
    "name": "kick",
    "category": "group",
    "description": "Perintah kick kategori group",
    "aliases": [
      "tendang",
      "remove"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}kick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-148",
    "originalName": "kickme",
    "name": "kickme",
    "category": "group",
    "description": "Perintah kickme kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}kickme",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-149",
    "originalName": "leavegc",
    "name": "leavegc",
    "category": "group",
    "description": "Perintah leavegc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}leavegc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-150",
    "originalName": "left",
    "name": "left",
    "category": "group",
    "description": "Perintah left kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}left",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-151",
    "originalName": "levelling",
    "name": "levelling",
    "category": "group",
    "description": "Perintah levelling kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}levelling",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-152",
    "originalName": "linkgc",
    "name": "linkgc",
    "category": "group",
    "description": "Perintah linkgc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}linkgc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-153",
    "originalName": "list",
    "name": "list",
    "category": "group",
    "description": "Perintah list kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}list",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-154",
    "originalName": "listalarm",
    "name": "listalarm",
    "category": "group",
    "description": "Perintah listalarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listalarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-155",
    "originalName": "listbadword",
    "name": "listbadword",
    "category": "group",
    "description": "Perintah listbadword kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listbadword",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-156",
    "originalName": "listbanmember",
    "name": "listbanmember",
    "category": "group",
    "description": "Perintah listbanmember kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listbanmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-157",
    "originalName": "listblacklist",
    "name": "listblacklist",
    "category": "group",
    "description": "Perintah listblacklist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listblacklist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-158",
    "originalName": "listonline",
    "name": "listonline",
    "category": "group",
    "description": "Perintah listonline kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listonline",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-159",
    "originalName": "listpoint",
    "name": "listpoint",
    "category": "group",
    "description": "Perintah listpoint kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listpoint",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-160",
    "originalName": "listreminder",
    "name": "listreminder",
    "category": "group",
    "description": "Perintah listreminder kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listreminder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-161",
    "originalName": "listtotalpesan",
    "name": "listtotalpesan",
    "category": "group",
    "description": "Perintah listtotalpesan kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listtotalpesan",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-162",
    "originalName": "listultah",
    "name": "listultah",
    "category": "group",
    "description": "Perintah listultah kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listultah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-163",
    "originalName": "listwarn",
    "name": "listwarn",
    "category": "group",
    "description": "Perintah listwarn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listwarn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-164",
    "originalName": "listwhitelist",
    "name": "listwhitelist",
    "category": "group",
    "description": "Perintah listwhitelist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}listwhitelist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-165",
    "originalName": "mulaiabsen",
    "name": "mulaiabsen",
    "category": "group",
    "description": "Perintah mulaiabsen kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}mulaiabsen",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-166",
    "originalName": "mute",
    "name": "mute",
    "category": "group",
    "description": "Perintah mute kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}mute",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-167",
    "originalName": "pinmsg",
    "name": "pinmsg",
    "category": "group",
    "description": "Perintah pinmsg kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}pinmsg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-168",
    "originalName": "promote",
    "name": "promote",
    "category": "group",
    "description": "Perintah promote kategori group",
    "aliases": [
      "admin",
      "angkat"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}promote",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-169",
    "originalName": "promotedetector",
    "name": "promotedetector",
    "category": "group",
    "description": "Perintah promotedetector kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}promotedetector",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-170",
    "originalName": "proses",
    "name": "proses",
    "category": "group",
    "description": "Perintah proses kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}proses",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-171",
    "originalName": "refreshgroup",
    "name": "refreshgroup",
    "category": "group",
    "description": "Perintah refreshgroup kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}refreshgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-172",
    "originalName": "reqjoin",
    "name": "reqjoin",
    "category": "group",
    "description": "Perintah reqjoin kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}reqjoin",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-173",
    "originalName": "resetalarm",
    "name": "resetalarm",
    "category": "group",
    "description": "Perintah resetalarm kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetalarm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-174",
    "originalName": "resetbadword",
    "name": "resetbadword",
    "category": "group",
    "description": "Perintah resetbadword kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetbadword",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-175",
    "originalName": "resetblacklist",
    "name": "resetblacklist",
    "category": "group",
    "description": "Perintah resetblacklist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetblacklist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-176",
    "originalName": "resetlist",
    "name": "resetlist",
    "category": "group",
    "description": "Perintah resetlist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-177",
    "originalName": "resetpoint",
    "name": "resetpoint",
    "category": "group",
    "description": "Perintah resetpoint kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetpoint",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-178",
    "originalName": "resetreminder",
    "name": "resetreminder",
    "category": "group",
    "description": "Perintah resetreminder kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetreminder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-179",
    "originalName": "resettotalpesan",
    "name": "resettotalpesan",
    "category": "group",
    "description": "Perintah resettotalpesan kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resettotalpesan",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-180",
    "originalName": "resetultahku",
    "name": "resetultahku",
    "category": "group",
    "description": "Perintah resetultahku kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetultahku",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-181",
    "originalName": "resetwarn",
    "name": "resetwarn",
    "category": "group",
    "description": "Perintah resetwarn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}resetwarn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-182",
    "originalName": "revokelink",
    "name": "revokelink",
    "category": "group",
    "description": "Perintah revokelink kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}revokelink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-183",
    "originalName": "setclose",
    "name": "setclose",
    "category": "group",
    "description": "Perintah setclose kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setclose",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-184",
    "originalName": "setdescgc",
    "name": "setdescgc",
    "category": "group",
    "description": "Perintah setdescgc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setdescgc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-185",
    "originalName": "setdone",
    "name": "setdone",
    "category": "group",
    "description": "Perintah setdone kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setdone",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-186",
    "originalName": "setleft",
    "name": "setleft",
    "category": "group",
    "description": "Perintah setleft kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setleft",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-187",
    "originalName": "setlefttype",
    "name": "setlefttype",
    "category": "group",
    "description": "Perintah setlefttype kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setlefttype",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-188",
    "originalName": "setnamegc",
    "name": "setnamegc",
    "category": "group",
    "description": "Perintah setnamegc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setnamegc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-189",
    "originalName": "setopen",
    "name": "setopen",
    "category": "group",
    "description": "Perintah setopen kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setopen",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-190",
    "originalName": "setppgc",
    "name": "setppgc",
    "category": "group",
    "description": "Perintah setppgc kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setppgc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-191",
    "originalName": "setppgcpanjang",
    "name": "setppgcpanjang",
    "category": "group",
    "description": "Perintah setppgcpanjang kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setppgcpanjang",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-192",
    "originalName": "setproses",
    "name": "setproses",
    "category": "group",
    "description": "Perintah setproses kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setproses",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-193",
    "originalName": "setwarn",
    "name": "setwarn",
    "category": "group",
    "description": "Perintah setwarn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setwarn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-194",
    "originalName": "setwelcome",
    "name": "setwelcome",
    "category": "group",
    "description": "Perintah setwelcome kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setwelcome",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-195",
    "originalName": "setwelcometype",
    "name": "setwelcometype",
    "category": "group",
    "description": "Perintah setwelcometype kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}setwelcometype",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-196",
    "originalName": "streakgrup",
    "name": "streakgrup",
    "category": "group",
    "description": "Perintah streakgrup kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}streakgrup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-197",
    "originalName": "tagall",
    "name": "tagall",
    "category": "group",
    "description": "Perintah tagall kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}tagall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-198",
    "originalName": "tfpoint",
    "name": "tfpoint",
    "category": "group",
    "description": "Perintah tfpoint kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}tfpoint",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-199",
    "originalName": "totag",
    "name": "totag",
    "category": "group",
    "description": "Perintah totag kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}totag",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-200",
    "originalName": "totalpesan",
    "name": "totalpesan",
    "category": "group",
    "description": "Perintah totalpesan kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}totalpesan",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-201",
    "originalName": "ultahku",
    "name": "ultahku",
    "category": "group",
    "description": "Perintah ultahku kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}ultahku",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-202",
    "originalName": "unbanmember",
    "name": "unbanmember",
    "category": "group",
    "description": "Perintah unbanmember kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}unbanmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-203",
    "originalName": "unpinmsg",
    "name": "unpinmsg",
    "category": "group",
    "description": "Perintah unpinmsg kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}unpinmsg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-204",
    "originalName": "updatelist",
    "name": "updatelist",
    "category": "group",
    "description": "Perintah updatelist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}updatelist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-205",
    "originalName": "uplist",
    "name": "uplist",
    "category": "group",
    "description": "Perintah uplist kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}uplist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-206",
    "originalName": "upswgroupv2",
    "name": "upswgroupv2",
    "category": "group",
    "description": "Perintah upswgroupv2 kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}upswgroupv2",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-207",
    "originalName": "vote",
    "name": "vote",
    "category": "group",
    "description": "Perintah vote kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}vote",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-208",
    "originalName": "warn",
    "name": "warn",
    "category": "group",
    "description": "Perintah warn kategori group",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}warn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-209",
    "originalName": "welcome",
    "name": "welcome",
    "category": "group",
    "description": "Perintah welcome kategori group",
    "aliases": [
      "setwelcome"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "group_admin"
    ],
    "usage": "/{prefix}welcome",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-210",
    "originalName": "balance",
    "name": "balance",
    "category": "info",
    "description": "Perintah balance kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}balance",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-211",
    "originalName": "cekchannel",
    "name": "cekchannel",
    "category": "info",
    "description": "Perintah cekchannel kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekchannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-212",
    "originalName": "cekpremium",
    "name": "cekpremium",
    "category": "info",
    "description": "Perintah cekpremium kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-213",
    "originalName": "infocovid",
    "name": "infocovid",
    "category": "info",
    "description": "Perintah infocovid kategori info",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}infocovid",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-214",
    "originalName": "infogempa",
    "name": "infogempa",
    "category": "info",
    "description": "Perintah infogempa kategori info",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}infogempa",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-215",
    "originalName": "infounsur",
    "name": "infounsur",
    "category": "info",
    "description": "Perintah infounsur kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}infounsur",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-216",
    "originalName": "kodebahasa",
    "name": "kodebahasa",
    "category": "info",
    "description": "Perintah kodebahasa kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}kodebahasa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-217",
    "originalName": "level",
    "name": "level",
    "category": "info",
    "description": "Perintah level kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}level",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-218",
    "originalName": "limit",
    "name": "limit",
    "category": "info",
    "description": "Perintah limit kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}limit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-219",
    "originalName": "listban",
    "name": "listban",
    "category": "info",
    "description": "Perintah listban kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}listban",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-220",
    "originalName": "listblock",
    "name": "listblock",
    "category": "info",
    "description": "Perintah listblock kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}listblock",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-221",
    "originalName": "listgroup",
    "name": "listgroup",
    "category": "info",
    "description": "Perintah listgroup kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}listgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-222",
    "originalName": "listpremium",
    "name": "listpremium",
    "category": "info",
    "description": "Perintah listpremium kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}listpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-223",
    "originalName": "profile",
    "name": "profile",
    "category": "info",
    "description": "Perintah profile kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}profile",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-224",
    "originalName": "report",
    "name": "report",
    "category": "info",
    "description": "Perintah report kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}report",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-225",
    "originalName": "status",
    "name": "status",
    "category": "info",
    "description": "Perintah status kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}status",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-226",
    "originalName": "topglobal",
    "name": "topglobal",
    "category": "info",
    "description": "Perintah topglobal kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}topglobal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-227",
    "originalName": "toplocal",
    "name": "toplocal",
    "category": "info",
    "description": "Perintah toplocal kategori info",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}toplocal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-228",
    "originalName": "accadmininvitechannel",
    "name": "accadmininvitechannel",
    "category": "owner",
    "description": "Perintah accadmininvitechannel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}accadmininvitechannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-229",
    "originalName": "addbalance",
    "name": "addbalance",
    "category": "owner",
    "description": "Perintah addbalance kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addbalance",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-230",
    "originalName": "addlevel",
    "name": "addlevel",
    "category": "owner",
    "description": "Perintah addlevel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addlevel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-231",
    "originalName": "addlimit",
    "name": "addlimit",
    "category": "owner",
    "description": "Perintah addlimit kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addlimit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-232",
    "originalName": "addpremium",
    "name": "addpremium",
    "category": "owner",
    "description": "Perintah addpremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-233",
    "originalName": "addpremiumgroup",
    "name": "addpremiumgroup",
    "category": "owner",
    "description": "Perintah addpremiumgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addpremiumgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-234",
    "originalName": "addrespon",
    "name": "addrespon",
    "category": "owner",
    "description": "Perintah addrespon kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addrespon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-235",
    "originalName": "addsewa",
    "name": "addsewa",
    "category": "owner",
    "description": "Perintah addsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-236",
    "originalName": "addsewathisgroup",
    "name": "addsewathisgroup",
    "category": "owner",
    "description": "Perintah addsewathisgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addsewathisgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-237",
    "originalName": "addxp",
    "name": "addxp",
    "category": "owner",
    "description": "Perintah addxp kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}addxp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-238",
    "originalName": "anticall",
    "name": "anticall",
    "category": "owner",
    "description": "Perintah anticall kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}anticall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-239",
    "originalName": "anticallnoblock",
    "name": "anticallnoblock",
    "category": "owner",
    "description": "Perintah anticallnoblock kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}anticallnoblock",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-240",
    "originalName": "antideletepc",
    "name": "antideletepc",
    "category": "owner",
    "description": "Perintah antideletepc kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}antideletepc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-241",
    "originalName": "autoleavegcnosewa",
    "name": "autoleavegcnosewa",
    "category": "owner",
    "description": "Perintah autoleavegcnosewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}autoleavegcnosewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-242",
    "originalName": "autonexara",
    "name": "autonexara",
    "category": "owner",
    "description": "Perintah autonexara kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}autonexara",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-243",
    "originalName": "autoread",
    "name": "autoread",
    "category": "owner",
    "description": "Perintah autoread kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}autoread",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-244",
    "originalName": "autotype",
    "name": "autotype",
    "category": "owner",
    "description": "Perintah autotype kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}autotype",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-245",
    "originalName": "ban",
    "name": "ban",
    "category": "owner",
    "description": "Perintah ban kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}ban",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-246",
    "originalName": "bccancel",
    "name": "bccancel",
    "category": "owner",
    "description": "Perintah bccancel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bccancel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-247",
    "originalName": "bcconfirm",
    "name": "bcconfirm",
    "category": "owner",
    "description": "Perintah bcconfirm kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcconfirm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-248",
    "originalName": "bcgchidetag",
    "name": "bcgchidetag",
    "category": "owner",
    "description": "Perintah bcgchidetag kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcgchidetag",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-249",
    "originalName": "bcgroup",
    "name": "bcgroup",
    "category": "owner",
    "description": "Perintah bcgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-250",
    "originalName": "bchidetag",
    "name": "bchidetag",
    "category": "owner",
    "description": "Perintah bchidetag kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bchidetag",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-251",
    "originalName": "bcmember",
    "name": "bcmember",
    "category": "owner",
    "description": "Perintah bcmember kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcmember",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-252",
    "originalName": "bcpc",
    "name": "bcpc",
    "category": "owner",
    "description": "Perintah bcpc kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcpc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-253",
    "originalName": "bcpremium",
    "name": "bcpremium",
    "category": "owner",
    "description": "Perintah bcpremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-254",
    "originalName": "bcsewa",
    "name": "bcsewa",
    "category": "owner",
    "description": "Perintah bcsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-255",
    "originalName": "bcstat",
    "name": "bcstat",
    "category": "owner",
    "description": "Perintah bcstat kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}bcstat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-256",
    "originalName": "blacklistglobal",
    "name": "blacklistglobal",
    "category": "owner",
    "description": "Perintah blacklistglobal kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}blacklistglobal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-257",
    "originalName": "block",
    "name": "block",
    "category": "owner",
    "description": "Perintah block kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}block",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-258",
    "originalName": "blockpc",
    "name": "blockpc",
    "category": "owner",
    "description": "Perintah blockpc kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}blockpc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-259",
    "originalName": "broadcast",
    "name": "broadcast",
    "category": "owner",
    "description": "Perintah broadcast kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}broadcast",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-260",
    "originalName": "buttonmode",
    "name": "buttonmode",
    "category": "owner",
    "description": "Perintah buttonmode kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}buttonmode",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-261",
    "originalName": "buttontojson",
    "name": "buttontojson",
    "category": "owner",
    "description": "Perintah buttontojson kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}buttontojson",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-262",
    "originalName": "call",
    "name": "call",
    "category": "owner",
    "description": "Perintah call kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}call",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-263",
    "originalName": "callloop",
    "name": "callloop",
    "category": "owner",
    "description": "[DIBLOKIR KEAMANAN] callloop: Pelanggaran Kebijakan: Serangan spam panggilan berulang yang mengganggu kenyamanan pengguna.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}callloop",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Serangan spam panggilan berulang yang mengganggu kenyamanan pengguna.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-264",
    "originalName": "callplay",
    "name": "callplay",
    "category": "owner",
    "description": "Perintah callplay kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}callplay",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-265",
    "originalName": "callqueue",
    "name": "callqueue",
    "category": "owner",
    "description": "Perintah callqueue kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}callqueue",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-266",
    "originalName": "callskip",
    "name": "callskip",
    "category": "owner",
    "description": "Perintah callskip kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}callskip",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-267",
    "originalName": "callstop",
    "name": "callstop",
    "category": "owner",
    "description": "Perintah callstop kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}callstop",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-268",
    "originalName": "cekaccount",
    "name": "cekaccount",
    "category": "owner",
    "description": "Perintah cekaccount kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cekaccount",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-269",
    "originalName": "cekgroupcron",
    "name": "cekgroupcron",
    "category": "owner",
    "description": "Perintah cekgroupcron kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cekgroupcron",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-270",
    "originalName": "cekgroupsewa",
    "name": "cekgroupsewa",
    "category": "owner",
    "description": "Perintah cekgroupsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cekgroupsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-271",
    "originalName": "ceklimitakun",
    "name": "ceklimitakun",
    "category": "owner",
    "description": "Perintah ceklimitakun kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}ceklimitakun",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-272",
    "originalName": "cekopenaikey",
    "name": "cekopenaikey",
    "category": "owner",
    "description": "Perintah cekopenaikey kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cekopenaikey",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-273",
    "originalName": "ceksewabyid",
    "name": "ceksewabyid",
    "category": "owner",
    "description": "Perintah ceksewabyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}ceksewabyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-274",
    "originalName": "chatgroup",
    "name": "chatgroup",
    "category": "owner",
    "description": "Perintah chatgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}chatgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-275",
    "originalName": "claimwibusoftredeem",
    "name": "claimwibusoftredeem",
    "category": "owner",
    "description": "Perintah claimwibusoftredeem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}claimwibusoftredeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-276",
    "originalName": "cleangroupcron",
    "name": "cleangroupcron",
    "category": "owner",
    "description": "Perintah cleangroupcron kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cleangroupcron",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-277",
    "originalName": "cleangroupsewa",
    "name": "cleangroupsewa",
    "category": "owner",
    "description": "Perintah cleangroupsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}cleangroupsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-278",
    "originalName": "clearchat",
    "name": "clearchat",
    "category": "owner",
    "description": "Perintah clearchat kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}clearchat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-279",
    "originalName": "copythumbnail",
    "name": "copythumbnail",
    "category": "owner",
    "description": "Perintah copythumbnail kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}copythumbnail",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-280",
    "originalName": "createbutton",
    "name": "createbutton",
    "category": "owner",
    "description": "Perintah createbutton kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createbutton",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-281",
    "originalName": "createfullbutton",
    "name": "createfullbutton",
    "category": "owner",
    "description": "Perintah createfullbutton kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createfullbutton",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-282",
    "originalName": "createlist",
    "name": "createlist",
    "category": "owner",
    "description": "Perintah createlist kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-283",
    "originalName": "createredeem",
    "name": "createredeem",
    "category": "owner",
    "description": "Perintah createredeem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createredeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-284",
    "originalName": "createtemplate",
    "name": "createtemplate",
    "category": "owner",
    "description": "Perintah createtemplate kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createtemplate",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-285",
    "originalName": "createthumbnail",
    "name": "createthumbnail",
    "category": "owner",
    "description": "Perintah createthumbnail kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}createthumbnail",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-286",
    "originalName": "delbalance",
    "name": "delbalance",
    "category": "owner",
    "description": "Perintah delbalance kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delbalance",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-287",
    "originalName": "delblacklistglobal",
    "name": "delblacklistglobal",
    "category": "owner",
    "description": "Perintah delblacklistglobal kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delblacklistglobal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-288",
    "originalName": "deleteredeem",
    "name": "deleteredeem",
    "category": "owner",
    "description": "Perintah deleteredeem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}deleteredeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-289",
    "originalName": "delfreeautores",
    "name": "delfreeautores",
    "category": "owner",
    "description": "Perintah delfreeautores kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delfreeautores",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-290",
    "originalName": "delfreecommand",
    "name": "delfreecommand",
    "category": "owner",
    "description": "Perintah delfreecommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delfreecommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-291",
    "originalName": "dellevel",
    "name": "dellevel",
    "category": "owner",
    "description": "Perintah dellevel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}dellevel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-292",
    "originalName": "dellimit",
    "name": "dellimit",
    "category": "owner",
    "description": "Perintah dellimit kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}dellimit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-293",
    "originalName": "delpremium",
    "name": "delpremium",
    "category": "owner",
    "description": "Perintah delpremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-294",
    "originalName": "delpremiumgroup",
    "name": "delpremiumgroup",
    "category": "owner",
    "description": "Perintah delpremiumgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delpremiumgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-295",
    "originalName": "delrespon",
    "name": "delrespon",
    "category": "owner",
    "description": "Perintah delrespon kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delrespon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-296",
    "originalName": "delsewa",
    "name": "delsewa",
    "category": "owner",
    "description": "Perintah delsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-297",
    "originalName": "delxp",
    "name": "delxp",
    "category": "owner",
    "description": "Perintah delxp kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}delxp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-298",
    "originalName": "freeautores",
    "name": "freeautores",
    "category": "owner",
    "description": "Perintah freeautores kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}freeautores",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-299",
    "originalName": "freecommand",
    "name": "freecommand",
    "category": "owner",
    "description": "Perintah freecommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}freecommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-300",
    "originalName": "globalgamemode",
    "name": "globalgamemode",
    "category": "owner",
    "description": "Perintah globalgamemode kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}globalgamemode",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-301",
    "originalName": "golink",
    "name": "golink",
    "category": "owner",
    "description": "Perintah golink kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}golink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-302",
    "originalName": "grabcontact",
    "name": "grabcontact",
    "category": "owner",
    "description": "[DIBLOKIR KEAMANAN] grabcontact: Pelanggaran Privasi: Penyedotan nomor kontak pengguna tanpa persetujuan.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}grabcontact",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Privasi: Penyedotan nomor kontak pengguna tanpa persetujuan.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-303",
    "originalName": "greeting",
    "name": "greeting",
    "category": "owner",
    "description": "Perintah greeting kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}greeting",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-304",
    "originalName": "grouponlypremium",
    "name": "grouponlypremium",
    "category": "owner",
    "description": "Perintah grouponlypremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}grouponlypremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-305",
    "originalName": "inforedeem",
    "name": "inforedeem",
    "category": "owner",
    "description": "Perintah inforedeem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}inforedeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-306",
    "originalName": "inviteme",
    "name": "inviteme",
    "category": "owner",
    "description": "Perintah inviteme kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}inviteme",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-307",
    "originalName": "join",
    "name": "join",
    "category": "owner",
    "description": "Perintah join kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}join",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-308",
    "originalName": "leaveall",
    "name": "leaveall",
    "category": "owner",
    "description": "Perintah leaveall kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}leaveall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-309",
    "originalName": "leavegcbyid",
    "name": "leavegcbyid",
    "category": "owner",
    "description": "Perintah leavegcbyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}leavegcbyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-310",
    "originalName": "leavenosewa",
    "name": "leavenosewa",
    "category": "owner",
    "description": "Perintah leavenosewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}leavenosewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-311",
    "originalName": "levellingpc",
    "name": "levellingpc",
    "category": "owner",
    "description": "Perintah levellingpc kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}levellingpc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-312",
    "originalName": "listblacklistglobal",
    "name": "listblacklistglobal",
    "category": "owner",
    "description": "Perintah listblacklistglobal kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listblacklistglobal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-313",
    "originalName": "listcommand",
    "name": "listcommand",
    "category": "owner",
    "description": "Perintah listcommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listcommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-314",
    "originalName": "listfreeautores",
    "name": "listfreeautores",
    "category": "owner",
    "description": "Perintah listfreeautores kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listfreeautores",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-315",
    "originalName": "listfreecommand",
    "name": "listfreecommand",
    "category": "owner",
    "description": "Perintah listfreecommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listfreecommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-316",
    "originalName": "listgroupnosewa",
    "name": "listgroupnosewa",
    "category": "owner",
    "description": "Perintah listgroupnosewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listgroupnosewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-317",
    "originalName": "listpremiumgroup",
    "name": "listpremiumgroup",
    "category": "owner",
    "description": "Perintah listpremiumgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listpremiumgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-318",
    "originalName": "listredeem",
    "name": "listredeem",
    "category": "owner",
    "description": "Perintah listredeem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listredeem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-319",
    "originalName": "listrespon",
    "name": "listrespon",
    "category": "owner",
    "description": "Perintah listrespon kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listrespon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-320",
    "originalName": "listsewa",
    "name": "listsewa",
    "category": "owner",
    "description": "Perintah listsewa kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listsewa",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-321",
    "originalName": "listsewapermanent",
    "name": "listsewapermanent",
    "category": "owner",
    "description": "Perintah listsewapermanent kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}listsewapermanent",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-322",
    "originalName": "mutebc",
    "name": "mutebc",
    "category": "owner",
    "description": "Perintah mutebc kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}mutebc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-323",
    "originalName": "mutebyid",
    "name": "mutebyid",
    "category": "owner",
    "description": "Perintah mutebyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}mutebyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-324",
    "originalName": "mycontacts",
    "name": "mycontacts",
    "category": "owner",
    "description": "[DIBLOKIR KEAMANAN] mycontacts: Pelanggaran Privasi: Ekstraksi buku kontak pribadi.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}mycontacts",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Privasi: Ekstraksi buku kontak pribadi.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-325",
    "originalName": "onlygroup",
    "name": "onlygroup",
    "category": "owner",
    "description": "Perintah onlygroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}onlygroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-326",
    "originalName": "onlyindo",
    "name": "onlyindo",
    "category": "owner",
    "description": "Perintah onlyindo kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}onlyindo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-327",
    "originalName": "onlyprem",
    "name": "onlyprem",
    "category": "owner",
    "description": "Perintah onlyprem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}onlyprem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-328",
    "originalName": "pconlyprem",
    "name": "pconlyprem",
    "category": "owner",
    "description": "Perintah pconlyprem kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}pconlyprem",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-329",
    "originalName": "premiumgroup",
    "name": "premiumgroup",
    "category": "owner",
    "description": "Perintah premiumgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}premiumgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-330",
    "originalName": "promoteme",
    "name": "promoteme",
    "category": "owner",
    "description": "Perintah promoteme kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}promoteme",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-331",
    "originalName": "public",
    "name": "public",
    "category": "owner",
    "description": "Perintah public kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}public",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-332",
    "originalName": "publicbyid",
    "name": "publicbyid",
    "category": "owner",
    "description": "Perintah publicbyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}publicbyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-333",
    "originalName": "queue",
    "name": "queue",
    "category": "owner",
    "description": "Perintah queue kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}queue",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-334",
    "originalName": "rawmessage",
    "name": "rawmessage",
    "category": "owner",
    "description": "Perintah rawmessage kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}rawmessage",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-335",
    "originalName": "react",
    "name": "react",
    "category": "owner",
    "description": "Perintah react kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}react",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-336",
    "originalName": "reactchannel",
    "name": "reactchannel",
    "category": "owner",
    "description": "Perintah reactchannel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}reactchannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-337",
    "originalName": "refreshgroupbyid",
    "name": "refreshgroupbyid",
    "category": "owner",
    "description": "Perintah refreshgroupbyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}refreshgroupbyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-338",
    "originalName": "refreshpremiumlist",
    "name": "refreshpremiumlist",
    "category": "owner",
    "description": "Perintah refreshpremiumlist kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}refreshpremiumlist",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-339",
    "originalName": "resetanonymous",
    "name": "resetanonymous",
    "category": "owner",
    "description": "Perintah resetanonymous kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetanonymous",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-340",
    "originalName": "resetbalance",
    "name": "resetbalance",
    "category": "owner",
    "description": "Perintah resetbalance kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetbalance",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-341",
    "originalName": "resetblacklistglobal",
    "name": "resetblacklistglobal",
    "category": "owner",
    "description": "Perintah resetblacklistglobal kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetblacklistglobal",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-342",
    "originalName": "resetfreeautores",
    "name": "resetfreeautores",
    "category": "owner",
    "description": "Perintah resetfreeautores kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetfreeautores",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-343",
    "originalName": "resetfreecommand",
    "name": "resetfreecommand",
    "category": "owner",
    "description": "Perintah resetfreecommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetfreecommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-344",
    "originalName": "resetlevel",
    "name": "resetlevel",
    "category": "owner",
    "description": "Perintah resetlevel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetlevel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-345",
    "originalName": "resetlimit",
    "name": "resetlimit",
    "category": "owner",
    "description": "Perintah resetlimit kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetlimit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-346",
    "originalName": "resetlimitreceivedgroup",
    "name": "resetlimitreceivedgroup",
    "category": "owner",
    "description": "Perintah resetlimitreceivedgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetlimitreceivedgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-347",
    "originalName": "resetpremium",
    "name": "resetpremium",
    "category": "owner",
    "description": "Perintah resetpremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-348",
    "originalName": "resetresponse",
    "name": "resetresponse",
    "category": "owner",
    "description": "Perintah resetresponse kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetresponse",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-349",
    "originalName": "resetxp",
    "name": "resetxp",
    "category": "owner",
    "description": "Perintah resetxp kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}resetxp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-350",
    "originalName": "searchmessage",
    "name": "searchmessage",
    "category": "owner",
    "description": "Perintah searchmessage kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}searchmessage",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-351",
    "originalName": "self",
    "name": "self",
    "category": "owner",
    "description": "Perintah self kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}self",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-352",
    "originalName": "selfbyid",
    "name": "selfbyid",
    "category": "owner",
    "description": "Perintah selfbyid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}selfbyid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-353",
    "originalName": "setbio",
    "name": "setbio",
    "category": "owner",
    "description": "Perintah setbio kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setbio",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-354",
    "originalName": "setcommand",
    "name": "setcommand",
    "category": "owner",
    "description": "Perintah setcommand kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setcommand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-355",
    "originalName": "setdefaultweltype",
    "name": "setdefaultweltype",
    "category": "owner",
    "description": "Perintah setdefaultweltype kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setdefaultweltype",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-356",
    "originalName": "setlimitgroup",
    "name": "setlimitgroup",
    "category": "owner",
    "description": "Perintah setlimitgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setlimitgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-357",
    "originalName": "setlimitreceivedgroup",
    "name": "setlimitreceivedgroup",
    "category": "owner",
    "description": "Perintah setlimitreceivedgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setlimitreceivedgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-358",
    "originalName": "setname",
    "name": "setname",
    "category": "owner",
    "description": "Perintah setname kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setname",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-359",
    "originalName": "setopenaikey",
    "name": "setopenaikey",
    "category": "owner",
    "description": "Perintah setopenaikey kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setopenaikey",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-360",
    "originalName": "setpp",
    "name": "setpp",
    "category": "owner",
    "description": "Perintah setpp kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setpp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-361",
    "originalName": "setpppanjang",
    "name": "setpppanjang",
    "category": "owner",
    "description": "Perintah setpppanjang kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setpppanjang",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-362",
    "originalName": "setscript",
    "name": "setscript",
    "category": "owner",
    "description": "Perintah setscript kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setscript",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-363",
    "originalName": "setwrsuit",
    "name": "setwrsuit",
    "category": "owner",
    "description": "Perintah setwrsuit kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setwrsuit",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-364",
    "originalName": "setwrttt",
    "name": "setwrttt",
    "category": "owner",
    "description": "Perintah setwrttt kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}setwrttt",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-365",
    "originalName": "spr",
    "name": "spr",
    "category": "owner",
    "description": "Perintah spr kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}spr",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-366",
    "originalName": "sprx",
    "name": "sprx",
    "category": "owner",
    "description": "Perintah sprx kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}sprx",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-367",
    "originalName": "testbutton",
    "name": "testbutton",
    "category": "owner",
    "description": "Perintah testbutton kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}testbutton",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-368",
    "originalName": "topeng",
    "name": "topeng",
    "category": "owner",
    "description": "Perintah topeng kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}topeng",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-369",
    "originalName": "topengx",
    "name": "topengx",
    "category": "owner",
    "description": "Perintah topengx kategori owner",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}topengx",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-370",
    "originalName": "unban",
    "name": "unban",
    "category": "owner",
    "description": "Perintah unban kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}unban",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-371",
    "originalName": "unblock",
    "name": "unblock",
    "category": "owner",
    "description": "Perintah unblock kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}unblock",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-372",
    "originalName": "unreact",
    "name": "unreact",
    "category": "owner",
    "description": "Perintah unreact kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}unreact",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-373",
    "originalName": "unreactchannel",
    "name": "unreactchannel",
    "category": "owner",
    "description": "Perintah unreactchannel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}unreactchannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-374",
    "originalName": "upchannel",
    "name": "upchannel",
    "category": "owner",
    "description": "Perintah upchannel kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upchannel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-375",
    "originalName": "upres",
    "name": "upres",
    "category": "owner",
    "description": "Perintah upres kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upres",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-376",
    "originalName": "upsw",
    "name": "upsw",
    "category": "owner",
    "description": "Perintah upsw kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upsw",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-377",
    "originalName": "upswch",
    "name": "upswch",
    "category": "owner",
    "description": "Perintah upswch kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswch",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-378",
    "originalName": "upswgroup",
    "name": "upswgroup",
    "category": "owner",
    "description": "Perintah upswgroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswgroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-379",
    "originalName": "upswgroupv2byid",
    "name": "upswgroupv2byid",
    "category": "owner",
    "description": "Perintah upswgroupv2byid kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswgroupv2byid",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-380",
    "originalName": "upswmentiongroup",
    "name": "upswmentiongroup",
    "category": "owner",
    "description": "Perintah upswmentiongroup kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswmentiongroup",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-381",
    "originalName": "upswmentiongroupsilent",
    "name": "upswmentiongroupsilent",
    "category": "owner",
    "description": "Perintah upswmentiongroupsilent kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswmentiongroupsilent",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-382",
    "originalName": "upswpremium",
    "name": "upswpremium",
    "category": "owner",
    "description": "Perintah upswpremium kategori owner",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}upswpremium",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-383",
    "originalName": "videocall",
    "name": "videocall",
    "category": "owner",
    "description": "[DIBLOKIR KEAMANAN] videocall: Pelanggaran Kebijakan: Otomasi panggilan video yang berpotensi spam / banned nomor WhatsApp.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "owner"
    ],
    "usage": "/{prefix}videocall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Otomasi panggilan video yang berpotensi spam / banned nomor WhatsApp.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-384",
    "originalName": "alay",
    "name": "alay",
    "category": "random",
    "description": "Perintah alay kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}alay",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-385",
    "originalName": "apakah",
    "name": "apakah",
    "category": "random",
    "description": "Perintah apakah kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}apakah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-386",
    "originalName": "cekk hodam",
    "name": "cekkhodam",
    "category": "random",
    "description": "Perintah cekkhodam kategori random",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekkhodam",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Nama asli dinormalisasi dari \"cekk hodam\" menjadi \"cekkhodam\". Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-387",
    "originalName": "faktaunik",
    "name": "faktaunik",
    "category": "random",
    "description": "Perintah faktaunik kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}faktaunik",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-388",
    "originalName": "husbu",
    "name": "husbu",
    "category": "random",
    "description": "Perintah husbu kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}husbu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-389",
    "originalName": "jadian",
    "name": "jadian",
    "category": "random",
    "description": "Perintah jadian kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}jadian",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-390",
    "originalName": "kapankah",
    "name": "kapankah",
    "category": "random",
    "description": "Perintah kapankah kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}kapankah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-391",
    "originalName": "katabijak",
    "name": "katabijak",
    "category": "random",
    "description": "Perintah katabijak kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}katabijak",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-392",
    "originalName": "loli",
    "name": "loli",
    "category": "random",
    "description": "Perintah loli kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}loli",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-393",
    "originalName": "neko",
    "name": "neko",
    "category": "random",
    "description": "Perintah neko kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}neko",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-394",
    "originalName": "pantun",
    "name": "pantun",
    "category": "random",
    "description": "Perintah pantun kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}pantun",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-395",
    "originalName": "ppcouple",
    "name": "ppcouple",
    "category": "random",
    "description": "Perintah ppcouple kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ppcouple",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-396",
    "originalName": "puisi",
    "name": "puisi",
    "category": "random",
    "description": "Perintah puisi kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}puisi",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-397",
    "originalName": "quotesanime",
    "name": "quotesanime",
    "category": "random",
    "description": "Perintah quotesanime kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}quotesanime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-398",
    "originalName": "randomanime",
    "name": "randomanime",
    "category": "random",
    "description": "Perintah randomanime kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}randomanime",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-399",
    "originalName": "randommeme",
    "name": "randommeme",
    "category": "random",
    "description": "Perintah randommeme kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}randommeme",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-400",
    "originalName": "randomnumber",
    "name": "randomnumber",
    "category": "random",
    "description": "Perintah randomnumber kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}randomnumber",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-401",
    "originalName": "randomtag",
    "name": "randomtag",
    "category": "random",
    "description": "Perintah randomtag kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}randomtag",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-402",
    "originalName": "rate",
    "name": "rate",
    "category": "random",
    "description": "Perintah rate kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}rate",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-403",
    "originalName": "siapakah",
    "name": "siapakah",
    "category": "random",
    "description": "Perintah siapakah kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}siapakah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-404",
    "originalName": "waifu",
    "name": "waifu",
    "category": "random",
    "description": "Perintah waifu kategori random",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}waifu",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-405",
    "originalName": "alkitab",
    "name": "alkitab",
    "category": "search",
    "description": "Perintah alkitab kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}alkitab",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-406",
    "originalName": "alquranaudio",
    "name": "alquranaudio",
    "category": "search",
    "description": "Perintah alquranaudio kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}alquranaudio",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-407",
    "originalName": "artinama",
    "name": "artinama",
    "category": "search",
    "description": "Perintah artinama kategori search",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}artinama",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-408",
    "originalName": "brainly",
    "name": "brainly",
    "category": "search",
    "description": "Perintah brainly kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}brainly",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-409",
    "originalName": "cekidff",
    "name": "cekidff",
    "category": "search",
    "description": "Perintah cekidff kategori search",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekidff",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-410",
    "originalName": "cekidml",
    "name": "cekidml",
    "category": "search",
    "description": "Perintah cekidml kategori search",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekidml",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-411",
    "originalName": "cuaca",
    "name": "cuaca",
    "category": "search",
    "description": "Perintah cuaca kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cuaca",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-412",
    "originalName": "googleimage",
    "name": "googleimage",
    "category": "search",
    "description": "Perintah googleimage kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}googleimage",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-413",
    "originalName": "igstalk",
    "name": "igstalk",
    "category": "search",
    "description": "Perintah igstalk kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}igstalk",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-414",
    "originalName": "ipchecker",
    "name": "ipchecker",
    "category": "search",
    "description": "Perintah ipchecker kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ipchecker",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-415",
    "originalName": "jadwalshalat",
    "name": "jadwalshalat",
    "category": "search",
    "description": "Perintah jadwalshalat kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}jadwalshalat",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-416",
    "originalName": "lirik",
    "name": "lirik",
    "category": "search",
    "description": "Perintah lirik kategori search",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}lirik",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-417",
    "originalName": "otakudesu",
    "name": "otakudesu",
    "category": "search",
    "description": "Perintah otakudesu kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}otakudesu",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-418",
    "originalName": "otakudesuinfo",
    "name": "otakudesuinfo",
    "category": "search",
    "description": "Perintah otakudesuinfo kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}otakudesuinfo",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-419",
    "originalName": "otakudesuongoing",
    "name": "otakudesuongoing",
    "category": "search",
    "description": "Perintah otakudesuongoing kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}otakudesuongoing",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-420",
    "originalName": "pinterest",
    "name": "pinterest",
    "category": "search",
    "description": "Perintah pinterest kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}pinterest",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-421",
    "originalName": "play",
    "name": "play",
    "category": "search",
    "description": "Perintah play kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}play",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-422",
    "originalName": "wikipedia",
    "name": "wikipedia",
    "category": "search",
    "description": "Perintah wikipedia kategori search",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}wikipedia",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-423",
    "originalName": "ytsearch",
    "name": "ytsearch",
    "category": "search",
    "description": "Perintah ytsearch kategori search",
    "aliases": [],
    "status": "NEEDS_API",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ytsearch",
    "requiresApi": true,
    "apiProvider": "External Provider / Web Scraper Service",
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-424",
    "originalName": "attp",
    "name": "attp",
    "category": "sticker",
    "description": "Perintah attp kategori sticker",
    "aliases": [
      "ttp"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}attp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-425",
    "originalName": "brat",
    "name": "brat",
    "category": "sticker",
    "description": "Perintah brat kategori sticker",
    "aliases": [
      "bratgenerator"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}brat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-426",
    "originalName": "brat2",
    "name": "brat2",
    "category": "sticker",
    "description": "Perintah brat2 kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}brat2",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-427",
    "originalName": "bratvideo",
    "name": "bratvideo",
    "category": "sticker",
    "description": "Perintah bratvideo kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bratvideo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-428",
    "originalName": "createstickerpack",
    "name": "createstickerpack",
    "category": "sticker",
    "description": "Perintah createstickerpack kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}createstickerpack",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-429",
    "originalName": "delsetwm",
    "name": "delsetwm",
    "category": "sticker",
    "description": "Perintah delsetwm kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}delsetwm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-430",
    "originalName": "emojisticker",
    "name": "emojisticker",
    "category": "sticker",
    "description": "Perintah emojisticker kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}emojisticker",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-431",
    "originalName": "quickchat",
    "name": "quickchat",
    "category": "sticker",
    "description": "Perintah quickchat kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}quickchat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-432",
    "originalName": "semoji",
    "name": "semoji",
    "category": "sticker",
    "description": "Perintah semoji kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}semoji",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-433",
    "originalName": "semojimix",
    "name": "semojimix",
    "category": "sticker",
    "description": "Perintah semojimix kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}semojimix",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-434",
    "originalName": "setwm",
    "name": "setwm",
    "category": "sticker",
    "description": "Perintah setwm kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}setwm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-435",
    "originalName": "smeme",
    "name": "smeme",
    "category": "sticker",
    "description": "Perintah smeme kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}smeme",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-436",
    "originalName": "snobg",
    "name": "snobg",
    "category": "sticker",
    "description": "Perintah snobg kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}snobg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-437",
    "originalName": "sticker",
    "name": "sticker",
    "category": "sticker",
    "description": "Perintah sticker kategori sticker",
    "aliases": [
      "s",
      "stiker",
      "sgif"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sticker",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-438",
    "originalName": "stickercircle",
    "name": "stickercircle",
    "category": "sticker",
    "description": "Perintah stickercircle kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}stickercircle",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-439",
    "originalName": "stickerly",
    "name": "stickerly",
    "category": "sticker",
    "description": "Perintah stickerly kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}stickerly",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-440",
    "originalName": "stickerwm",
    "name": "stickerwm",
    "category": "sticker",
    "description": "Perintah stickerwm kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}stickerwm",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-441",
    "originalName": "takesticker",
    "name": "takesticker",
    "category": "sticker",
    "description": "Perintah takesticker kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}takesticker",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-442",
    "originalName": "telestick",
    "name": "telestick",
    "category": "sticker",
    "description": "Perintah telestick kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}telestick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-443",
    "originalName": "toimg",
    "name": "toimg",
    "category": "sticker",
    "description": "Perintah toimg kategori sticker",
    "aliases": [
      "toimage",
      "tovid"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}toimg",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-444",
    "originalName": "trigger",
    "name": "trigger",
    "category": "sticker",
    "description": "Perintah trigger kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}trigger",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-445",
    "originalName": "ttp",
    "name": "ttp",
    "category": "sticker",
    "description": "Perintah ttp kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ttp",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-446",
    "originalName": "ziptelestick",
    "name": "ziptelestick",
    "category": "sticker",
    "description": "Perintah ziptelestick kategori sticker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ziptelestick",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-447",
    "originalName": "avangers",
    "name": "avangers",
    "category": "textmaker",
    "description": "Perintah avangers kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}avangers",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-448",
    "originalName": "avangers",
    "name": "avangers",
    "category": "textmaker",
    "description": "Perintah avangers kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}avangers",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-449",
    "originalName": "batman",
    "name": "batman",
    "category": "textmaker",
    "description": "Perintah batman kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}batman",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-450",
    "originalName": "bear",
    "name": "bear",
    "category": "textmaker",
    "description": "Perintah bear kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bear",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-451",
    "originalName": "bear",
    "name": "bear",
    "category": "textmaker",
    "description": "Perintah bear kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bear",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-452",
    "originalName": "bisnissign",
    "name": "bisnissign",
    "category": "textmaker",
    "description": "Perintah bisnissign kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bisnissign",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-453",
    "originalName": "blackpink",
    "name": "blackpink",
    "category": "textmaker",
    "description": "Perintah blackpink kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}blackpink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-454",
    "originalName": "blankpink",
    "name": "blankpink",
    "category": "textmaker",
    "description": "Perintah blankpink kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}blankpink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-455",
    "originalName": "bokeh",
    "name": "bokeh",
    "category": "textmaker",
    "description": "Perintah bokeh kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bokeh",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-456",
    "originalName": "bokeh",
    "name": "bokeh",
    "category": "textmaker",
    "description": "Perintah bokeh kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bokeh",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-457",
    "originalName": "cartoon",
    "name": "cartoon",
    "category": "textmaker",
    "description": "Perintah cartoon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cartoon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-458",
    "originalName": "cartoon",
    "name": "cartoon",
    "category": "textmaker",
    "description": "Perintah cartoon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cartoon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-459",
    "originalName": "cloud",
    "name": "cloud",
    "category": "textmaker",
    "description": "Perintah cloud kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cloud",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-460",
    "originalName": "cloud",
    "name": "cloud",
    "category": "textmaker",
    "description": "Perintah cloud kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cloud",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-461",
    "originalName": "colorneon",
    "name": "colorneon",
    "category": "textmaker",
    "description": "Perintah colorneon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}colorneon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-462",
    "originalName": "deadpool",
    "name": "deadpool",
    "category": "textmaker",
    "description": "Perintah deadpool kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}deadpool",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-463",
    "originalName": "digitalglitch",
    "name": "digitalglitch",
    "category": "textmaker",
    "description": "Perintah digitalglitch kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}digitalglitch",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-464",
    "originalName": "dropwater",
    "name": "dropwater",
    "category": "textmaker",
    "description": "Perintah dropwater kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}dropwater",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-465",
    "originalName": "fflogo",
    "name": "fflogo",
    "category": "textmaker",
    "description": "Perintah fflogo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fflogo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-466",
    "originalName": "firework",
    "name": "firework",
    "category": "textmaker",
    "description": "Perintah firework kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}firework",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-467",
    "originalName": "firework",
    "name": "firework",
    "category": "textmaker",
    "description": "Perintah firework kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}firework",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-468",
    "originalName": "glitch",
    "name": "glitch",
    "category": "textmaker",
    "description": "Perintah glitch kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}glitch",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-469",
    "originalName": "glitch",
    "name": "glitch",
    "category": "textmaker",
    "description": "Perintah glitch kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}glitch",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-470",
    "originalName": "glow",
    "name": "glow",
    "category": "textmaker",
    "description": "Perintah glow kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}glow",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-471",
    "originalName": "glow",
    "name": "glow",
    "category": "textmaker",
    "description": "Perintah glow kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}glow",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-472",
    "originalName": "graffiti",
    "name": "graffiti",
    "category": "textmaker",
    "description": "Perintah graffiti kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}graffiti",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-473",
    "originalName": "graffiti",
    "name": "graffiti",
    "category": "textmaker",
    "description": "Perintah graffiti kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}graffiti",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-474",
    "originalName": "greenneon",
    "name": "greenneon",
    "category": "textmaker",
    "description": "Perintah greenneon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}greenneon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-475",
    "originalName": "greenneon",
    "name": "greenneon",
    "category": "textmaker",
    "description": "Perintah greenneon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}greenneon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-476",
    "originalName": "halloween",
    "name": "halloween",
    "category": "textmaker",
    "description": "Perintah halloween kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}halloween",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-477",
    "originalName": "halloween",
    "name": "halloween",
    "category": "textmaker",
    "description": "Perintah halloween kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}halloween",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-478",
    "originalName": "holo",
    "name": "holo",
    "category": "textmaker",
    "description": "Perintah holo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}holo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-479",
    "originalName": "lightglow",
    "name": "lightglow",
    "category": "textmaker",
    "description": "Perintah lightglow kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}lightglow",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-480",
    "originalName": "magma",
    "name": "magma",
    "category": "textmaker",
    "description": "Perintah magma kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}magma",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-481",
    "originalName": "marvel",
    "name": "marvel",
    "category": "textmaker",
    "description": "Perintah marvel kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}marvel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-482",
    "originalName": "marvel",
    "name": "marvel",
    "category": "textmaker",
    "description": "Perintah marvel kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}marvel",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-483",
    "originalName": "narutologo",
    "name": "narutologo",
    "category": "textmaker",
    "description": "Perintah narutologo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}narutologo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-484",
    "originalName": "narutologo",
    "name": "narutologo",
    "category": "textmaker",
    "description": "Perintah narutologo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}narutologo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-485",
    "originalName": "neon",
    "name": "neon",
    "category": "textmaker",
    "description": "Perintah neon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}neon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-486",
    "originalName": "neon",
    "name": "neon",
    "category": "textmaker",
    "description": "Perintah neon kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}neon",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-487",
    "originalName": "neonlight",
    "name": "neonlight",
    "category": "textmaker",
    "description": "Perintah neonlight kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}neonlight",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-488",
    "originalName": "neonlight",
    "name": "neonlight",
    "category": "textmaker",
    "description": "Perintah neonlight kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}neonlight",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-489",
    "originalName": "pencil",
    "name": "pencil",
    "category": "textmaker",
    "description": "Perintah pencil kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}pencil",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-490",
    "originalName": "phlogo",
    "name": "phlogo",
    "category": "textmaker",
    "description": "Perintah phlogo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}phlogo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-491",
    "originalName": "phlogo",
    "name": "phlogo",
    "category": "textmaker",
    "description": "Perintah phlogo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}phlogo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-492",
    "originalName": "pubglogo",
    "name": "pubglogo",
    "category": "textmaker",
    "description": "Perintah pubglogo kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}pubglogo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-493",
    "originalName": "sand",
    "name": "sand",
    "category": "textmaker",
    "description": "Perintah sand kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-494",
    "originalName": "sand",
    "name": "sand",
    "category": "textmaker",
    "description": "Perintah sand kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sand",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-495",
    "originalName": "sky",
    "name": "sky",
    "category": "textmaker",
    "description": "Perintah sky kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sky",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-496",
    "originalName": "sky",
    "name": "sky",
    "category": "textmaker",
    "description": "Perintah sky kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}sky",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-497",
    "originalName": "spacetext",
    "name": "spacetext",
    "category": "textmaker",
    "description": "Perintah spacetext kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}spacetext",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-498",
    "originalName": "spacetext",
    "name": "spacetext",
    "category": "textmaker",
    "description": "Perintah spacetext kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}spacetext",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-499",
    "originalName": "thor",
    "name": "thor",
    "category": "textmaker",
    "description": "Perintah thor kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}thor",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-500",
    "originalName": "thor",
    "name": "thor",
    "category": "textmaker",
    "description": "Perintah thor kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}thor",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-501",
    "originalName": "thunder",
    "name": "thunder",
    "category": "textmaker",
    "description": "Perintah thunder kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}thunder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-502",
    "originalName": "thunder",
    "name": "thunder",
    "category": "textmaker",
    "description": "Perintah thunder kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}thunder",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-503",
    "originalName": "watercolor",
    "name": "watercolor",
    "category": "textmaker",
    "description": "Perintah watercolor kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}watercolor",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-504",
    "originalName": "wetglass",
    "name": "wetglass",
    "category": "textmaker",
    "description": "Perintah wetglass kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}wetglass",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-505",
    "originalName": "window",
    "name": "window",
    "category": "textmaker",
    "description": "Perintah window kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}window",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-506",
    "originalName": "window",
    "name": "window",
    "category": "textmaker",
    "description": "Perintah window kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}window",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-507",
    "originalName": "wolf",
    "name": "wolf",
    "category": "textmaker",
    "description": "Perintah wolf kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}wolf",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-508",
    "originalName": "wolf",
    "name": "wolf",
    "category": "textmaker",
    "description": "Perintah wolf kategori textmaker",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}wolf",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 2,
    "isDuplicate": true
  },
  {
    "id": "cmd-509",
    "originalName": "bass",
    "name": "bass",
    "category": "tools",
    "description": "Perintah bass kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bass",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-510",
    "originalName": "blown",
    "name": "blown",
    "category": "tools",
    "description": "Perintah blown kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}blown",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-511",
    "originalName": "blur",
    "name": "blur",
    "category": "tools",
    "description": "Perintah blur kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}blur",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-512",
    "originalName": "bratbahlil",
    "name": "bratbahlil",
    "category": "tools",
    "description": "Perintah bratbahlil kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bratbahlil",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-513",
    "originalName": "bratspongebob",
    "name": "bratspongebob",
    "category": "tools",
    "description": "Perintah bratspongebob kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}bratspongebob",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-514",
    "originalName": "cekplatform",
    "name": "cekplatform",
    "category": "tools",
    "description": "Perintah cekplatform kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}cekplatform",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-515",
    "originalName": "confess",
    "name": "confess",
    "category": "tools",
    "description": "Perintah confess kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}confess",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-516",
    "originalName": "dbase64",
    "name": "dbase64",
    "category": "tools",
    "description": "Perintah dbase64 kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}dbase64",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-517",
    "originalName": "dec",
    "name": "dec",
    "category": "tools",
    "description": "Perintah dec kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}dec",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-518",
    "originalName": "deep",
    "name": "deep",
    "category": "tools",
    "description": "Perintah deep kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}deep",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-519",
    "originalName": "dhex",
    "name": "dhex",
    "category": "tools",
    "description": "Perintah dhex kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}dhex",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-520",
    "originalName": "ebase64",
    "name": "ebase64",
    "category": "tools",
    "description": "Perintah ebase64 kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ebase64",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-521",
    "originalName": "ehex",
    "name": "ehex",
    "category": "tools",
    "description": "Perintah ehex kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ehex",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-522",
    "originalName": "enc",
    "name": "enc",
    "category": "tools",
    "description": "Perintah enc kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}enc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-523",
    "originalName": "fakebca",
    "name": "fakebca",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakebca: Pelanggaran Kebijakan: Pemalsuan bukti transfer Bank BCA dan penipuan transaksi finansial.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakebca",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan bukti transfer Bank BCA dan penipuan transaksi finansial.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-524",
    "originalName": "fakecall",
    "name": "fakecall",
    "category": "tools",
    "description": "Perintah fakecall kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakecall",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-525",
    "originalName": "fakechios",
    "name": "fakechios",
    "category": "tools",
    "description": "Perintah fakechios kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakechios",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-526",
    "originalName": "fakedana",
    "name": "fakedana",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakedana: Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet DANA.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakedana",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet DANA.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-527",
    "originalName": "fakegc",
    "name": "fakegc",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakegc: Pelanggaran Kebijakan: Pemalsuan tangkapan layar obrolan grup untuk impersonasi/fitnah.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakegc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan tangkapan layar obrolan grup untuk impersonasi/fitnah.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-528",
    "originalName": "fakeml",
    "name": "fakeml",
    "category": "tools",
    "description": "Perintah fakeml kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakeml",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-529",
    "originalName": "fakeovo",
    "name": "fakeovo",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakeovo: Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet OVO.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakeovo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet OVO.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-530",
    "originalName": "fakereply",
    "name": "fakereply",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakereply: Pelanggaran Kebijakan: Pemalsuan balasan chat pesan orang lain.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakereply",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan balasan chat pesan orang lain.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-531",
    "originalName": "fakestoryig",
    "name": "fakestoryig",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] fakestoryig: Pelanggaran Kebijakan: Pemalsuan story Instagram.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fakestoryig",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan story Instagram.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-532",
    "originalName": "faketweet",
    "name": "faketweet",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] faketweet: Pelanggaran Kebijakan: Pemalsuan tangkapan layar tweet media sosial.",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}faketweet",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Kebijakan: Pemalsuan tangkapan layar tweet media sosial.",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-533",
    "originalName": "fast",
    "name": "fast",
    "category": "tools",
    "description": "Perintah fast kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fast",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-534",
    "originalName": "fat",
    "name": "fat",
    "category": "tools",
    "description": "Perintah fat kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}fat",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-535",
    "originalName": "folio",
    "name": "folio",
    "category": "tools",
    "description": "Perintah folio kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}folio",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-536",
    "originalName": "font",
    "name": "font",
    "category": "tools",
    "description": "Perintah font kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}font",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-537",
    "originalName": "halah",
    "name": "halah",
    "category": "tools",
    "description": "Perintah halah kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}halah",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-538",
    "originalName": "hartatahta",
    "name": "hartatahta",
    "category": "tools",
    "description": "Perintah hartatahta kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hartatahta",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-539",
    "originalName": "hdsw",
    "name": "hdsw",
    "category": "tools",
    "description": "Perintah hdsw kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hdsw",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-540",
    "originalName": "hdvideo",
    "name": "hdvideo",
    "category": "tools",
    "description": "Perintah hdvideo kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hdvideo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-541",
    "originalName": "heleh",
    "name": "heleh",
    "category": "tools",
    "description": "Perintah heleh kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}heleh",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-542",
    "originalName": "hilih",
    "name": "hilih",
    "category": "tools",
    "description": "Perintah hilih kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}hilih",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-543",
    "originalName": "holoh",
    "name": "holoh",
    "category": "tools",
    "description": "Perintah holoh kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}holoh",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-544",
    "originalName": "huluh",
    "name": "huluh",
    "category": "tools",
    "description": "Perintah huluh kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}huluh",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-545",
    "originalName": "imagetopdf",
    "name": "imagetopdf",
    "category": "tools",
    "description": "Perintah imagetopdf kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}imagetopdf",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-546",
    "originalName": "iqc",
    "name": "iqc",
    "category": "tools",
    "description": "Perintah iqc kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}iqc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-547",
    "originalName": "iqcdark",
    "name": "iqcdark",
    "category": "tools",
    "description": "Perintah iqcdark kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}iqcdark",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-548",
    "originalName": "iqcimage",
    "name": "iqcimage",
    "category": "tools",
    "description": "Perintah iqcimage kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}iqcimage",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-549",
    "originalName": "iqcpink",
    "name": "iqcpink",
    "category": "tools",
    "description": "Perintah iqcpink kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}iqcpink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-550",
    "originalName": "kinetictext",
    "name": "kinetictext",
    "category": "tools",
    "description": "Perintah kinetictext kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}kinetictext",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-551",
    "originalName": "kirim",
    "name": "kirim",
    "category": "tools",
    "description": "Perintah kirim kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}kirim",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-552",
    "originalName": "menfess",
    "name": "menfess",
    "category": "tools",
    "description": "Perintah menfess kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}menfess",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-553",
    "originalName": "nightcore",
    "name": "nightcore",
    "category": "tools",
    "description": "Perintah nightcore kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}nightcore",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-554",
    "originalName": "nulis",
    "name": "nulis",
    "category": "tools",
    "description": "Perintah nulis kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}nulis",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-555",
    "originalName": "ocr",
    "name": "ocr",
    "category": "tools",
    "description": "Perintah ocr kategori tools",
    "aliases": [
      "readtext",
      "scan"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ocr",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-556",
    "originalName": "poll",
    "name": "poll",
    "category": "tools",
    "description": "Perintah poll kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}poll",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-557",
    "originalName": "ptvtovideo",
    "name": "ptvtovideo",
    "category": "tools",
    "description": "Perintah ptvtovideo kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}ptvtovideo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-558",
    "originalName": "qrcode",
    "name": "qrcode",
    "category": "tools",
    "description": "Perintah qrcode kategori tools",
    "aliases": [
      "qr",
      "qrgen"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}qrcode",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-559",
    "originalName": "qrcodereader",
    "name": "qrcodereader",
    "category": "tools",
    "description": "Perintah qrcodereader kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}qrcodereader",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-560",
    "originalName": "readmore",
    "name": "readmore",
    "category": "tools",
    "description": "Perintah readmore kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}readmore",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-561",
    "originalName": "readviewonce",
    "name": "readviewonce",
    "category": "tools",
    "description": "[DIBLOKIR KEAMANAN] readviewonce: Pelanggaran Privasi Pengguna WhatsApp: Menerobos batas privasi pesan sekali lihat (view-once).",
    "aliases": [],
    "status": "BLOCKED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}readviewonce",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "critical",
    "blockedReason": "Pelanggaran Privasi Pengguna WhatsApp: Menerobos batas privasi pesan sekali lihat (view-once).",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-562",
    "originalName": "removebackground",
    "name": "removebackground",
    "category": "tools",
    "description": "Perintah removebackground kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}removebackground",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-563",
    "originalName": "reverse",
    "name": "reverse",
    "category": "tools",
    "description": "Perintah reverse kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}reverse",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-564",
    "originalName": "robot",
    "name": "robot",
    "category": "tools",
    "description": "Perintah robot kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}robot",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-565",
    "originalName": "screenshot",
    "name": "screenshot",
    "category": "tools",
    "description": "Perintah screenshot kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}screenshot",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-566",
    "originalName": "shortlink",
    "name": "shortlink",
    "category": "tools",
    "description": "Perintah shortlink kategori tools",
    "aliases": [
      "short",
      "tinyurl"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}shortlink",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-567",
    "originalName": "slow",
    "name": "slow",
    "category": "tools",
    "description": "Perintah slow kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}slow",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-568",
    "originalName": "smooth",
    "name": "smooth",
    "category": "tools",
    "description": "Perintah smooth kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}smooth",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-569",
    "originalName": "spotifycard",
    "name": "spotifycard",
    "category": "tools",
    "description": "Perintah spotifycard kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}spotifycard",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-570",
    "originalName": "swhd",
    "name": "swhd",
    "category": "tools",
    "description": "Perintah swhd kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}swhd",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-571",
    "originalName": "tiktokqc",
    "name": "tiktokqc",
    "category": "tools",
    "description": "Perintah tiktokqc kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tiktokqc",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-572",
    "originalName": "tolive",
    "name": "tolive",
    "category": "tools",
    "description": "Perintah tolive kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tolive",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-573",
    "originalName": "tomp3",
    "name": "tomp3",
    "category": "tools",
    "description": "Perintah tomp3 kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tomp3",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-574",
    "originalName": "toquickvideo",
    "name": "toquickvideo",
    "category": "tools",
    "description": "Perintah toquickvideo kategori tools",
    "aliases": [],
    "status": "NEEDS_SPECIFICATION",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}toquickvideo",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false,
    "notes": "Memerlukan spesifikasi I/O lebih detail dari pemilik bot"
  },
  {
    "id": "cmd-575",
    "originalName": "tourl",
    "name": "tourl",
    "category": "tools",
    "description": "Perintah tourl kategori tools",
    "aliases": [
      "upload",
      "telegraph"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tourl",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-576",
    "originalName": "toviewonce",
    "name": "toviewonce",
    "category": "tools",
    "description": "Perintah toviewonce kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}toviewonce",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-577",
    "originalName": "tovn",
    "name": "tovn",
    "category": "tools",
    "description": "Perintah tovn kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tovn",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-578",
    "originalName": "translate",
    "name": "translate",
    "category": "tools",
    "description": "Perintah translate kategori tools",
    "aliases": [
      "tr",
      "terjemah"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}translate",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-579",
    "originalName": "tts",
    "name": "tts",
    "category": "tools",
    "description": "Perintah tts kategori tools",
    "aliases": [
      "voice",
      "say"
    ],
    "status": "IMPLEMENTED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tts",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-580",
    "originalName": "tts2",
    "name": "tts2",
    "category": "tools",
    "description": "Perintah tts2 kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tts2",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-581",
    "originalName": "tupai",
    "name": "tupai",
    "category": "tools",
    "description": "Perintah tupai kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}tupai",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-582",
    "originalName": "upscale",
    "name": "upscale",
    "category": "tools",
    "description": "Perintah upscale kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}upscale",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  },
  {
    "id": "cmd-583",
    "originalName": "wait",
    "name": "wait",
    "category": "tools",
    "description": "Perintah wait kategori tools",
    "aliases": [],
    "status": "PLANNED",
    "permissions": [
      "all"
    ],
    "usage": "/{prefix}wait",
    "requiresApi": false,
    "isFree": true,
    "securityRisk": "low",
    "duplicateCount": 1,
    "isDuplicate": false
  }
];
