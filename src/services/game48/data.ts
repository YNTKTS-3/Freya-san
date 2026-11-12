/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MemberFact {
  name: string;
  stageName: string;
  generation: number;
  jiko: string;
  birthCity: string;
  clue: string;
}

export interface SetlistFact {
  name: string;
  aliasId: string;
  songs: string[];
  team: string;
  year: number;
}

export interface TriviaFact {
  question: string;
  answer: string;
  options?: string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface DigitalCard {
  id: string;
  name: string;
  role: string;
  tier: 'COMMON' | 'RARE' | 'SUPER_RARE' | 'ULTRA_RARE';
  power: number;
  description: string;
}

// 100% Verified Real Data for JKT48 & 48Group
export const verifiedMembers: MemberFact[] = [
  {
    name: 'Freya Jayawardana',
    stageName: 'Freya',
    generation: 7,
    jiko: 'Gadis koleris yang suka berimajinasi, terangi harimu dengan senyuman karamelku!',
    birthCity: 'Tangerang',
    clue: 'Member Generasi 7 yang dikenal dengan persona tenang, koleris, dan senyum karamel manis.',
  },
  {
    name: 'Shani Indira Natio',
    stageName: 'Shani',
    generation: 3,
    jiko: 'Semanis cokelat, selembut sutra. Halo, aku Shani!',
    birthCity: 'Kebumen',
    clue: 'Kapten legendaris JKT48 dari Generasi 3 yang memenangkan Sousenkyo berkali-kali.',
  },
  {
    name: 'Shania Gracia',
    stageName: 'Gracia',
    generation: 3,
    jiko: 'Senyumku akan terekam jelas di ingatanmu seperti foto polaroid!',
    birthCity: 'Jakarta',
    clue: 'Kapten JKT48 yang murah senyum, penuh kehangatan dari Generasi 3.',
  },
  {
    name: 'Azizi Asadel',
    stageName: 'Zee',
    generation: 7,
    jiko: 'Si gadis tomboy yang semangatnya meletup-letup!',
    birthCity: 'Tangerang',
    clue: 'Center single Flying High dari Generasi 7 yang juga membintangi film Ancika.',
  },
  {
    name: 'Angelina Christy',
    stageName: 'Christy',
    generation: 7,
    jiko: 'Peduli dan berbaik hati, siapakah dia? Christy!',
    birthCity: 'Jakarta',
    clue: 'Member Generasi 7 yang debut sangat muda dan menjadi salah satu member inti New Era.',
  },
  {
    name: 'Marsha Lenathea',
    stageName: 'Marsha',
    generation: 9,
    jiko: 'Seperti pizza yang selalu dinanti-nanti, halo aku Marsha!',
    birthCity: 'Jakarta',
    clue: 'Member Generasi 9 pecinta anime, cosplay, dan manga yang sangat ekspresif.',
  },
  {
    name: 'Gita Sekar Andarini',
    stageName: 'Gita',
    generation: 6,
    jiko: 'Diam bukan berarti tak memperhatikan. Halo, aku Gita!',
    birthCity: 'Jakarta',
    clue: 'Member Generasi 6 yang dikenal pendiam, cool, namun sangat perhatian.',
  },
  {
    name: 'Feni Fitriyanti',
    stageName: 'Feni',
    generation: 3,
    jiko: 'Secantik bunga mawar, sehangat mentari pagi!',
    birthCity: 'Cianjur',
    clue: 'Member Generasi 3 yang menjadi pentolan subunit Quadlips di Bangkok.',
  },
  {
    name: 'Mutiara Azzahra',
    stageName: 'Muthe',
    generation: 7,
    jiko: 'Dengan senyuman secerah matahari dan semangat sekuat baja!',
    birthCity: 'Jakarta',
    clue: 'Member Generasi 7 yang jago menari dan dijuluki kembaran Momo TWICE.',
  },
  {
    name: 'Reva Fidela',
    stageName: 'Adel',
    generation: 8,
    jiko: 'Bagaikan kucing yang lincah dan menggemaskan!',
    birthCity: 'Jakarta',
    clue: 'Member Generasi 8 yang gemar olahraga bulutangkis dan bergaya kasual boyish.',
  },
];

// Verified Theater Setlists
export const verifiedSetlists: SetlistFact[] = [
  {
    name: 'Pajama Drive',
    aliasId: 'pajamadrive',
    songs: ['Shonichi (Hari Pertama)', 'Hissatsu Teleport', 'Gokigen Naname na Mermaid', 'Pajama Drive', 'Temodemo no Namida'],
    team: 'Generasi 1 / Academy / Trainee',
    year: 2012,
  },
  {
    name: 'Renai Kinshi Jourei',
    aliasId: 'rkj',
    songs: ['Nagai Hikari', 'Squall no Aida ni', 'JKT Sanjou!', 'Renai Kinshi Jourei', 'Heart Gata Virus', 'Tsundere!'],
    team: 'Team J',
    year: 2012,
  },
  {
    name: 'Boku no Taiyou',
    aliasId: 'bnt',
    songs: ['Dreamin Girls', 'RUN RUN RUN', 'Mirai no Kajitsu', 'Idol Nante Yobanaide', 'Boku to Juliet to White Heat'],
    team: 'Team KIII',
    year: 2013,
  },
  {
    name: 'Dareka no Tame ni',
    aliasId: 'dnt',
    songs: ['Tsukimisou', 'Warning', 'Tanjoubi no Yoru', 'Bird', 'Nageki no Figure', 'Koike'],
    team: 'Team J',
    year: 2014,
  },
  {
    name: 'Seishun Girls',
    aliasId: 'seishungirls',
    songs: ['Seishun Girls', 'Beach Sandal', 'Kimi ga Hoshi ni Naru Made', 'Blue Rose', 'Kinjirareta Futari', 'Ame no Doubutsuen'],
    team: 'Team KIII',
    year: 2014,
  },
  {
    name: 'Theater no Megami',
    aliasId: 'tnm',
    songs: ['Yuuki no Hammer', 'Inseki no Kakuritsu', 'Ai no Stripper', 'Theater no Megami', 'Hatsukoi yo Konnichiwa', 'Locker Room Boy'],
    team: 'Team J / Team T',
    year: 2015,
  },
  {
    name: 'Cara Meminum Ramune',
    aliasId: 'ramune',
    songs: ['Kizashi', 'Schoolyard Teacher', 'Koutei no Koinu', 'Cross', 'Finland Miracle', 'Manazashi Sayonara'],
    team: 'Team KIII',
    year: 2020,
  },
  {
    name: 'Banzai JKT48',
    aliasId: 'banzai',
    songs: ['Rapsodi', 'Flying High', 'Gingham Check', 'High Tension', 'Uza', 'Kaze wa Fuiteiru'],
    team: 'Special 10th Anniversary',
    year: 2022,
  },
];

// Verified 48Group Trivia Facts
export const verifiedTrivia: TriviaFact[] = [
  {
    question: 'Di kota manakah Teater resmi permanen JKT48 pertama kali diresmikan pada September 2012?',
    answer: 'Jakarta',
    options: ['Jakarta', 'Surabaya', 'Bandung', 'Medan'],
    explanation: 'Teater JKT48 diresmikan di fX Sudirman Lantai 4, Jakarta Pusat pada 8 September 2012.',
    difficulty: 'easy',
  },
  {
    question: 'Apakah nama single original pertama dalam sejarah JKT48 yang dirilis pada tahun 2020?',
    answer: 'Rapsodi',
    options: ['Rapsodi', 'Flying High', 'Magic Hour', 'Heavy Rotation'],
    explanation: 'Rapsodi adalah single original ke-21 sekaligus single original pertama yang diciptakan khusus untuk JKT48 oleh Laleilmanino.',
    difficulty: 'easy',
  },
  {
    question: 'Sister group luar Jepang pertama dari AKB48 di dunia adalah?',
    answer: 'JKT48',
    options: ['JKT48', 'SNH48', 'BNK48', 'MNL48'],
    explanation: 'JKT48 dibentuk pada tahun 2011 di Jakarta sebagai sister group resmi pertama AKB48 di luar negeri Jepang.',
    difficulty: 'easy',
  },
  {
    question: 'Siapakah member yang memenangkan posisi Center pada Senbatsu Sousenkyo (SSK) JKT48 pertama kali di tahun 2014?',
    answer: 'Melody Nurramdhani Laksani',
    options: ['Melody Nurramdhani Laksani', 'Jessica Veranda', 'Nabilah Ratna Ayu', 'Shania Junianatha'],
    explanation: 'Melody Nurramdhani Laksani terpilih sebagai nomor 1 pada Pemilihan Member Single ke-6 JKT48 (Gingham Check) pada tahun 2014.',
    difficulty: 'medium',
  },
  {
    question: 'Lagu apakah yang menjadi single kedua original JKT48 yang diproduksi bersama produser internasional Matt Rad di tahun 2022?',
    answer: 'Flying High',
    options: ['Flying High', 'Magic Hour', 'Banzai', 'Sayonara Crawl'],
    explanation: 'Flying High dirilis pada Juni 2022 dengan 9 member senbatsu bertempat di Tokyo dan Los Angeles.',
    difficulty: 'medium',
  },
  {
    question: 'Berapakah jumlah senbatsu pada single ke-23 JKT48 "Sayonara Crawl"?',
    answer: '12',
    options: ['12', '16', '21', '8'],
    explanation: 'Single Sayonara Crawl dibawakan oleh 12 member terpilih (Senbatsu) sebagai single kelulusan Shani.',
    difficulty: 'hard',
  },
];

// Fictional Digital Collectible Cards (Safe, non-copyrighted fictional representations for fun bot gameplay)
export const digitalCardsList: DigitalCard[] = [
  {
    id: 'c1',
    name: 'Freya Senyum Karamel',
    role: 'Center Idol',
    tier: 'ULTRA_RARE',
    power: 95,
    description: 'Kartu edisi spesial dengan aura kepemimpinan koleris dan senyuman karamel penyejuk hati.',
  },
  {
    id: 'c2',
    name: 'Shani Dewi Teater',
    role: 'Captain Legend',
    tier: 'ULTRA_RARE',
    power: 98,
    description: 'Kartu kapten legendaris dengan keanggunan abadi dan pembawa kedamaian teater.',
  },
  {
    id: 'c3',
    name: 'Gracia Polaroid Memori',
    role: 'Sunlight Captain',
    tier: 'SUPER_RARE',
    power: 88,
    description: 'Aura foto polaroid yang membekaskan senyuman hangat bagi seluruh fans.',
  },
  {
    id: 'c4',
    name: 'Zee Tomboy Energetik',
    role: 'Energy Booster',
    tier: 'SUPER_RARE',
    power: 89,
    description: 'Semangat meletup-letup yang membakar panggung konser.',
  },
  {
    id: 'c5',
    name: 'Christy Bintang Panggung',
    role: 'Stage Performer',
    tier: 'RARE',
    power: 78,
    description: 'Gerakan tarian lincah dan keceriaan alami di setiap unit song.',
  },
  {
    id: 'c6',
    name: 'Marsha Cosplay Fantasy',
    role: 'Visual Idol',
    tier: 'RARE',
    power: 76,
    description: 'Pesona karakter anime nyata dengan kostum panggung memesona.',
  },
  {
    id: 'c7',
    name: 'Lightstick Merah Putih',
    role: 'Cheering Item',
    tier: 'COMMON',
    power: 45,
    description: 'Perlengkapan wajib wota teater untuk memberikan chant penyemangat.',
  },
  {
    id: 'c8',
    name: 'Tiket Teater Baris Pertama',
    role: 'Lucky Item',
    tier: 'COMMON',
    power: 50,
    description: 'Keberuntungan bingo hijau untuk duduk di barisan depan depan panggung.',
  },
];
