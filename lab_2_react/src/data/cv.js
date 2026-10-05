// Увесь текст резюме зібраний тут, а компоненти отримують його через props.
// Так легко перемикати мову: App передає вниз або cv.ua, або cv.en.

const contacts = [
  { id: 'email', label: 'Email', value: 'dklepar@nextvibe.io', href: 'mailto:dklepar@nextvibe.io' },
  { id: 'linkedin', label: 'LinkedIn', value: 'danylo-klepar', href: 'https://www.linkedin.com/in/danylo-klepar/' },
  { id: 'github', label: 'GitHub', value: 'hardusss', href: 'https://github.com/hardusss' },
  { id: 'x', label: 'X', value: '@DanKlepar', href: 'https://x.com/DanKlepar' },
  { id: 'site', label: 'NextVibe', value: 'nextvibe.io', href: 'https://nextvibe.io' },
]

export const cv = {
  ua: {
    locale: 'uk-UA',
    htmlLang: 'uk',
    title: 'Данило Клепар - CV',
    nav: [
      { id: 'experience', label: 'Досвід' },
      { id: 'awards', label: 'Перемоги' },
      { id: 'path', label: 'Шлях' },
      { id: 'stack', label: 'Стек' },
      { id: 'contacts', label: 'Контакти' },
    ],
    switchTo: 'Switch to English',
    badge: {
      event: 'NextVibe',
      year: '2026',
      first: 'Данило',
      last: 'Клепар',
      role: 'Засновник і розробник',
      band: 'Founder',
      city: 'Львів, Україна',
      tap: 'Торкніться, щоб познайомитися',
      qr: 'QR-код із посиланням на nextvibe.io',
      backTitle: 'Proof of Meet',
      backText: 'Ви познайомилися з Данилом Клепаром',
      flipBack: 'Перевернути бейдж',
    },
    hero: {
      lead: 'З 2023 року будую NextVibe, шар IRL-нетворкінгу на Solana, і пишу весь його код сам.',
      text: 'На подіях люди торкаються телефонами через NFC або BLE і отримують підтвердження зустрічі. Гості відмічаються в організатора й забирають POAP, а організатор бачить у дашборді, хто з ким познайомився. Паралельно вчуся на кібербезпеці у Львівській політехніці.',
      traction: [
        { value: '1 100+', label: 'встановлень у Solana dApp Store' },
        { value: '170+', label: 'відгуків' },
        { value: '643', label: 'зареєстровані акаунти' },
      ],
      tractionJoin: ' і ',
      tractionTail: ' без жодної реклами. Дані на вересень 2026.',
    },
    experience: {
      title: 'Досвід',
      role: 'Засновник і розробник',
      org: 'NextVibe',
      link: 'https://nextvibe.io',
      period: 'з 2023, Львів',
      summary:
        'Команда з двох людей: я відповідаю за всю розробку, від мобільного застосунку до бекенду й ончейн-частини, а кофаундер Марко Вендиш веде бізнес, фінанси й операції. Проєкт почався у 2023 році як мій дипломний проєкт у Молодіжному навчальному центрі імені св. Івана Боско, тоді це була соцмережа з кастодіальним гаманцем. Після першого дзвінка з Superteam Ukraine ми переосмислили продукт і зосередилися на офлайн-подіях.',
      howTitle: 'Як це працює',
      how: [
        { title: 'Організатор додає подію', text: 'Імпортує її з Luma і підтверджує кодом NV в описі.' },
        { title: 'Гість відмічається', text: 'Торкається телефона організатора в межах геозони під час події та отримує POAP як компресований NFT.' },
        { title: 'Учасники знайомляться', text: 'Tap to Meet між будь-якими двома телефонами дає Proof of Meet, а організатор бачить теплову карту знайомств.' },
      ],
      doneTitle: 'Що я зробив',
      done: [
        'Застосунок для Android та iOS на Expo і React Native, основна платформа Solana Seeker. В App Store з 2 жовтня 2026.',
        'Власний HCE-модуль для NFC і BLE-обмін для пар телефонів, де NFC не працює. На iPhone є запасний QR-код.',
        'Сервіс на Bun для мінту cNFT через Metaplex Bubblegum: транзакції оплачує бекенд, користувачу не потрібен SOL.',
        'Режим без гаманця: check-in, POAP і Proof of Meet зберігаються й мінтяться, щойно людина підключить гаманець.',
        'Чати з наскрізним шифруванням, Tap to Pay через NFC/BLE, свопи Jupiter, геолокація на H3.',
        'Дашборд організатора dashboard.nextvibe.io з тепловою картою торкань.',
      ],
      side: {
        title: 'Побічний проєкт',
        name: 'Shoutout Wall',
        link: 'https://shoutoutwall.nextvibe.io',
        period: 'жовтень 2026',
        text: 'Стіна повідомлень для подій без бекенду: гості надсилають memo-транзакції в Solana, а фронтенд на Next.js показує їх як чат. Зробили разом з Марком за одну годину на UNI Vibeathon.',
      },
    },
    awards: {
      title: 'Перемоги та гранти',
      items: [
        {
          name: 'Web3 Resilience Lab',
          result: 'Переможець серед студентських команд',
          date: 'серпень 2026',
          org: 'Мінцифри, Binance, Lviv IT Cluster, Web3 Institute',
          text: 'NextVibe увійшов до 10 проєктів, які отримують підтримку програми: шість місяців менторства і грант $12 500.',
          link: 'https://thedigital.gov.ua/news/technologies/125-tysiach-na-ukrayinski-tekhnolohiyi-10-komand-otrymaiut-finansuvannia-na-rozvytok',
          linkLabel: 'Список переможців на сайті Мінцифри',
        },
        {
          name: 'Superteam Ukraine',
          result: 'Грант на розвиток NextVibe',
          date: '2026',
          org: 'Superteam Ukraine',
          text: 'Отримали після першої участі в хакатоні Colosseum.',
        },
      ],
      note: 'Усі гранти без передачі частки в компанії.',
      hackTitle: 'Хакатони',
      hackathons: [
        { name: 'Colosseum', text: 'дві участі, друга в жовтні 2026' },
        { name: 'CLOCK IN, Solana Mobile', text: 'вересень і жовтень 2026' },
        { name: 'MONOLITH, Solana Mobile', text: 'лютий і березень 2026' },
      ],
    },
    path: {
      title: 'Шлях',
      years: [
        {
          year: '2023',
          items: [{ when: '', text: 'Почав NextVibe як дипломний проєкт у Молодіжному навчальному центрі імені св. Івана Боско у Львові: тоді це була соцмережа з кастодіальним гаманцем і AI-зображеннями до постів.' }],
        },
        {
          year: '2025',
          items: [
            { when: '', text: 'Завершив навчання в центрі Боско, де NextVibe був моїм дипломним проєктом.' },
            { when: 'вересень', text: 'Вступив до Львівської політехніки на кібербезпеку.' },
          ],
        },
        {
          year: '2026',
          items: [
            { when: 'лютий', text: 'MONOLITH, перший хакатон Solana Mobile.' },
            { when: 'липень', text: 'Перша власна подія: NextVibe NFC Networking у Львові.' },
            { when: 'серпень', text: 'Перемога у Web3 Resilience Lab.' },
            { when: 'вересень', text: '1 100+ встановлень і 170+ відгуків у Solana dApp Store, хакатон CLOCK IN.' },
            { when: 'жовтень', text: 'Реліз в App Store, живий тест NextVibe на UNI Vibeathon у Політехніці, Colosseum вдруге.' },
          ],
        },
      ],
    },
    stack: {
      title: 'Стек',
      groups: [
        { layer: 'Мобільний застосунок', items: ['React Native', 'Expo', 'NFC (власний HCE-модуль)', 'BLE', 'Mobile Wallet Adapter', 'Seed Vault'] },
        { layer: 'Бекенд', items: ['Python', 'Django', 'MySQL', 'Redis', 'Cloudflare R2'] },
        { layer: 'Solana', items: ['Bun-сервіс для cNFT', 'Metaplex Bubblegum', 'Helius', 'Jupiter', 'LazorKit', 'gasless-транзакції'] },
        { layer: 'Веб', items: ['React', 'Next.js', 'Vite', 'Solana Wallet Adapter'] },
        { layer: 'Мови', items: ['TypeScript', 'JavaScript', 'Python'] },
        { layer: 'Інше', items: ['H3', 'наскрізне шифрування', 'Git', 'релізи в App Store і Solana dApp Store'] },
      ],
    },
    education: {
      title: 'Освіта',
      schools: [
        {
          name: 'Національний університет «Львівська політехніка»',
          program: 'Кафедра «Захист інформації», кібербезпека',
          period: 'з 2025, група КБ-203',
        },
        {
          name: 'Молодіжний навчальний центр імені св. Івана Боско',
          program: 'Дипломний проєкт: NextVibe',
          period: '2023-2025, Львів',
          link: 'https://mnzbosco.org.ua/',
        },
      ],
      langTitle: 'Мови',
      languages: [
        { name: 'Українська', level: 'рідна' },
        { name: 'Англійська', level: 'вільна письмова' },
      ],
    },
    footer: {
      title: 'Напишіть мені',
      text: 'Найшвидше відповідаю текстом: на пошту, в X або LinkedIn.',
      project: 'NextVibe в X',
      owner: 'Данило Клепар',
      made: 'Зроблено на React і Vite для лабораторної роботи №2.',
    },
    contacts,
  },

  en: {
    locale: 'en-GB',
    htmlLang: 'en',
    title: 'Danylo Klepar - CV',
    nav: [
      { id: 'experience', label: 'Experience' },
      { id: 'awards', label: 'Awards' },
      { id: 'path', label: 'Path' },
      { id: 'stack', label: 'Stack' },
      { id: 'contacts', label: 'Contacts' },
    ],
    switchTo: 'Перемкнути на українську',
    badge: {
      event: 'NextVibe',
      year: '2026',
      first: 'Danylo',
      last: 'Klepar',
      role: 'Founder and developer',
      band: 'Founder',
      city: 'Lviv, Ukraine',
      tap: 'Tap to meet',
      qr: 'QR code linking to nextvibe.io',
      backTitle: 'Proof of Meet',
      backText: 'You met Danylo Klepar',
      flipBack: 'Flip the badge',
    },
    hero: {
      lead: 'Since 2023 I have been building NextVibe, the IRL networking layer on Solana, and I write all of its code myself.',
      text: 'At events people tap phones over NFC or BLE and get a proof that they met. Guests check in with the organizer and claim a POAP, while the organizer sees in a dashboard who met whom. I also study cybersecurity at Lviv Polytechnic.',
      traction: [
        { value: '1,100+', label: 'installs on the Solana dApp Store' },
        { value: '170+', label: 'reviews' },
        { value: '643', label: 'registered accounts' },
      ],
      tractionJoin: ' and ',
      tractionTail: ' with zero ad spend. Numbers as of September 2026.',
    },
    experience: {
      title: 'Experience',
      role: 'Founder and developer',
      org: 'NextVibe',
      link: 'https://nextvibe.io',
      period: 'since 2023, Lviv',
      summary:
        'A two-person team: I own all development, from the mobile app to the backend and on-chain parts, and my co-founder Marko Vendysh runs business, finance and operations. NextVibe started in 2023 as my diploma project at the St. John Bosco Youth Training Center, back then a social app with a custodial wallet. After our first call with Superteam Ukraine we rethought the product and focused on offline events.',
      howTitle: 'How it works',
      how: [
        { title: 'The organizer adds an event', text: 'Imports it from Luma and verifies it with an NV code in the description.' },
        { title: 'A guest checks in', text: 'Taps the organizer’s phone inside the event geofence during the event and gets a POAP as a compressed NFT.' },
        { title: 'People meet', text: 'Tap to Meet between any two phones creates a Proof of Meet, and the organizer sees a heatmap of who met whom.' },
      ],
      doneTitle: 'What I built',
      done: [
        'The Android and iOS app on Expo and React Native, built mainly for the Solana Seeker. Live on the App Store since 2 October 2026.',
        'A custom HCE module for NFC and a BLE exchange for phone pairs where NFC does not work. iPhone has a QR fallback.',
        'A Bun service that mints cNFTs with Metaplex Bubblegum: the backend pays the fees, so users need no SOL.',
        'Wallet-optional mode: check-ins, POAPs and Proofs of Meet are kept and minted as soon as a wallet is connected.',
        'End-to-end encrypted chats, Tap to Pay over NFC/BLE, Jupiter swaps, geo built on H3.',
        'The organizer dashboard at dashboard.nextvibe.io with a tap heatmap.',
      ],
      side: {
        title: 'Side project',
        name: 'Shoutout Wall',
        link: 'https://shoutoutwall.nextvibe.io',
        period: 'October 2026',
        text: 'A message wall for events with no backend: guests send memo transactions on Solana and a Next.js frontend shows them as a chat. Built with Marko in one hour at the UNI Vibeathon.',
      },
    },
    awards: {
      title: 'Awards and grants',
      items: [
        {
          name: 'Web3 Resilience Lab',
          result: 'Winner among student teams',
          date: 'August 2026',
          org: 'Ministry of Digital Transformation of Ukraine, Binance, Lviv IT Cluster, Web3 Institute',
          text: 'NextVibe is one of 10 projects backed by the program: six months of mentorship and a $12,500 grant.',
          link: 'https://thedigital.gov.ua/news/technologies/125-tysiach-na-ukrayinski-tekhnolohiyi-10-komand-otrymaiut-finansuvannia-na-rozvytok',
          linkLabel: 'Winners list from the Ministry of Digital Transformation',
        },
        {
          name: 'Superteam Ukraine',
          result: 'Grant for NextVibe',
          date: '2026',
          org: 'Superteam Ukraine',
          text: 'Received after our first Colosseum hackathon.',
        },
      ],
      note: 'All grants are non-dilutive.',
      hackTitle: 'Hackathons',
      hackathons: [
        { name: 'Colosseum', text: 'two entries, the second in October 2026' },
        { name: 'CLOCK IN, Solana Mobile', text: 'September and October 2026' },
        { name: 'MONOLITH, Solana Mobile', text: 'February and March 2026' },
      ],
    },
    path: {
      title: 'Path',
      years: [
        {
          year: '2023',
          items: [{ when: '', text: 'Started NextVibe as my diploma project at the St. John Bosco Youth Training Center in Lviv: back then a social app with a custodial wallet and AI-generated post images.' }],
        },
        {
          year: '2025',
          items: [
            { when: '', text: 'Finished my studies at the Bosco center, where NextVibe was my diploma project.' },
            { when: 'September', text: 'Enrolled at Lviv Polytechnic to study cybersecurity.' },
          ],
        },
        {
          year: '2026',
          items: [
            { when: 'February', text: 'MONOLITH, my first Solana Mobile hackathon.' },
            { when: 'July', text: 'Our first own event: NextVibe NFC Networking in Lviv.' },
            { when: 'August', text: 'Won the Web3 Resilience Lab.' },
            { when: 'September', text: '1,100+ installs and 170+ reviews on the Solana dApp Store, CLOCK IN hackathon.' },
            { when: 'October', text: 'App Store release, live NextVibe test at the UNI Vibeathon at Lviv Polytechnic, second Colosseum.' },
          ],
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        { layer: 'Mobile app', items: ['React Native', 'Expo', 'NFC (custom HCE module)', 'BLE', 'Mobile Wallet Adapter', 'Seed Vault'] },
        { layer: 'Backend', items: ['Python', 'Django', 'MySQL', 'Redis', 'Cloudflare R2'] },
        { layer: 'Solana', items: ['Bun cNFT service', 'Metaplex Bubblegum', 'Helius', 'Jupiter', 'LazorKit', 'gasless transactions'] },
        { layer: 'Web', items: ['React', 'Next.js', 'Vite', 'Solana Wallet Adapter'] },
        { layer: 'Languages', items: ['TypeScript', 'JavaScript', 'Python'] },
        { layer: 'Other', items: ['H3', 'end-to-end encryption', 'Git', 'App Store and Solana dApp Store releases'] },
      ],
    },
    education: {
      title: 'Education',
      schools: [
        {
          name: 'Lviv Polytechnic National University',
          program: 'Information Security Department, cybersecurity',
          period: 'since 2025, group KB-203',
        },
        {
          name: 'St. John Bosco Youth Training Center',
          program: 'Diploma project: NextVibe',
          period: '2023-2025, Lviv',
          link: 'https://mnzbosco.org.ua/',
        },
      ],
      langTitle: 'Languages',
      languages: [
        { name: 'Ukrainian', level: 'native' },
        { name: 'English', level: 'fluent in writing' },
      ],
    },
    footer: {
      title: 'Write to me',
      text: 'Text is the fastest way to reach me: email, X or LinkedIn.',
      project: 'NextVibe on X',
      owner: 'Danylo Klepar',
      made: 'Built with React and Vite for lab work no. 2.',
    },
    contacts,
  },
}
