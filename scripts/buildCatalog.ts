/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from 'fs';
import path from 'path';

// Complete raw lists directly extracted from user reference list
const rawCategories: Record<string, string[]> = {
  ai: [
    'aiimage', 'aiimg', 'byenexara', 'byeopenai', 'editimg', 'hitamkan',
    'jadianime', 'nexara', 'openai', 'toanime', 'voicejapan'
  ],
  download: [
    'douyin', 'facebook', 'igdl', 'igreel', 'igstory', 'igtv',
    'mediafire', 'otakudesudl', 'pindl', 'spotify', 'threads', 'tiktokmusic',
    'tiktoknowm', 'tiktokslidevideo', 'tiktokwm', 'twitterdl', 'ytmp3', 'ytmp4'
  ],
  game: [
    'akinator', 'akinatorstart', 'akinatorstop', 'asahotak', 'bom', 'buylimit',
    'caklontong', 'dare', 'family100', 'hint', 'math', 'nyerah', 'redeem',
    'sambungkata', 'siapakahaku', 'sloth', 'suit', 'susunkalimat', 'susunkata',
    'susunlirik', 'tebakbendera', 'tebakbom', 'tebakchara', 'tebakemoji',
    'tebakgambar', 'tebakkata', 'tebaklagu', 'tebaklaguanime', 'tebaklagukpop',
    'tekateki', 'tfbalance', 'tictactoe', 'truth', 'ulartangga', 'undercover',
    'uno', 'werewolf', 'werewolf2',
    // 48Group additions
    'tebakmember', 'tebakjiko', 'tebaksetlist', 'trivia48', 'susunmember',
    'gachakartu', 'koleksikartu', 'leaderboard48', 'misiharian'
  ],
  general: [
    'changelog', 'everyone', 'infobot', 'menu', 'owner', 'ping',
    'resend', 'runtime', 'sender', 'streak', 'version'
  ],
  group: [
    'absen', 'add', 'addalarm', 'addbadword', 'addlist', 'addpoin', 'addreminder',
    'addwhitelist', 'afk', 'antibadword', 'antibadwordnokick', 'antibot', 'antidelete',
    'antigroupsw', 'antikudeta', 'antilink', 'antilinkchannel', 'antilinknokick',
    'antilinkuniversal', 'antiluar', 'antimentionsw', 'antisticker', 'antiviewonce',
    'antiwame', 'antiwamenokick', 'banmember', 'blacklist', 'cekabsen', 'cekidgroup',
    'cekpoint', 'ceksewa', 'cekwarn', 'createschedulecall', 'delalarm', 'delbadword',
    'delblacklist', 'delete', 'deleteabsen', 'deletepoin', 'deletetotalpesan', 'dellist',
    'delreminder', 'delultahku', 'delwarn', 'delwhitelist', 'demote', 'demotedetector',
    'descgc', 'disablealarm', 'done', 'enablealarm', 'gamemode', 'getlist', 'groupadmin',
    'groupinfo', 'groupschedule', 'groupsetting', 'grouptime', 'hidetag', 'kick',
    'kickme', 'leavegc', 'left', 'levelling', 'linkgc', 'list', 'listalarm',
    'listbadword', 'listbanmember', 'listblacklist', 'listonline', 'listpoint',
    'listreminder', 'listtotalpesan', 'listultah', 'listwarn', 'listwhitelist',
    'mulaiabsen', 'mute', 'pinmsg', 'promote', 'promotedetector', 'proses',
    'refreshgroup', 'reqjoin', 'resetalarm', 'resetbadword', 'resetblacklist',
    'resetlist', 'resetpoint', 'resetreminder', 'resettotalpesan', 'resetultahku',
    'resetwarn', 'revokelink', 'setclose', 'setdescgc', 'setdone', 'setleft',
    'setlefttype', 'setnamegc', 'setopen', 'setppgc', 'setppgcpanjang', 'setproses',
    'setwarn', 'setwelcome', 'setwelcometype', 'streakgrup', 'tagall', 'tfpoint',
    'totag', 'totalpesan', 'ultahku', 'unbanmember', 'unpinmsg', 'updatelist',
    'uplist', 'upswgroupv2', 'vote', 'warn', 'welcome'
  ],
  info: [
    'balance', 'cekchannel', 'cekpremium', 'infocovid', 'infogempa', 'infounsur',
    'kodebahasa', 'level', 'limit', 'listban', 'listblock', 'listgroup', 'listpremium',
    'profile', 'report', 'status', 'topglobal', 'toplocal'
  ],
  owner: [
    'accadmininvitechannel', 'addbalance', 'addlevel', 'addlimit', 'addpremium',
    'addpremiumgroup', 'addrespon', 'addsewa', 'addsewathisgroup', 'addxp',
    'anticall', 'anticallnoblock', 'antideletepc', 'autoleavegcnosewa', 'autonexara',
    'autoread', 'autotype', 'ban', 'bccancel', 'bcconfirm', 'bcgchidetag', 'bcgroup',
    'bchidetag', 'bcmember', 'bcpc', 'bcpremium', 'bcsewa', 'bcstat', 'blacklistglobal',
    'block', 'blockpc', 'broadcast', 'buttonmode', 'buttontojson', 'call', 'callloop',
    'callplay', 'callqueue', 'callskip', 'callstop', 'cekaccount', 'cekgroupcron',
    'cekgroupsewa', 'ceklimitakun', 'cekopenaikey', 'ceksewabyid', 'chatgroup',
    'claimwibusoftredeem', 'cleangroupcron', 'cleangroupsewa', 'clearchat',
    'copythumbnail', 'createbutton', 'createfullbutton', 'createlist', 'createredeem',
    'createtemplate', 'createthumbnail', 'delbalance', 'delblacklistglobal',
    'deleteredeem', 'delfreeautores', 'delfreecommand', 'dellevel', 'dellimit',
    'delpremium', 'delpremiumgroup', 'delrespon', 'delsewa', 'delxp', 'freeautores',
    'freecommand', 'globalgamemode', 'golink', 'grabcontact', 'greeting',
    'grouponlypremium', 'inforedeem', 'inviteme', 'join', 'leaveall', 'leavegcbyid',
    'leavenosewa', 'levellingpc', 'listblacklistglobal', 'listcommand', 'listfreeautores',
    'listfreecommand', 'listgroupnosewa', 'listpremiumgroup', 'listredeem',
    'listrespon', 'listsewa', 'listsewapermanent', 'mutebc', 'mutebyid', 'mycontacts',
    'onlygroup', 'onlyindo', 'onlyprem', 'pconlyprem', 'premiumgroup', 'promoteme',
    'public', 'publicbyid', 'queue', 'rawmessage', 'react', 'reactchannel',
    'refreshgroupbyid', 'refreshpremiumlist', 'resetanonymous', 'resetbalance',
    'resetblacklistglobal', 'resetfreeautores', 'resetfreecommand', 'resetlevel',
    'resetlimit', 'resetlimitreceivedgroup', 'resetpremium', 'resetresponse',
    'resetxp', 'searchmessage', 'self', 'selfbyid', 'setbio', 'setcommand',
    'setdefaultweltype', 'setlimitgroup', 'setlimitreceivedgroup', 'setname',
    'setopenaikey', 'setpp', 'setpppanjang', 'setscript', 'setwrsuit', 'setwrttt',
    'spr', 'sprx', 'testbutton', 'topeng', 'topengx', 'unban', 'unblock', 'unreact',
    'unreactchannel', 'upchannel', 'upres', 'upsw', 'upswch', 'upswgroup',
    'upswgroupv2byid', 'upswmentiongroup', 'upswmentiongroupsilent', 'upswpremium',
    'videocall'
  ],
  random: [
    'alay', 'apakah', 'cekk hodam', 'faktaunik', 'husbu', 'jadian', 'kapankah',
    'katabijak', 'loli', 'neko', 'pantun', 'ppcouple', 'puisi', 'quotesanime',
    'randomanime', 'randommeme', 'randomnumber', 'randomtag', 'rate', 'siapakah',
    'waifu'
  ],
  search: [
    'alkitab', 'alquranaudio', 'artinama', 'brainly', 'cekidff', 'cekidml',
    'cuaca', 'googleimage', 'igstalk', 'ipchecker', 'jadwalshalat', 'lirik',
    'otakudesu', 'otakudesuinfo', 'otakudesuongoing', 'pinterest', 'play',
    'wikipedia', 'ytsearch'
  ],
  sticker: [
    'attp', 'brat', 'brat2', 'bratvideo', 'createstickerpack', 'delsetwm',
    'emojisticker', 'quickchat', 'semoji', 'semojimix', 'setwm', 'smeme',
    'snobg', 'sticker', 'stickercircle', 'stickerly', 'stickerwm', 'takesticker',
    'telestick', 'toimg', 'trigger', 'ttp', 'ziptelestick'
  ],
  textmaker: [
    'avangers', 'avangers', 'batman', 'bear', 'bear', 'bisnissign', 'blackpink',
    'blankpink', 'bokeh', 'bokeh', 'cartoon', 'cartoon', 'cloud', 'cloud',
    'colorneon', 'deadpool', 'digitalglitch', 'dropwater', 'fflogo', 'firework',
    'firework', 'glitch', 'glitch', 'glow', 'glow', 'graffiti', 'graffiti',
    'greenneon', 'greenneon', 'halloween', 'halloween', 'holo', 'lightglow',
    'magma', 'marvel', 'marvel', 'narutologo', 'narutologo', 'neon', 'neon',
    'neonlight', 'neonlight', 'pencil', 'phlogo', 'phlogo', 'pubglogo', 'sand',
    'sand', 'sky', 'sky', 'spacetext', 'spacetext', 'thor', 'thor', 'thunder',
    'thunder', 'watercolor', 'wetglass', 'window', 'window', 'wolf', 'wolf'
  ],
  tools: [
    'bass', 'blown', 'blur', 'bratbahlil', 'bratspongebob', 'cekplatform',
    'confess', 'dbase64', 'dec', 'deep', 'dhex', 'ebase64', 'ehex', 'enc',
    'fakebca', 'fakecall', 'fakechios', 'fakedana', 'fakegc', 'fakeml', 'fakeovo',
    'fakereply', 'fakestoryig', 'faketweet', 'fast', 'fat', 'folio', 'font',
    'halah', 'hartatahta', 'hdsw', 'hdvideo', 'heleh', 'hilih', 'holoh', 'huluh',
    'imagetopdf', 'iqc', 'iqcdark', 'iqcimage', 'iqcpink', 'kinetictext', 'kirim',
    'menfess', 'nightcore', 'nulis', 'ocr', 'poll', 'ptvtovideo', 'qrcode',
    'qrcodereader', 'readmore', 'readviewonce', 'removebackground', 'reverse',
    'robot', 'screenshot', 'shortlink', 'slow', 'smooth', 'spotifycard', 'swhd',
    'tiktokqc', 'tolive', 'tomp3', 'toquickvideo', 'tourl', 'toviewonce', 'tovn',
    'translate', 'tts', 'tts2', 'tupai', 'upscale', 'wait'
  ]
};

// Implemented command set (30 priority + 11 48Group game plugins)
const implementedSet = new Set([
  'menu', 'infobot', 'ping', 'runtime', 'version', 'owner', 'changelog',
  'openai', 'aiimage',
  'tiktoknowm', 'igdl', 'facebook', 'ytmp3', 'ytmp4',
  'sticker', 'toimg', 'attp', 'brat',
  'translate', 'tts', 'qrcode', 'ocr', 'tourl', 'shortlink',
  'welcome', 'antilink', 'hidetag', 'kick', 'promote', 'demote',
  // 48Group Game additions
  'tebakmember', 'tebakjiko', 'tebaksetlist', 'trivia48', 'susunmember',
  'gachakartu', 'koleksikartu', 'leaderboard48', 'misiharian', 'hint', 'nyerah'
]);

// Blocked commands per Section G and Section 10 security policy
const blockedMap: Record<string, string> = {
  fakebca: 'Pelanggaran Kebijakan: Pemalsuan bukti transfer Bank BCA dan penipuan transaksi finansial.',
  fakedana: 'Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet DANA.',
  fakeovo: 'Pelanggaran Kebijakan: Pemalsuan bukti transaksi saldo e-wallet OVO.',
  grabcontact: 'Pelanggaran Privasi: Penyedotan nomor kontak pengguna tanpa persetujuan.',
  mycontacts: 'Pelanggaran Privasi: Ekstraksi buku kontak pribadi.',
  readviewonce: 'Pelanggaran Privasi Pengguna WhatsApp: Menerobos batas privasi pesan sekali lihat (view-once).',
  callloop: 'Pelanggaran Kebijakan: Serangan spam panggilan berulang yang mengganggu kenyamanan pengguna.',
  fakegc: 'Pelanggaran Kebijakan: Pemalsuan tangkapan layar obrolan grup untuk impersonasi/fitnah.',
  fakereply: 'Pelanggaran Kebijakan: Pemalsuan balasan chat pesan orang lain.',
  faketweet: 'Pelanggaran Kebijakan: Pemalsuan tangkapan layar tweet media sosial.',
  fakestoryig: 'Pelanggaran Kebijakan: Pemalsuan story Instagram.',
  videocall: 'Pelanggaran Kebijakan: Otomasi panggilan video yang berpotensi spam / banned nomor WhatsApp.',
};

// External API requirements
const needsApiSet = new Set([
  'spotify', 'otakudesudl', 'twitterdl', 'threads', 'douyin', 'mediafire',
  'pindl', 'brainly', 'ipchecker', 'alkitab', 'alquranaudio', 'googleimage',
  'igstalk', 'otakudesu', 'otakudesuinfo', 'otakudesuongoing', 'pinterest',
  'play', 'ytsearch', 'jadwalshalat', 'cuaca', 'infogempa', 'infocovid',
  'nexara', 'byenexara', 'voicejapan', 'tiktokmusic', 'tiktokslidevideo', 'tiktokwm',
  'igreel', 'igstory', 'igtv'
]);

// Needs specification commands
const needsSpecSet = new Set([
  'spr', 'sprx', 'topeng', 'topengx', 'iqc', 'iqcdark', 'iqcimage', 'iqcpink',
  'tolive', 'toquickvideo', 'kinetictext', 'buttonmode', 'buttontojson',
  'cekk hodam', 'cekkhodam', 'cekplatform', 'fakechios', 'fakeml'
]);

// Common Aliases mapping in Wibusoft
const aliasMap: Record<string, string[]> = {
  menu: ['help', 'bantuan'],
  ping: ['p', 'speed'],
  infobot: ['info', 'about'],
  runtime: ['uptime'],
  version: ['ver'],
  owner: ['creator', 'developer'],
  changelog: ['updates', 'changes'],
  openai: ['ai', 'gemini', 'ask', 'tanya'],
  aiimage: ['dalle', 'txt2img', 'imagine'],
  tiktoknowm: ['tiktok', 'tt', 'ttdl'],
  igdl: ['instagram', 'ig', 'reels'],
  facebook: ['fb', 'fbdl', 'fbvideo'],
  ytmp3: ['yta', 'ytaudio'],
  ytmp4: ['ytv', 'ytvideo'],
  sticker: ['s', 'stiker', 'sgif'],
  toimg: ['toimage', 'tovid'],
  attp: ['ttp'],
  brat: ['bratgenerator'],
  translate: ['tr', 'terjemah'],
  tts: ['voice', 'say'],
  qrcode: ['qr', 'qrgen'],
  ocr: ['readtext', 'scan'],
  tourl: ['upload', 'telegraph'],
  shortlink: ['short', 'tinyurl'],
  welcome: ['setwelcome'],
  antilink: ['antilinkwa'],
  hidetag: ['tagall', 'pengumuman', 'totag'],
  kick: ['tendang', 'remove'],
  promote: ['admin', 'angkat'],
  demote: ['unadmin', 'turun'],
  tebakmember: ['member48', 'tebakoshi'],
  tebakjiko: ['jiko'],
  tebaksetlist: ['setlist'],
  trivia48: ['kuis48'],
  gachakartu: ['gacha'],
  koleksikartu: ['binder', 'kartuku'],
  leaderboard48: ['topglobal', 'topwota'],
  misiharian: ['daily', 'klaim'],
  hint: ['clue'],
  nyerah: ['surrender']
};

interface CatalogItem {
  id: string;
  originalName: string;
  name: string;
  category: string;
  description: string;
  aliases: string[];
  status: 'PLANNED' | 'IN_DEVELOPMENT' | 'IMPLEMENTED' | 'TESTING' | 'TESTED' | 'NEEDS_SPECIFICATION' | 'NEEDS_API' | 'BLOCKED' | 'DEPRECATED';
  permissions: ('all' | 'group_admin' | 'owner' | 'bot_admin')[];
  usage?: string;
  parameters?: string;
  requiresApi?: boolean;
  apiProvider?: string;
  isFree?: boolean;
  securityRisk?: 'low' | 'medium' | 'high' | 'critical';
  blockedReason?: string;
  duplicateCount?: number;
  isDuplicate?: boolean;
  notes?: string;
}

const catalog: CatalogItem[] = [];
const seenCount: Record<string, number> = {};

// Count occurrences first for accurate duplicate tracking
for (const [cat, names] of Object.entries(rawCategories)) {
  for (const n of names) {
    seenCount[n] = (seenCount[n] || 0) + 1;
  }
}

let idxCounter = 1;
for (const [cat, names] of Object.entries(rawCategories)) {
  for (const originalName of names) {
    // Normalize name
    let cleanName = originalName.trim().toLowerCase();
    let note = '';

    if (cleanName === 'cekk hodam') {
      cleanName = 'cekkhodam';
      note = 'Nama asli dinormalisasi dari "cekk hodam" menjadi "cekkhodam"';
    }

    const isDup = seenCount[originalName] > 1;
    const dupCount = seenCount[originalName];

    // Determine status
    let status: CatalogItem['status'] = 'PLANNED';
    let blockedReason: string | undefined = undefined;
    let securityRisk: CatalogItem['securityRisk'] = 'low';
    let requiresApi = false;
    let apiProvider = undefined;

    if (blockedMap[cleanName]) {
      status = 'BLOCKED';
      blockedReason = blockedMap[cleanName];
      securityRisk = 'critical';
    } else if (implementedSet.has(cleanName)) {
      status = 'IMPLEMENTED';
    } else if (needsApiSet.has(cleanName)) {
      status = 'NEEDS_API';
      requiresApi = true;
      apiProvider = 'External Provider / Web Scraper Service';
    } else if (needsSpecSet.has(cleanName)) {
      status = 'NEEDS_SPECIFICATION';
      note = (note ? note + '. ' : '') + 'Memerlukan spesifikasi I/O lebih detail dari pemilik bot';
    }

    // Default permissions based on category
    let permissions: ('all' | 'group_admin' | 'owner' | 'bot_admin')[] = ['all'];
    if (cat === 'owner') {
      permissions = ['owner'];
    } else if (cat === 'group') {
      permissions = ['group_admin'];
    }

    // Generate descriptive summary
    let description = `Perintah ${cleanName} kategori ${cat}`;
    if (blockedReason) {
      description = `[DIBLOKIR KEAMANAN] ${cleanName}: ${blockedReason}`;
    } else if (cleanName === 'menu') {
      description = 'Menampilkan daftar menu perintah Freya-san Bot';
    } else if (cleanName === 'infobot') {
      description = 'Menampilkan informasi teknis dan spesifikasi sistem bot';
    } else if (cleanName === 'ping') {
      description = 'Memeriksa kecepatan respon server dan latensi bot';
    } else if (cleanName === 'tebakmember') {
      description = 'Permainan tebak nama member JKT48 berdasarkan clue dan generasi';
    } else if (cleanName === 'trivia48') {
      description = 'Kuis trivia seputar fakta dan sejarah 48Group / JKT48';
    } else if (cleanName === 'gachakartu') {
      description = 'Gacha kartu idol digital fiktif (Common, Rare, SR, UR)';
    }

    catalog.push({
      id: `cmd-${idxCounter++}`,
      originalName,
      name: cleanName,
      category: cat as any,
      description,
      aliases: aliasMap[cleanName] || [],
      status,
      permissions,
      usage: `/{prefix}${cleanName}`,
      requiresApi,
      apiProvider,
      isFree: true,
      securityRisk,
      blockedReason,
      duplicateCount: dupCount,
      isDuplicate: isDup,
      notes: note || undefined,
    });
  }
}

// Generate code content
const fileContent = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CatalogItem } from '../core/types.ts';

export const fullReferenceCatalog: CatalogItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.resolve(process.cwd(), 'src/plugins/catalogData.ts'), fileContent, 'utf-8');
console.log(`Generated catalogData.ts with ${catalog.length} items!`);
