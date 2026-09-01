import type { Sql } from "@/lib/db";
import { token } from "./map";
import { CHURCH_ADDRESS } from "./types";

function at(daysFromToday: number, hour: number, minute = 0) {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);
  d.setHours(hour, minute, 0, 0);
  return d.toISOString();
}

function sast(date: string, hour: number, minute = 0) {
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  return new Date(`${date}T${hh}:${mm}:00+02:00`).toISOString();
}

function plusMinutes(iso: string, minutes: number) {
  return new Date(new Date(iso).getTime() + minutes * 60000).toISOString();
}

async function resetChurch(sql: Sql) {
  await sql.query(`
    truncate table
      checkins, contributions, messages, resources,
      event_registrations, roster_slots, availability,
      team_members, group_members,
      events, news, sermons, teams, groups, channels,
      people, households, church_meta
    restart identity cascade
  `);
}

export async function seedIfNeeded(sql: Sql) {
  const name = await sql<{ value: string }>`select value from church_meta where key = 'name'`;
  if (name[0]?.value === "Nova Church") return;

  await resetChurch(sql);

  await sql`insert into church_meta (key, value) values ('seeded', 'nova-1')`;
  await sql`insert into church_meta (key, value) values ('name', 'Nova Church')`;
  await sql`insert into church_meta (key, value) values ('city', 'Constantia, Cape Town')`;

  const households = [
    "Williams",
    "Naidoo",
    "Botha",
    "Mokoena",
    "Petersen",
    "van der Merwe",
    "Adeyemi",
    "Chen",
    "Davids",
    "Nkosi",
  ];
  const householdIds: number[] = [];
  for (const h of households) {
    const rows = await sql<{ id: number }>`insert into households (name) values (${h}) returning id`;
    householdIds.push(rows[0]!.id);
  }

  type SeedPerson = {
    first: string;
    last: string;
    role: string;
    age: string;
    household: number;
    email: string;
    phone: string;
    bio: string;
    birthday: string;
    allergies?: string;
    hue: number;
  };

  const people: SeedPerson[] = [
    {
      first: "Terran",
      last: "Williams",
      role: "pastor",
      age: "adults",
      household: 0,
      email: "terran@novachurch.co.za",
      phone: "",
      bio: "Co-lead pastor. Author, church planter, and avid surfer. Pioneering Nova with Julie, and a global family of Acts 2 churches called A2.",
      birthday: "1978-04-12",
      hue: 272,
    },
    {
      first: "Julie",
      last: "Williams",
      role: "pastor",
      age: "adults",
      household: 0,
      email: "julie@novachurch.co.za",
      phone: "",
      bio: "Co-lead pastor. Writer, leader, and mother of five. Called with Terran to plant Nova and welcome home whoever God adds.",
      birthday: "1980-09-03",
      hue: 320,
    },
    {
      first: "Lerato",
      last: "Mokoena",
      role: "staff",
      age: "adults",
      household: 3,
      email: "lerato@novachurch.co.za",
      phone: "",
      bio: "Nova Kids lead. Wants every child to leave thinking God must really love me to give me this church.",
      birthday: "1992-02-18",
      hue: 18,
    },
    {
      first: "Kabelo",
      last: "Mokoena",
      role: "child",
      age: "kids",
      household: 3,
      email: "",
      phone: "",
      bio: "",
      birthday: "2017-06-11",
      allergies: "Peanuts",
      hue: 42,
    },
    {
      first: "James",
      last: "Botha",
      role: "staff",
      age: "adults",
      household: 2,
      email: "james@novachurch.co.za",
      phone: "",
      bio: "Worship lead. Believes a church that sings becomes a family.",
      birthday: "1990-11-04",
      hue: 210,
    },
    {
      first: "Priya",
      last: "Naidoo",
      role: "staff",
      age: "young_adults",
      household: 1,
      email: "priya@novachurch.co.za",
      phone: "",
      bio: "Operations and hospitality. First at the coffee urn, last to stack a chair.",
      birthday: "1995-07-22",
      hue: 12,
    },
    {
      first: "Anika",
      last: "Naidoo",
      role: "child",
      age: "little_ones",
      household: 1,
      email: "",
      phone: "",
      bio: "",
      birthday: "2024-01-09",
      allergies: "Dairy",
      hue: 48,
    },
    {
      first: "Sipho",
      last: "Nkosi",
      role: "volunteer",
      age: "adults",
      household: 9,
      email: "sipho@example.com",
      phone: "",
      bio: "Prayer team. Holds the rest of us when we cannot pray.",
      birthday: "1974-03-30",
      hue: 168,
    },
    {
      first: "Nomsa",
      last: "Nkosi",
      role: "member",
      age: "seniors",
      household: 9,
      email: "nomsa@example.com",
      phone: "",
      bio: "Intercessor. Has been praying for a church like this in the valley for years.",
      birthday: "1956-08-17",
      hue: 200,
    },
    {
      first: "Daniel",
      last: "Petersen",
      role: "volunteer",
      age: "young_adults",
      household: 4,
      email: "daniel@example.com",
      phone: "",
      bio: "Teens. Midweek on the lawn is his favourite hour.",
      birthday: "1998-12-01",
      hue: 190,
    },
    {
      first: "Mia",
      last: "van der Merwe",
      role: "volunteer",
      age: "adults",
      household: 5,
      email: "mia@example.com",
      phone: "",
      bio: "Media and stories. Films the quiet moments, not just the stage.",
      birthday: "1993-05-14",
      hue: 250,
    },
    {
      first: "Tunde",
      last: "Adeyemi",
      role: "member",
      age: "adults",
      household: 6,
      email: "tunde@example.com",
      phone: "",
      bio: "New to church. Found Nova through a neighbour in Constantia.",
      birthday: "1986-10-09",
      hue: 36,
    },
    {
      first: "Grace",
      last: "Chen",
      role: "volunteer",
      age: "adults",
      household: 7,
      email: "grace@example.com",
      phone: "",
      bio: "Kids volunteer. Calm in any corridor.",
      birthday: "1991-04-27",
      hue: 16,
    },
    {
      first: "Leo",
      last: "Chen",
      role: "child",
      age: "kids",
      household: 7,
      email: "",
      phone: "",
      bio: "",
      birthday: "2018-11-23",
      hue: 92,
    },
    {
      first: "Ruth",
      last: "Davids",
      role: "member",
      age: "seniors",
      household: 8,
      email: "ruth@example.com",
      phone: "",
      bio: "Scripture circle on Thursday mornings. Tea, psalms, and long memory.",
      birthday: "1948-06-04",
      hue: 120,
    },
  ];

  const personIds: number[] = [];
  for (const p of people) {
    const qr = token();
    const rows = await sql<{ id: number }>`
      insert into people (
        household_id, first_name, last_name, email, phone, role, age_group,
        bio, birthday, allergies, qr_token, avatar_hue
      ) values (
        ${householdIds[p.household]!}, ${p.first}, ${p.last},
        ${p.email || null}, ${p.phone || null}, ${p.role}, ${p.age},
        ${p.bio || null}, ${p.birthday}, ${p.allergies ?? null}, ${qr}, ${p.hue}
      ) returning id`;
    personIds.push(rows[0]!.id);
  }

  const pid = (i: number) => personIds[i]!;

  const launchA = sast("2026-09-06", 8, 30);
  const launchB = sast("2026-09-06", 10, 30);
  const sun1 = sast("2026-09-13", 9, 30);
  const sun2 = sast("2026-09-20", 9, 30);
  const prayer = sast("2026-09-03", 19, 0);
  const homes = sast("2026-09-10", 19, 0);
  const teens = sast("2026-09-11", 18, 30);

  const eventRows = [
    {
      title: "Launch team prayer",
      description:
        "A quiet Wednesday for the people helping birth Nova. Come as you are — we will sit with Acts 2 and ask God to fill the house.",
      location: CHURCH_ADDRESS,
      starts: prayer,
      ends: plusMinutes(prayer, 90),
      vis: "members",
      kind: "midweek",
      cap: 80,
      price: 0,
      img: "scripture",
    },
    {
      title: "Launch Sunday · 08:30",
      description:
        "The first public gathering of Nova Church. Coffee, sung worship, and a word for a church just being born. Little Lights adjoining the hall; Nova Kids upstairs.",
      location: CHURCH_ADDRESS,
      starts: launchA,
      ends: plusMinutes(launchA, 90),
      vis: "public",
      kind: "sunday",
      cap: 400,
      price: 0,
      img: "sanctuary",
    },
    {
      title: "Launch Sunday · 10:30",
      description:
        "The later launch gathering — same table, same hope. If you are new to church, over church, or not sure what you believe: you are welcome.",
      location: CHURCH_ADDRESS,
      starts: launchB,
      ends: plusMinutes(launchB, 90),
      vis: "public",
      kind: "sunday",
      cap: 400,
      price: 0,
      img: "exterior",
    },
    {
      title: "Life together",
      description:
        "The church is most alive in homes. A midweek table for people learning to belong — no performance, just presence.",
      location: "Homes across the Constantia valley",
      starts: homes,
      ends: plusMinutes(homes, 120),
      vis: "members",
      kind: "midweek",
      cap: 40,
      price: 0,
      img: "study",
    },
    {
      title: "Nova Teens",
      description:
        "Teens gather in the main meeting on Sunday, and connect through the week. Games, honesty, and a short word.",
      location: "The lawn & loft",
      starts: teens,
      ends: plusMinutes(teens, 120),
      vis: "members",
      kind: "kids",
      cap: 40,
      price: 0,
      img: "kids",
    },
    {
      title: "Sunday gathering · 09:30",
      description: "Every Sunday after launch. One gathering, one family. Series: All Things New.",
      location: CHURCH_ADDRESS,
      starts: sun1,
      ends: plusMinutes(sun1, 90),
      vis: "public",
      kind: "sunday",
      cap: 400,
      price: 0,
      img: "arch",
    },
    {
      title: "Sunday gathering · 09:30",
      description: "Ordinary Sunday. Coffee, worship, the Word, and a place at the table.",
      location: CHURCH_ADDRESS,
      starts: sun2,
      ends: plusMinutes(sun2, 90),
      vis: "public",
      kind: "sunday",
      cap: 400,
      price: 0,
      img: "sanctuary",
    },
  ];

  const eventIds: number[] = [];
  for (const e of eventRows) {
    const rows = await sql<{ id: number }>`
      insert into events (
        title, description, location, starts_at, ends_at, visibility, kind, capacity, ticket_cents, image_key
      ) values (
        ${e.title}, ${e.description}, ${e.location}, ${e.starts}, ${e.ends}, ${e.vis}, ${e.kind}, ${e.cap}, ${e.price}, ${e.img}
      ) returning id`;
    eventIds.push(rows[0]!.id);
  }

  await sql`
    insert into news (title, excerpt, body, author_name, pinned, audience, image_key, published_at) values
    (
      'Launch Sunday is 6 September',
      'Two gatherings — 08:30 or 10:30 — at 5 Eskol Avenue, Constantia. Thereafter every Sunday at 09:30.',
      'Fancy a fresh start? Nova bursts into life on the first Sunday in Spring. Whether you are young or young at heart, new to church, over church, or not sure what you believe — whether you live close by or beyond the boerewors curtain — you are welcome. Kids under 2.5 have their own space adjoining the hall; older kids (up to Grade 7) are upstairs; teens join us in the main meeting.',
      'Julie Williams', true, 'all', 'exterior', ${at(-2, 10)}
    ),
    (
      'All Things New',
      'Terran and Julie begin a series on the God who still renews lives, families, and cities.',
      'Behold, I am making all things new. Launch-team notes will live on the Resources tab. If you would like to read ahead: Revelation 21, Acts 2, and Haggai 1.',
      'Terran Williams', true, 'all', 'scripture', ${at(-5, 8)}
    ),
    (
      'Nova Kids still needs hosts',
      'If you can give one Sunday a month, Lerato would love to train you this week.',
      'No teaching degree required — just a calm presence and a willingness to learn the room. Speak to Lerato or tap Teams → Nova Kids.',
      'Lerato Mokoena', false, 'all', 'kids', ${at(-6, 12)}
    )`;

  await sql`
    insert into sermons (title, speaker, series, scripture, preached_at, duration_seconds, description, image_key, transcript) values
    (
      'All things new',
      'Terran Williams',
      'All Things New',
      'Revelation 21:5',
      ${"2026-08-23"},
      1860,
      'A launch-team word on the God who still makes all things new — including Cape Town, including you.',
      'arch',
      'Friends, a nova is a burst of light from a star that looked finished. That is the gospel. God is not managing decline. He is making all things new. Not some things. Not religious things. All things — lives, families, this valley, this city. We have been given land on Eskol Avenue as a first miracle, and we are treating it as the first of a thousand. If you came tonight tired of church, or tired of yourself, hear this: the One who sits on the throne is not done. Behold. Look. He is making all things new.'
    ),
    (
      'A church was planted',
      'Julie Williams',
      'All Things New',
      'Acts 2:1–47',
      ${"2026-08-16"},
      1740,
      'The first church was a family of Spirit-empowered worshippers. Nova is trying to be that again.',
      'sanctuary',
      'Acts 2 is not a museum. It is a pattern. Spirit poured out, Jesus proclaimed, a people who held things in common and added to their number daily. We are not trying to be impressive. We are trying to be that. If you have been around church long enough to be over it, I understand. Come and see whether God still builds this way.'
    ),
    (
      'Go up into the mountains',
      'Terran Williams',
      'All Things New',
      'Haggai 1:8',
      ${"2026-08-09"},
      1620,
      'Why we said yes to Constantia, and what it means to build a house God can take pleasure in.',
      'exterior',
      'Go up into the mountains and bring down timber and build my house, so that I may take pleasure in it and be honoured. That was the word that would not leave us. Unless the Lord builds the house, we labour in vain. Nova is not a brand exercise. It is timber, prayer, and a people who will not settle for spiritual dryness in a beautiful suburb. Come and help us build.'
    )`;

  const teamNames = [
    { name: "Worship", ministry: "worship", desc: "Music, and the quiet work of helping us sing." },
    { name: "Nova Kids", ministry: "kids", desc: "Little Lights, the upstairs loft, and a church that feels like wonder." },
    { name: "Hospitality", ministry: "hospitality", desc: "Doors, coffee, courtyard tables, and first conversations." },
    { name: "Prayer", ministry: "prayer", desc: "The people who hold the rest of us when we cannot pray." },
    { name: "Media", ministry: "media", desc: "Sound, stories, and the recordings that travel further than Eskol Avenue." },
    { name: "Teams", ministry: "outreach", desc: "No passengers — every gift in the body, on mission in the city." },
  ];
  const teamIds: number[] = [];
  for (const t of teamNames) {
    const rows = await sql<{ id: number }>`
      insert into teams (name, description, ministry) values (${t.name}, ${t.desc}, ${t.ministry}) returning id`;
    teamIds.push(rows[0]!.id);
  }

  // 0 Terran, 1 Julie, 2 Lerato, 3 Kabelo, 4 James, 5 Priya, 6 Anika,
  // 7 Sipho, 8 Nomsa, 9 Daniel, 10 Mia, 11 Tunde, 12 Grace, 13 Leo, 14 Ruth
  const memberships: [number, number, string][] = [
    [0, 4, "lead"],
    [0, 10, "member"],
    [0, 0, "member"],
    [1, 2, "lead"],
    [1, 12, "member"],
    [2, 5, "lead"],
    [2, 11, "member"],
    [3, 7, "lead"],
    [3, 8, "member"],
    [3, 1, "member"],
    [4, 10, "lead"],
    [4, 4, "member"],
    [5, 0, "lead"],
    [5, 1, "member"],
    [5, 9, "member"],
  ];
  for (const [ti, pi, seat] of memberships) {
    await sql`insert into team_members (team_id, people_id, seat) values (${teamIds[ti]!}, ${pid(pi)}, ${seat})`;
  }

  const launchId = eventIds[1]!;
  await sql`insert into roster_slots (event_id, team_id, people_id, seat_label) values
    (${launchId}, ${teamIds[0]!}, ${pid(4)}, 'Worship lead'),
    (${launchId}, ${teamIds[0]!}, ${pid(10)}, 'Vocals'),
    (${launchId}, ${teamIds[1]!}, ${pid(2)}, 'Nova Kids lead'),
    (${launchId}, ${teamIds[1]!}, ${pid(12)}, 'Little Lights'),
    (${launchId}, ${teamIds[2]!}, ${pid(5)}, 'Doors'),
    (${launchId}, ${teamIds[2]!}, ${pid(11)}, 'Coffee'),
    (${launchId}, ${teamIds[4]!}, ${pid(4)}, 'Sound')`;

  const groups = [
    {
      name: "Life together · valley homes",
      desc: "The church is most alive in homes. Unhurried conversation, Scripture, and a table.",
      meets: "Thursdays · 19:00",
      loc: "Homes across Constantia",
      age: "adults",
      img: "study",
      leader: 0,
    },
    {
      name: "Young adults",
      desc: "Twenty-somethings learning to follow Jesus in Cape Town — work, friendship, and faith.",
      meets: "Wednesdays · 19:30",
      loc: "Rotating homes",
      age: "young_adults",
      img: "table",
      leader: 5,
    },
    {
      name: "Scripture circle",
      desc: "Thursday mornings with Ruth. Tea, psalms, and long memory.",
      meets: "Thursdays · 10:00",
      loc: "Library room",
      age: "seniors",
      img: "scripture",
      leader: 14,
    },
    {
      name: "Nova Teens",
      desc: "Teens join the main meeting on Sunday, and connect through the week.",
      meets: "Fridays · 18:30",
      loc: "The loft",
      age: "youth",
      img: "kids",
      leader: 9,
    },
  ];
  const groupIds: number[] = [];
  for (const g of groups) {
    const rows = await sql<{ id: number }>`
      insert into groups (name, description, meets, location, age_group, image_key, leader_people_id)
      values (${g.name}, ${g.desc}, ${g.meets}, ${g.loc}, ${g.age}, ${g.img}, ${pid(g.leader)})
      returning id`;
    groupIds.push(rows[0]!.id);
  }
  const gmem: [number, number][] = [
    [0, 0],
    [0, 1],
    [0, 7],
    [0, 11],
    [0, 12],
    [1, 5],
    [1, 9],
    [1, 10],
    [2, 14],
    [2, 8],
    [3, 9],
  ];
  for (const [gi, pi] of gmem) {
    await sql`insert into group_members (group_id, people_id) values (${groupIds[gi]!}, ${pid(pi)})`;
  }

  const churchCh = await sql<{ id: number }>`
    insert into channels (name, kind) values ('Nova', 'church') returning id`;
  const ageChannels = [
    ["Little Lights parents", "little_ones"],
    ["Nova Kids shepherds", "kids"],
    ["Teens", "youth"],
    ["Young adults", "young_adults"],
    ["Adults", "adults"],
    ["Seniors", "seniors"],
  ];
  for (const [chName, age] of ageChannels) {
    await sql`insert into channels (name, kind, age_group) values (${chName}, ${"age"}, ${age})`;
  }
  for (let i = 0; i < teamIds.length; i++) {
    await sql`insert into channels (name, kind, team_id) values (${teamNames[i]!.name}, ${"team"}, ${teamIds[i]!})`;
  }
  for (let i = 0; i < groupIds.length; i++) {
    await sql`insert into channels (name, kind, group_id) values (${groups[i]!.name}, ${"group"}, ${groupIds[i]!})`;
  }

  const chId = churchCh[0]!.id;
  await sql`
    insert into messages (channel_id, user_id, author_name, body, created_at) values
    (${chId}, ${"seed"}, ${"Terran Williams"}, ${"Launch Sunday is 6 September — 08:30 or 10:30. If you can, sit with Acts 2 once before you arrive."}, ${at(-1, 16)}),
    (${chId}, ${"seed"}, ${"Julie Williams"}, ${"If you have kids: Little Lights is adjoining the hall (under 2.5). Nova Kids is upstairs to Grade 7. Teens stay with us."}, ${at(-1, 17, 20)}),
    (${chId}, ${"seed"}, ${"Priya Naidoo"}, ${"We still need two extra coffee urns for launch. I will be on the lawn after prayer on Wednesday."}, ${at(0, 8)})
  `;

  await sql`
    insert into resources (title, url, category, description, kind) values
    ('The vision of Nova', ${"https://novachurch.co.za/wp-content/uploads/2026/05/The-vision-of-Nova.pdf"}, 'Formation', 'Terran and Julie’s vision document — download and sit with it.', 'document'),
    ('Child protection policy', '/resources#safeguarding', 'Policies', 'How we screen volunteers, run rooms, and handle disclosures.', 'policy'),
    ('Sunday volunteer handbook', '/resources#handbook', 'Policies', 'Doors, coffee, kids, and the changeover between gatherings.', 'document'),
    ('Giving FAQ', '/give', 'Finance', 'Funds, tax receipts, and how to give by EFT.', 'link'),
    ('Map & parking', ${"https://maps.app.goo.gl/g6C6ADoiMv8oyqow9"}, 'Practical', '5 Eskol Avenue, off Strawberry Lane, Constantia.', 'link'),
    ('novachurch.co.za', ${"https://novachurch.co.za/"}, 'Practical', 'The public site — invite a friend, download the launch card.', 'link'),
    ('WhatsApp — news about Nova', ${"https://chat.whatsapp.com/Kd9Fhzw7LF56xOK305Xg1c"}, 'Practical', 'Join the broadcast list for journey updates.', 'link'),
    ('Email the team', ${"mailto:hello@novachurch.co.za"}, 'Practical', 'Questions, feedback, or a first hello.', 'link')
  `;

  await sql`
    insert into contributions (user_id, amount_cents, fund, method, note, anonymous, recurring, created_at) values
    (${"seed-hidden"}, 50000, ${"general"}, ${"eft"}, ${null}, true, true, ${at(-20, 9)}),
    (${"seed-hidden"}, 25000, ${"missions"}, ${"card"}, ${null}, true, false, ${at(-12, 11)}),
    (${"seed-hidden"}, 100000, ${"building"}, ${"eft"}, ${"Towards the Eskol Avenue home"}, true, false, ${at(-40, 10)})
  `;
}
