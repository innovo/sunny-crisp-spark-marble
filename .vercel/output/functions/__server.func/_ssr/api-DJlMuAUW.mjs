import { r as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CcvdN_gc.mjs";
import { t as authMiddleware } from "./middleware-CNBTcWLb.mjs";
import { r as getSql } from "./db-il8_fEyQ.mjs";
import { _ as isStaffRole, g as isOpsRole, r as CHURCH_ADDRESS, v as personName } from "./types-OZ7ZtIhQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-DJlMuAUW.js
function mapPerson(row) {
	return {
		id: row.id,
		userId: row.user_id,
		householdId: row.household_id,
		firstName: row.first_name,
		lastName: row.last_name,
		email: row.email,
		phone: row.phone,
		role: row.role,
		ageGroup: row.age_group,
		bio: row.bio,
		address: row.address,
		birthday: row.birthday,
		allergies: row.allergies,
		notes: row.notes,
		qrToken: row.qr_token,
		avatarHue: row.avatar_hue
	};
}
function token() {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	let s = "HL-";
	for (let i = 0; i < 6; i++) s += alphabet[Math.floor(Math.random() * 32)];
	return s;
}
function pickupCode() {
	return String(1e3 + Math.floor(Math.random() * 9e3));
}
function splitName(displayName, email) {
	const parts = (displayName || email?.split("@")[0] || "Friend").trim().split(/\s+/);
	return {
		first: parts[0] || "Friend",
		last: parts.slice(1).join(" ")
	};
}
function ageGroupFromBirthday(birthday) {
	if (!birthday) return "adults";
	const b = /* @__PURE__ */ new Date(birthday + "T12:00:00");
	const now = /* @__PURE__ */ new Date();
	let age = now.getFullYear() - b.getFullYear();
	const m = now.getMonth() - b.getMonth();
	if (m < 0 || m === 0 && now.getDate() < b.getDate()) age -= 1;
	if (age <= 5) return "little_ones";
	if (age <= 12) return "kids";
	if (age <= 18) return "youth";
	if (age <= 30) return "young_adults";
	if (age <= 55) return "adults";
	return "seniors";
}
function at(daysFromToday, hour, minute = 0) {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + daysFromToday);
	d.setHours(hour, minute, 0, 0);
	return d.toISOString();
}
function sast(date, hour, minute = 0) {
	const hh = String(hour).padStart(2, "0");
	const mm = String(minute).padStart(2, "0");
	return (/* @__PURE__ */ new Date(`${date}T${hh}:${mm}:00+02:00`)).toISOString();
}
function plusMinutes(iso, minutes) {
	return new Date(new Date(iso).getTime() + minutes * 6e4).toISOString();
}
async function resetChurch(sql) {
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
async function seedIfNeeded(sql) {
	if ((await sql`select value from church_meta where key = 'name'`)[0]?.value === "Nova Church") return;
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
		"Nkosi"
	];
	const householdIds = [];
	for (const h of households) {
		const rows = await sql`insert into households (name) values (${h}) returning id`;
		householdIds.push(rows[0].id);
	}
	const people = [
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
			hue: 272
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
			hue: 320
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
			hue: 18
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
			hue: 42
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
			hue: 210
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
			hue: 12
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
			hue: 48
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
			hue: 168
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
			hue: 200
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
			hue: 190
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
			hue: 250
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
			hue: 36
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
			hue: 16
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
			hue: 92
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
			hue: 120
		}
	];
	const personIds = [];
	for (const p of people) {
		const qr = token();
		const rows = await sql`
      insert into people (
        household_id, first_name, last_name, email, phone, role, age_group,
        bio, birthday, allergies, qr_token, avatar_hue
      ) values (
        ${householdIds[p.household]}, ${p.first}, ${p.last},
        ${p.email || null}, ${p.phone || null}, ${p.role}, ${p.age},
        ${p.bio || null}, ${p.birthday}, ${p.allergies ?? null}, ${qr}, ${p.hue}
      ) returning id`;
		personIds.push(rows[0].id);
	}
	const pid = (i) => personIds[i];
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
			description: "A quiet Wednesday for the people helping birth Nova. Come as you are — we will sit with Acts 2 and ask God to fill the house.",
			location: CHURCH_ADDRESS,
			starts: prayer,
			ends: plusMinutes(prayer, 90),
			vis: "members",
			kind: "midweek",
			cap: 80,
			price: 0,
			img: "scripture"
		},
		{
			title: "Launch Sunday · 08:30",
			description: "The first public gathering of Nova Church. Coffee, sung worship, and a word for a church just being born. Little Lights adjoining the hall; Nova Kids upstairs.",
			location: CHURCH_ADDRESS,
			starts: launchA,
			ends: plusMinutes(launchA, 90),
			vis: "public",
			kind: "sunday",
			cap: 400,
			price: 0,
			img: "sanctuary"
		},
		{
			title: "Launch Sunday · 10:30",
			description: "The later launch gathering — same table, same hope. If you are new to church, over church, or not sure what you believe: you are welcome.",
			location: CHURCH_ADDRESS,
			starts: launchB,
			ends: plusMinutes(launchB, 90),
			vis: "public",
			kind: "sunday",
			cap: 400,
			price: 0,
			img: "exterior"
		},
		{
			title: "Life together",
			description: "The church is most alive in homes. A midweek table for people learning to belong — no performance, just presence.",
			location: "Homes across the Constantia valley",
			starts: homes,
			ends: plusMinutes(homes, 120),
			vis: "members",
			kind: "midweek",
			cap: 40,
			price: 0,
			img: "study"
		},
		{
			title: "Nova Teens",
			description: "Teens gather in the main meeting on Sunday, and connect through the week. Games, honesty, and a short word.",
			location: "The lawn & loft",
			starts: teens,
			ends: plusMinutes(teens, 120),
			vis: "members",
			kind: "kids",
			cap: 40,
			price: 0,
			img: "kids"
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
			img: "arch"
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
			img: "sanctuary"
		}
	];
	const eventIds = [];
	for (const e of eventRows) {
		const rows = await sql`
      insert into events (
        title, description, location, starts_at, ends_at, visibility, kind, capacity, ticket_cents, image_key
      ) values (
        ${e.title}, ${e.description}, ${e.location}, ${e.starts}, ${e.ends}, ${e.vis}, ${e.kind}, ${e.cap}, ${e.price}, ${e.img}
      ) returning id`;
		eventIds.push(rows[0].id);
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
		{
			name: "Worship",
			ministry: "worship",
			desc: "Music, and the quiet work of helping us sing."
		},
		{
			name: "Nova Kids",
			ministry: "kids",
			desc: "Little Lights, the upstairs loft, and a church that feels like wonder."
		},
		{
			name: "Hospitality",
			ministry: "hospitality",
			desc: "Doors, coffee, courtyard tables, and first conversations."
		},
		{
			name: "Prayer",
			ministry: "prayer",
			desc: "The people who hold the rest of us when we cannot pray."
		},
		{
			name: "Media",
			ministry: "media",
			desc: "Sound, stories, and the recordings that travel further than Eskol Avenue."
		},
		{
			name: "Teams",
			ministry: "outreach",
			desc: "No passengers — every gift in the body, on mission in the city."
		}
	];
	const teamIds = [];
	for (const t of teamNames) {
		const rows = await sql`
      insert into teams (name, description, ministry) values (${t.name}, ${t.desc}, ${t.ministry}) returning id`;
		teamIds.push(rows[0].id);
	}
	for (const [ti, pi, seat] of [
		[
			0,
			4,
			"lead"
		],
		[
			0,
			10,
			"member"
		],
		[
			0,
			0,
			"member"
		],
		[
			1,
			2,
			"lead"
		],
		[
			1,
			12,
			"member"
		],
		[
			2,
			5,
			"lead"
		],
		[
			2,
			11,
			"member"
		],
		[
			3,
			7,
			"lead"
		],
		[
			3,
			8,
			"member"
		],
		[
			3,
			1,
			"member"
		],
		[
			4,
			10,
			"lead"
		],
		[
			4,
			4,
			"member"
		],
		[
			5,
			0,
			"lead"
		],
		[
			5,
			1,
			"member"
		],
		[
			5,
			9,
			"member"
		]
	]) await sql`insert into team_members (team_id, people_id, seat) values (${teamIds[ti]}, ${pid(pi)}, ${seat})`;
	const launchId = eventIds[1];
	await sql`insert into roster_slots (event_id, team_id, people_id, seat_label) values
    (${launchId}, ${teamIds[0]}, ${pid(4)}, 'Worship lead'),
    (${launchId}, ${teamIds[0]}, ${pid(10)}, 'Vocals'),
    (${launchId}, ${teamIds[1]}, ${pid(2)}, 'Nova Kids lead'),
    (${launchId}, ${teamIds[1]}, ${pid(12)}, 'Little Lights'),
    (${launchId}, ${teamIds[2]}, ${pid(5)}, 'Doors'),
    (${launchId}, ${teamIds[2]}, ${pid(11)}, 'Coffee'),
    (${launchId}, ${teamIds[4]}, ${pid(4)}, 'Sound')`;
	const groups = [
		{
			name: "Life together · valley homes",
			desc: "The church is most alive in homes. Unhurried conversation, Scripture, and a table.",
			meets: "Thursdays · 19:00",
			loc: "Homes across Constantia",
			age: "adults",
			img: "study",
			leader: 0
		},
		{
			name: "Young adults",
			desc: "Twenty-somethings learning to follow Jesus in Cape Town — work, friendship, and faith.",
			meets: "Wednesdays · 19:30",
			loc: "Rotating homes",
			age: "young_adults",
			img: "table",
			leader: 5
		},
		{
			name: "Scripture circle",
			desc: "Thursday mornings with Ruth. Tea, psalms, and long memory.",
			meets: "Thursdays · 10:00",
			loc: "Library room",
			age: "seniors",
			img: "scripture",
			leader: 14
		},
		{
			name: "Nova Teens",
			desc: "Teens join the main meeting on Sunday, and connect through the week.",
			meets: "Fridays · 18:30",
			loc: "The loft",
			age: "youth",
			img: "kids",
			leader: 9
		}
	];
	const groupIds = [];
	for (const g of groups) {
		const rows = await sql`
      insert into groups (name, description, meets, location, age_group, image_key, leader_people_id)
      values (${g.name}, ${g.desc}, ${g.meets}, ${g.loc}, ${g.age}, ${g.img}, ${pid(g.leader)})
      returning id`;
		groupIds.push(rows[0].id);
	}
	for (const [gi, pi] of [
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
		[3, 9]
	]) await sql`insert into group_members (group_id, people_id) values (${groupIds[gi]}, ${pid(pi)})`;
	const churchCh = await sql`
    insert into channels (name, kind) values ('Nova', 'church') returning id`;
	for (const [chName, age] of [
		["Little Lights parents", "little_ones"],
		["Nova Kids shepherds", "kids"],
		["Teens", "youth"],
		["Young adults", "young_adults"],
		["Adults", "adults"],
		["Seniors", "seniors"]
	]) await sql`insert into channels (name, kind, age_group) values (${chName}, ${"age"}, ${age})`;
	for (let i = 0; i < teamIds.length; i++) await sql`insert into channels (name, kind, team_id) values (${teamNames[i].name}, ${"team"}, ${teamIds[i]})`;
	for (let i = 0; i < groupIds.length; i++) await sql`insert into channels (name, kind, group_id) values (${groups[i].name}, ${"group"}, ${groupIds[i]})`;
	const chId = churchCh[0].id;
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
async function loadMe(userId, hint) {
	const sql = await getSql();
	await seedIfNeeded(sql);
	const existing = await sql`select * from people where user_id = ${userId} limit 1`;
	if (existing[0]) {
		const p = mapPerson(existing[0]);
		return {
			...p,
			isStaff: isStaffRole(p.role),
			isOps: isOpsRole(p.role),
			displayName: personName(p)
		};
	}
	const role = ((await sql`select count(*)::int as n from people where user_id is not null`)[0]?.n ?? 0) === 0 ? "pastor" : "member";
	const { first, last } = splitName(hint?.name ?? null, hint?.email ?? null);
	const hh = await sql`insert into households (name) values (${last || first}) returning id`;
	const qr = token();
	const hue = Math.floor(Math.random() * 360);
	const p = mapPerson((await sql`
    insert into people (
      user_id, household_id, first_name, last_name, email, role, age_group, qr_token, avatar_hue
    ) values (
      ${userId}, ${hh[0].id}, ${first}, ${last}, ${hint?.email ?? null}, ${role}, ${"adults"}, ${qr}, ${hue}
    ) returning *`)[0]);
	const church = await sql`select id from channels where kind = 'church' limit 1`;
	if (church[0] && role === "pastor") await sql`
      insert into messages (channel_id, user_id, author_name, body)
      values (${church[0].id}, ${userId}, ${personName(p)}, ${"I have just arrived at Nova. Grateful to be here."})
    `;
	return {
		...p,
		isStaff: isStaffRole(p.role),
		isOps: isOpsRole(p.role),
		displayName: personName(p)
	};
}
function mapEvent(row) {
	return {
		id: row.id,
		title: row.title,
		description: row.description,
		location: row.location,
		startsAt: row.starts_at,
		endsAt: row.ends_at,
		visibility: row.visibility === "public" ? "public" : "members",
		kind: row.kind,
		capacity: row.capacity,
		ticketCents: row.ticket_cents,
		imageKey: row.image_key,
		going: Number(row.going) || 0,
		mine: Boolean(row.mine)
	};
}
function mapNews(row) {
	return {
		id: row.id,
		title: row.title,
		excerpt: row.excerpt,
		body: row.body,
		authorName: row.author_name,
		publishedAt: row.published_at,
		pinned: row.pinned,
		audience: row.audience,
		imageKey: row.image_key
	};
}
function mapSermon(row) {
	return {
		id: row.id,
		title: row.title,
		speaker: row.speaker,
		series: row.series,
		scripture: row.scripture,
		preachedAt: row.preached_at,
		durationSeconds: row.duration_seconds,
		description: row.description,
		imageKey: row.image_key,
		transcript: row.transcript
	};
}
function roomForAge(ageGroup) {
	if (ageGroup === "little_ones") return "Little Lights";
	if (ageGroup === "youth") return "Teens";
	return "Nova Kids";
}
var getPublicSite_createServerFn_handler = createServerRpc({
	id: "553eafda76b5ea44aa72c56c99dc471d3e761419406c0a9cf6483534cb516294",
	name: "getPublicSite",
	filename: "src/lib/church/api.ts"
}, (opts) => getPublicSite.__executeServer(opts));
var getPublicSite = createServerFn({ method: "GET" }).handler(getPublicSite_createServerFn_handler, async () => {
	const sql = await getSql();
	await seedIfNeeded(sql);
	const events = await sql`
    select e.*,
      (select count(*)::int from event_registrations r where r.event_id = e.id and r.status = 'going') as going,
      false as mine
    from events e
    where e.visibility = 'public' and e.starts_at > now() - interval '2 hours'
    order by e.starts_at asc
    limit 6
  `;
	const sermons = await sql`
    select * from sermons order by preached_at desc limit 1
  `;
	return {
		events: events.map(mapEvent),
		sermon: sermons[0] ? mapSermon(sermons[0]) : null
	};
});
var getHome_createServerFn_handler = createServerRpc({
	id: "d9745863713109022ab5bd50494b7657f4fd97376472a533ce3cf2c114d2834e",
	name: "getHome",
	filename: "src/lib/church/api.ts"
}, (opts) => getHome.__executeServer(opts));
var getHome = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(getHome_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId, data);
	const sql = await getSql();
	const events = await sql`
      select e.*,
        (select count(*)::int from event_registrations r where r.event_id = e.id and r.status = 'going') as going,
        exists(select 1 from event_registrations r where r.event_id = e.id and r.user_id = ${context.userId} and r.status = 'going') as mine
      from events e
      where e.starts_at > now() - interval '2 hours'
      order by e.starts_at asc
      limit 5
    `;
	const news = await sql`
      select * from news order by pinned desc, published_at desc limit 4
    `;
	const sermon = await sql`
      select * from sermons order by preached_at desc limit 1
    `;
	const myTeams = await sql`
      select t.name from teams t
      join team_members tm on tm.team_id = t.id
      where tm.people_id = ${me.id}
    `;
	const giving = await sql`
      select coalesce(sum(amount_cents), 0)::int as total
      from contributions where user_id = ${context.userId}
    `;
	const kidsToday = await sql`
      select count(*)::int as n from checkins
      where service_date = current_date and checked_out_at is null
    `;
	const unreadHint = await sql`
      select count(*)::int as n from messages where created_at > now() - interval '2 days'
    `;
	return {
		me,
		events: events.map(mapEvent),
		news: news.map(mapNews),
		sermon: sermon[0] ? mapSermon(sermon[0]) : null,
		teams: myTeams.map((t) => t.name),
		givenCents: giving[0]?.total ?? 0,
		kidsOnSite: kidsToday[0]?.n ?? 0,
		recentMessages: unreadHint[0]?.n ?? 0
	};
});
var getMe_createServerFn_handler = createServerRpc({
	id: "95b4bc422b50138809a1f4d9a6e8d0a64d46249de6d02fc112b2e01caadf8be6",
	name: "getMe",
	filename: "src/lib/church/api.ts"
}, (opts) => getMe.__executeServer(opts));
var getMe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(getMe_createServerFn_handler, async ({ context, data }) => loadMe(context.userId, data));
var updateProfile_createServerFn_handler = createServerRpc({
	id: "696d2649221b543f7750ea058e3751a270d980f5b4862ca5e34d433b681f3cdf",
	name: "updateProfile",
	filename: "src/lib/church/api.ts"
}, (opts) => updateProfile.__executeServer(opts));
var updateProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(updateProfile_createServerFn_handler, async ({ context, data }) => {
	await (await getSql())`
      update people set
        first_name = ${data.firstName.trim() || "Friend"},
        last_name = ${data.lastName.trim()},
        phone = ${data.phone?.trim() || null},
        bio = ${data.bio?.trim() || null},
        age_group = ${data.ageGroup || "adults"},
        birthday = ${data.birthday || null},
        address = ${data.address?.trim() || null}
      where user_id = ${context.userId}
    `;
	return loadMe(context.userId);
});
var listPeople_createServerFn_handler = createServerRpc({
	id: "3ec23f7dc8f855d13d257fa11d5972ebe50a5eafbbe383caca669764d869dde3",
	name: "listPeople",
	filename: "src/lib/church/api.ts"
}, (opts) => listPeople.__executeServer(opts));
var listPeople = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listPeople_createServerFn_handler, async ({ context }) => {
	await loadMe(context.userId);
	return (await (await getSql())`
      select * from people where role <> 'child' order by last_name, first_name
    `).map(mapPerson);
});
var listEvents_createServerFn_handler = createServerRpc({
	id: "b4f4cfacb1d52ffd89458eb2b69176bd901a85fe1725135bf1dc66b58d5dfdd2",
	name: "listEvents",
	filename: "src/lib/church/api.ts"
}, (opts) => listEvents.__executeServer(opts));
var listEvents = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listEvents_createServerFn_handler, async ({ context }) => {
	await loadMe(context.userId);
	return (await (await getSql())`
      select e.*,
        (select count(*)::int from event_registrations r where r.event_id = e.id and r.status = 'going') as going,
        exists(select 1 from event_registrations r where r.event_id = e.id and r.user_id = ${context.userId} and r.status = 'going') as mine
      from events e
      where e.starts_at > now() - interval '1 day'
      order by e.starts_at asc
    `).map(mapEvent);
});
var getEvent_createServerFn_handler = createServerRpc({
	id: "043cf8a7dc0d10d564caa020782a66718ee4ec2f140751bf081e94f6ed35e820",
	name: "getEvent",
	filename: "src/lib/church/api.ts"
}, (opts) => getEvent.__executeServer(opts));
var getEvent = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(getEvent_createServerFn_handler, async ({ context, data: id }) => {
	await loadMe(context.userId);
	const sql = await getSql();
	const rows = await sql`
      select e.*,
        (select count(*)::int from event_registrations r where r.event_id = e.id and r.status = 'going') as going,
        exists(select 1 from event_registrations r where r.event_id = e.id and r.user_id = ${context.userId} and r.status = 'going') as mine
      from events e where e.id = ${id} limit 1
    `;
	if (!rows[0]) throw new Error("Event not found");
	const roster = await sql`
      select rs.seat_label, p.first_name, p.last_name, t.name as team
      from roster_slots rs
      join people p on p.id = rs.people_id
      join teams t on t.id = rs.team_id
      where rs.event_id = ${id}
      order by t.name, rs.seat_label
    `;
	return {
		event: mapEvent(rows[0]),
		roster: roster.map((r) => ({
			seat: r.seat_label,
			name: `${r.first_name} ${r.last_name}`.trim(),
			team: r.team
		}))
	};
});
var rsvpEvent_createServerFn_handler = createServerRpc({
	id: "026e1860827dbb6706168f425503f359c565652a741227e5a83c481cdcdec4d4",
	name: "rsvpEvent",
	filename: "src/lib/church/api.ts"
}, (opts) => rsvpEvent.__executeServer(opts));
var rsvpEvent = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(rsvpEvent_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const ev = await sql`
      select id, ticket_cents from events where id = ${data.eventId} limit 1
    `;
	if (!ev[0]) throw new Error("Event not found");
	const tickets = Math.max(1, Math.min(8, data.tickets ?? 1));
	const paid = ev[0].ticket_cents * tickets;
	await sql`
      insert into event_registrations (event_id, user_id, people_id, tickets, status, paid_cents)
      values (${data.eventId}, ${context.userId}, ${me.id}, ${tickets}, 'going', ${paid})
      on conflict (event_id, user_id) do update set status = 'going', tickets = ${tickets}, paid_cents = ${paid}
    `;
	return {
		ok: true,
		paidCents: paid
	};
});
var cancelRsvp_createServerFn_handler = createServerRpc({
	id: "c8e1f7da6b5897d78eadd1f419f24b496d3fbd2b912ec18a5dea1113e47c09bf",
	name: "cancelRsvp",
	filename: "src/lib/church/api.ts"
}, (opts) => cancelRsvp.__executeServer(opts));
var cancelRsvp = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((eventId) => eventId).handler(cancelRsvp_createServerFn_handler, async ({ context, data: eventId }) => {
	await (await getSql())`
      update event_registrations set status = 'cancelled'
      where event_id = ${eventId} and user_id = ${context.userId}
    `;
	return { ok: true };
});
var createEvent_createServerFn_handler = createServerRpc({
	id: "522a67b10349f18fc1a25c7f1e27617e4735e56579f579ff06adba49db546162",
	name: "createEvent",
	filename: "src/lib/church/api.ts"
}, (opts) => createEvent.__executeServer(opts));
var createEvent = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(createEvent_createServerFn_handler, async ({ context, data }) => {
	if (!(await loadMe(context.userId)).isStaff) throw new Error("Only staff can create events");
	return { id: (await (await getSql())`
      insert into events (
        title, description, location, starts_at, ends_at, visibility, kind, capacity, ticket_cents, image_key, created_by_user_id
      ) values (
        ${data.title.trim()}, ${data.description.trim()}, ${data.location.trim()},
        ${data.startsAt}, ${data.endsAt}, ${data.visibility}, ${data.kind},
        ${data.capacity ?? null}, ${Math.max(0, data.ticketCents | 0)}, ${data.imageKey || "sanctuary"}, ${context.userId}
      ) returning id
    `)[0].id };
});
var listNews_createServerFn_handler = createServerRpc({
	id: "2929b1bdf0dca78915e44143a9a12e71b2a69881dc937b4adf5fd46f4a508eb7",
	name: "listNews",
	filename: "src/lib/church/api.ts"
}, (opts) => listNews.__executeServer(opts));
var listNews = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listNews_createServerFn_handler, async ({ context }) => {
	await loadMe(context.userId);
	return (await (await getSql())`
      select * from news order by pinned desc, published_at desc
    `).map(mapNews);
});
var postNews_createServerFn_handler = createServerRpc({
	id: "5f95f4aa5a87d19af555ebd5ee0bf08ee912c7bf845f3c89b2e4216b9282b713",
	name: "postNews",
	filename: "src/lib/church/api.ts"
}, (opts) => postNews.__executeServer(opts));
var postNews = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(postNews_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	if (!me.isStaff) throw new Error("Only staff can post news");
	const sql = await getSql();
	const excerpt = data.body.trim().slice(0, 160);
	await sql`
      insert into news (title, excerpt, body, author_name, author_user_id, audience, image_key)
      values (
        ${data.title.trim()}, ${excerpt}, ${data.body.trim()}, ${me.displayName}, ${context.userId},
        ${data.audience || "all"}, ${"arch"}
      )
    `;
	return { ok: true };
});
var listSermons_createServerFn_handler = createServerRpc({
	id: "09b4d149db7dcf3341e2f0e3d43f3452a2ca39e8827a168f5ed0df9d65e276ee",
	name: "listSermons",
	filename: "src/lib/church/api.ts"
}, (opts) => listSermons.__executeServer(opts));
var listSermons = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listSermons_createServerFn_handler, async ({ context }) => {
	await loadMe(context.userId);
	return (await (await getSql())`select * from sermons order by preached_at desc`).map(mapSermon);
});
var listTeams_createServerFn_handler = createServerRpc({
	id: "b57564feaf0a857fa7e685038c79683a3616e0ee849f1ae80a3bfc0be2533d59",
	name: "listTeams",
	filename: "src/lib/church/api.ts"
}, (opts) => listTeams.__executeServer(opts));
var listTeams = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listTeams_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const teams = await sql`
      select * from teams order by name
    `;
	const members = await sql`
      select tm.team_id, tm.people_id, tm.seat, p.first_name, p.last_name, p.user_id
      from team_members tm join people p on p.id = tm.people_id
    `;
	return teams.map((t) => {
		const ms = members.filter((m) => m.team_id === t.id);
		return {
			id: t.id,
			name: t.name,
			description: t.description,
			ministry: t.ministry,
			members: ms.map((m) => ({
				peopleId: m.people_id,
				name: `${m.first_name} ${m.last_name}`.trim(),
				seat: m.seat,
				userId: m.user_id
			})),
			mine: ms.some((m) => m.people_id === me.id)
		};
	});
});
var joinTeam_createServerFn_handler = createServerRpc({
	id: "090df1b09368125453b0f42e3bf8d33b17dea366d843b0215c175f306b9320a6",
	name: "joinTeam",
	filename: "src/lib/church/api.ts"
}, (opts) => joinTeam.__executeServer(opts));
var joinTeam = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((teamId) => teamId).handler(joinTeam_createServerFn_handler, async ({ context, data: teamId }) => {
	const me = await loadMe(context.userId);
	await (await getSql())`
      insert into team_members (team_id, people_id, seat)
      values (${teamId}, ${me.id}, 'member')
      on conflict (team_id, people_id) do nothing
    `;
	return { ok: true };
});
var setAvailability_createServerFn_handler = createServerRpc({
	id: "1601a6b014abf83873163e636426440f534f57813254e032c45476b3aca582b6",
	name: "setAvailability",
	filename: "src/lib/church/api.ts"
}, (opts) => setAvailability.__executeServer(opts));
var setAvailability = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(setAvailability_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	await (await getSql())`
      insert into availability (people_id, team_id, day, status)
      values (${me.id}, ${data.teamId}, ${data.day}, ${data.status})
      on conflict (people_id, team_id, day) do update set status = ${data.status}
    `;
	return { ok: true };
});
var listAvailability_createServerFn_handler = createServerRpc({
	id: "e3452effda8d256020da2d3467a3450c5e7c0f31eab07172b12f40a1c17670f7",
	name: "listAvailability",
	filename: "src/lib/church/api.ts"
}, (opts) => listAvailability.__executeServer(opts));
var listAvailability = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((teamId) => teamId).handler(listAvailability_createServerFn_handler, async ({ context, data: teamId }) => {
	const me = await loadMe(context.userId);
	return (await getSql())`
      select day, status from availability
      where people_id = ${me.id} and team_id = ${teamId}
      order by day
    `;
});
var listGroups_createServerFn_handler = createServerRpc({
	id: "2f9d9671d7222a3cb440c09673d5017274d5331d32eb5393a52bf4c0e3e3bd3b",
	name: "listGroups",
	filename: "src/lib/church/api.ts"
}, (opts) => listGroups.__executeServer(opts));
var listGroups = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listGroups_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	return (await (await getSql())`
      select g.*,
        (select first_name || ' ' || last_name from people p where p.id = g.leader_people_id) as leader,
        (select count(*)::int from group_members gm where gm.group_id = g.id) as n,
        exists(select 1 from group_members gm where gm.group_id = g.id and gm.people_id = ${me.id}) as mine
      from groups g
      order by g.name
    `).map((g) => ({
		id: g.id,
		name: g.name,
		description: g.description,
		meets: g.meets,
		location: g.location,
		ageGroup: g.age_group,
		imageKey: g.image_key,
		leaderName: g.leader,
		memberCount: g.n,
		mine: Boolean(g.mine)
	}));
});
var joinGroup_createServerFn_handler = createServerRpc({
	id: "41574125875090f04501b6bcda25218dec9f03e6c504d34d819b166ca5ccf22b",
	name: "joinGroup",
	filename: "src/lib/church/api.ts"
}, (opts) => joinGroup.__executeServer(opts));
var joinGroup = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((groupId) => groupId).handler(joinGroup_createServerFn_handler, async ({ context, data: groupId }) => {
	const me = await loadMe(context.userId);
	await (await getSql())`
      insert into group_members (group_id, people_id)
      values (${groupId}, ${me.id})
      on conflict (group_id, people_id) do nothing
    `;
	return { ok: true };
});
var listChannels_createServerFn_handler = createServerRpc({
	id: "6a554b1185d1942487042ec022dc5bbedf1f356a0c5b0ec1e134f43d505167a0",
	name: "listChannels",
	filename: "src/lib/church/api.ts"
}, (opts) => listChannels.__executeServer(opts));
var listChannels = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listChannels_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	return await (await getSql())`
      select c.id, c.name, c.kind
      from channels c
      where c.kind = 'church'
         or (c.kind = 'age' and c.age_group = ${me.ageGroup})
         or (c.kind = 'team' and exists (
              select 1 from team_members tm where tm.team_id = c.team_id and tm.people_id = ${me.id}
            ))
         or (c.kind = 'group' and exists (
              select 1 from group_members gm where gm.group_id = c.group_id and gm.people_id = ${me.id}
            ))
      order by case c.kind when 'church' then 0 when 'age' then 1 when 'team' then 2 else 3 end, c.name
    `;
});
var listMessages_createServerFn_handler = createServerRpc({
	id: "93b51dac5773ebaaeb24f0037466a05e177de4fa94ccb4c6f39ab057ee8548a8",
	name: "listMessages",
	filename: "src/lib/church/api.ts"
}, (opts) => listMessages.__executeServer(opts));
var listMessages = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((channelId) => channelId).handler(listMessages_createServerFn_handler, async ({ context, data: channelId }) => {
	await loadMe(context.userId);
	return (await (await getSql())`
      select * from messages where channel_id = ${channelId} order by created_at asc limit 200
    `).map((m) => ({
		id: m.id,
		channelId: m.channel_id,
		userId: m.user_id,
		authorName: m.author_name,
		body: m.body,
		createdAt: m.created_at
	}));
});
var sendMessage_createServerFn_handler = createServerRpc({
	id: "28dd6ef0b7e82b07b8529b72dd87a6265134dcf23eda88242562abaf7a2f73b0",
	name: "sendMessage",
	filename: "src/lib/church/api.ts"
}, (opts) => sendMessage.__executeServer(opts));
var sendMessage = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(sendMessage_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	const body = data.body.trim().slice(0, 2e3);
	if (!body) return { ok: false };
	await (await getSql())`
      insert into messages (channel_id, user_id, author_name, body)
      values (${data.channelId}, ${context.userId}, ${me.displayName}, ${body})
    `;
	return { ok: true };
});
var listResources_createServerFn_handler = createServerRpc({
	id: "064b32bda14c6c8a80e83812be4bb6a505ce119c344c4e92cd5000e346589959",
	name: "listResources",
	filename: "src/lib/church/api.ts"
}, (opts) => listResources.__executeServer(opts));
var listResources = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listResources_createServerFn_handler, async ({ context }) => {
	await loadMe(context.userId);
	return (await getSql())`
      select id, title, url, category, description, kind from resources order by category, title
    `;
});
var give_createServerFn_handler = createServerRpc({
	id: "9d3d1c6678328b4505591f07d55bc3efb2c08d0e723baef49cacaad7ab75dae7",
	name: "give",
	filename: "src/lib/church/api.ts"
}, (opts) => give.__executeServer(opts));
var give = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(give_createServerFn_handler, async ({ context, data }) => {
	await loadMe(context.userId);
	const amount = Math.round(data.amountCents);
	if (amount < 1e3) throw new Error("Minimum gift is R10");
	await (await getSql())`
      insert into contributions (user_id, amount_cents, fund, method, note, anonymous, recurring)
      values (
        ${context.userId}, ${amount}, ${data.fund}, ${data.method},
        ${data.note?.trim() || null}, ${Boolean(data.anonymous)}, ${Boolean(data.recurring)}
      )
    `;
	return { ok: true };
});
var myGiving_createServerFn_handler = createServerRpc({
	id: "174334a48df6b8af8a11a5e7e36bfae49d823db8ec5c7232a7f50c29c29492be",
	name: "myGiving",
	filename: "src/lib/church/api.ts"
}, (opts) => myGiving.__executeServer(opts));
var myGiving = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(myGiving_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const rows = await sql`
      select id, amount_cents, fund, method, note, anonymous, recurring, created_at
      from contributions
      where user_id = ${context.userId}
      order by created_at desc
    `;
	const totals = me.isStaff ? await sql`
          select fund, sum(amount_cents)::int as total from contributions group by fund
        ` : [];
	return {
		history: rows.map((r) => ({
			id: r.id,
			amountCents: r.amount_cents,
			fund: r.fund,
			method: r.method,
			note: r.note,
			anonymous: r.anonymous,
			recurring: r.recurring,
			createdAt: r.created_at
		})),
		totals
	};
});
var listChildren_createServerFn_handler = createServerRpc({
	id: "0de621dc6ac93fc77e783e5a39fb6e210be3c06aaddb5e8ddb0ee82561a46e9d",
	name: "listChildren",
	filename: "src/lib/church/api.ts"
}, (opts) => listChildren.__executeServer(opts));
var listChildren = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listChildren_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	const rows = await (await getSql())`
      select c.id, c.first_name, c.last_name, c.birthday, c.allergies, c.qr_token, c.household_id, c.notes,
        (select p.first_name || ' ' || p.last_name from people p
          where p.household_id = c.household_id and p.role <> 'child' and p.id <> c.id
          order by case p.role when 'pastor' then 0 when 'staff' then 1 else 2 end
          limit 1) as parent
      from people c
      where c.role = 'child'
      order by c.first_name
    `;
	const mine = rows.filter((r) => r.household_id && r.household_id === me.householdId);
	return (me.isOps ? rows : mine).map((r) => ({
		id: r.id,
		firstName: r.first_name,
		lastName: r.last_name,
		birthday: r.birthday,
		allergies: r.allergies,
		qrToken: r.qr_token,
		householdId: r.household_id,
		notes: r.notes,
		parentName: r.parent
	}));
});
var registerChild_createServerFn_handler = createServerRpc({
	id: "cd3faf60e8e7de684bebba1ce68f0fa413f4c8f71c5f588c040cd92ad62c7e3a",
	name: "registerChild",
	filename: "src/lib/church/api.ts"
}, (opts) => registerChild.__executeServer(opts));
var registerChild = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(registerChild_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const birthday = data.birthday || null;
	const age = ageGroupFromBirthday(birthday);
	const roleAge = age === "little_ones" || age === "kids" || age === "youth" ? age : "kids";
	const rows = await sql`
      insert into people (
        household_id, first_name, last_name, role, age_group, birthday, allergies, notes, qr_token, avatar_hue
      ) values (
        ${data.walkIn ? null : me.householdId}, ${data.firstName.trim()}, ${data.lastName.trim()}, ${"child"}, ${roleAge},
        ${birthday}, ${data.allergies?.trim() || null}, ${data.walkIn ? "Walk-in" : null}, ${token()}, ${Math.floor(Math.random() * 360)}
      ) returning id, qr_token
    `;
	return {
		id: rows[0].id,
		qrToken: rows[0].qr_token
	};
});
var checkInChild_createServerFn_handler = createServerRpc({
	id: "af52b47094dab801d9640bd9ba199cedc5536b1cada7bb410274f38646cdc46a",
	name: "checkInChild",
	filename: "src/lib/church/api.ts"
}, (opts) => checkInChild.__executeServer(opts));
var checkInChild = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(checkInChild_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const child = await sql`select id, first_name, last_name, age_group, allergies, qr_token, notes, household_id from people where id = ${data.childId} limit 1`;
	if (!child[0]) throw new Error("Child not found");
	if (!me.isOps && child[0].household_id !== me.householdId) throw new Error("You can only check in your own children");
	if ((await sql`
      select id from checkins
      where child_people_id = ${data.childId} and service_date = current_date and checked_out_at is null
      limit 1
    `)[0]) throw new Error("Already checked in");
	const code = pickupCode();
	const room = roomForAge(child[0].age_group);
	const walkIn = child[0].notes === "Walk-in";
	const rows = await sql`
      insert into checkins (
        child_people_id, service_label, service_date, checked_in_by_user_id, room, pickup_code, walk_in
      ) values (
        ${data.childId}, ${data.serviceLabel}, current_date, ${context.userId}, ${room}, ${code}, ${walkIn}
      ) returning id, checked_in_at, service_date
    `;
	const c = child[0];
	return {
		id: rows[0].id,
		childPeopleId: c.id,
		childName: `${c.first_name} ${c.last_name}`.trim(),
		age: null,
		allergies: c.allergies,
		qrToken: c.qr_token,
		serviceLabel: data.serviceLabel,
		serviceDate: rows[0].service_date,
		checkedInAt: rows[0].checked_in_at,
		checkedOutAt: null,
		room,
		pickupCode: code,
		walkIn
	};
});
var checkOutChild_createServerFn_handler = createServerRpc({
	id: "efbdc3f5e9dfb896af624d44628efc0c3add512c076eceb6eb0819f221aa7a47",
	name: "checkOutChild",
	filename: "src/lib/church/api.ts"
}, (opts) => checkOutChild.__executeServer(opts));
var checkOutChild = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(checkOutChild_createServerFn_handler, async ({ context, data }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	const row = await sql`
      select id, pickup_code from checkins where id = ${data.checkinId} limit 1
    `;
	if (!row[0]) throw new Error("Check-in not found");
	if (!me.isOps && data.pickupCode && data.pickupCode !== row[0].pickup_code) throw new Error("Pickup code does not match");
	if (!me.isOps && !data.pickupCode) throw new Error("Pickup code required");
	await sql`update checkins set checked_out_at = now() where id = ${data.checkinId}`;
	return { ok: true };
});
var todayCheckins_createServerFn_handler = createServerRpc({
	id: "624f0a53b6d7bba6ea5b60690faa15c7a6f0fb204c1d882c01dbeb983174555b",
	name: "todayCheckins",
	filename: "src/lib/church/api.ts"
}, (opts) => todayCheckins.__executeServer(opts));
var todayCheckins = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(todayCheckins_createServerFn_handler, async ({ context }) => {
	const me = await loadMe(context.userId);
	const sql = await getSql();
	return (me.isOps ? await sql`
          select ck.id, ck.child_people_id, ck.service_label, ck.service_date, ck.checked_in_at,
                 ck.checked_out_at, ck.room, ck.pickup_code, ck.walk_in,
                 p.first_name, p.last_name, p.birthday, p.allergies, p.qr_token
          from checkins ck
          join people p on p.id = ck.child_people_id
          where ck.service_date = current_date
          order by ck.checked_in_at desc
        ` : await sql`
          select ck.id, ck.child_people_id, ck.service_label, ck.service_date, ck.checked_in_at,
                 ck.checked_out_at, ck.room, ck.pickup_code, ck.walk_in,
                 p.first_name, p.last_name, p.birthday, p.allergies, p.qr_token
          from checkins ck
          join people p on p.id = ck.child_people_id
          where ck.service_date = current_date and p.household_id = ${me.householdId}
          order by ck.checked_in_at desc
        `).map((r) => ({
		id: r.id,
		childPeopleId: r.child_people_id,
		childName: `${r.first_name} ${r.last_name}`.trim(),
		age: null,
		allergies: r.allergies,
		qrToken: r.qr_token,
		serviceLabel: r.service_label,
		serviceDate: r.service_date,
		checkedInAt: r.checked_in_at,
		checkedOutAt: r.checked_out_at,
		room: r.room,
		pickupCode: r.pickup_code,
		walkIn: r.walk_in
	}));
});
var scanCheckIn_createServerFn_handler = createServerRpc({
	id: "31469da40c6d60df109be4e3917e0971b48b70086d1c416b032c8b74e0fcc2bc",
	name: "scanCheckIn",
	filename: "src/lib/church/api.ts"
}, (opts) => scanCheckIn.__executeServer(opts));
var scanCheckIn = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((d) => d).handler(scanCheckIn_createServerFn_handler, async ({ context, data }) => {
	if (!(await loadMe(context.userId)).isOps) throw new Error("Only volunteers and staff can scan at the desk");
	const sql = await getSql();
	const child = await sql`
      select id from people where qr_token = ${data.qrToken.trim().toUpperCase()} and role = 'child' limit 1
    `;
	if (!child[0]) throw new Error("QR code not recognised");
	const childId = child[0].id;
	const c = (await sql`select id, first_name, last_name, age_group, allergies, qr_token, notes from people where id = ${childId} limit 1`)[0];
	if ((await sql`
      select id from checkins
      where child_people_id = ${childId} and service_date = current_date and checked_out_at is null
      limit 1
    `)[0]) throw new Error("Already checked in");
	const code = pickupCode();
	const room = roomForAge(c.age_group);
	const walkIn = c.notes === "Walk-in";
	const inserted = await sql`
      insert into checkins (
        child_people_id, service_label, service_date, checked_in_by_user_id, room, pickup_code, walk_in
      ) values (
        ${childId}, ${data.serviceLabel}, current_date, ${context.userId}, ${room}, ${code}, ${walkIn}
      ) returning id, checked_in_at, service_date
    `;
	return {
		id: inserted[0].id,
		childPeopleId: c.id,
		childName: `${c.first_name} ${c.last_name}`.trim(),
		age: null,
		allergies: c.allergies,
		qrToken: c.qr_token,
		serviceLabel: data.serviceLabel,
		serviceDate: inserted[0].service_date,
		checkedInAt: inserted[0].checked_in_at,
		checkedOutAt: null,
		room,
		pickupCode: code,
		walkIn
	};
});
//#endregion
export { cancelRsvp_createServerFn_handler, checkInChild_createServerFn_handler, checkOutChild_createServerFn_handler, createEvent_createServerFn_handler, getEvent_createServerFn_handler, getHome_createServerFn_handler, getMe_createServerFn_handler, getPublicSite_createServerFn_handler, give_createServerFn_handler, joinGroup_createServerFn_handler, joinTeam_createServerFn_handler, listAvailability_createServerFn_handler, listChannels_createServerFn_handler, listChildren_createServerFn_handler, listEvents_createServerFn_handler, listGroups_createServerFn_handler, listMessages_createServerFn_handler, listNews_createServerFn_handler, listPeople_createServerFn_handler, listResources_createServerFn_handler, listSermons_createServerFn_handler, listTeams_createServerFn_handler, myGiving_createServerFn_handler, postNews_createServerFn_handler, registerChild_createServerFn_handler, rsvpEvent_createServerFn_handler, scanCheckIn_createServerFn_handler, sendMessage_createServerFn_handler, setAvailability_createServerFn_handler, todayCheckins_createServerFn_handler, updateProfile_createServerFn_handler };
