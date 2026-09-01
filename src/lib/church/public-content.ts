import type { ChurchEvent, Sermon } from "./types";
import { CHURCH_ADDRESS } from "./types";

function sast(date: string, hour: number, minute = 0) {
  const hh = String(hour).padStart(2, "0");
  const mm = String(minute).padStart(2, "0");
  return new Date(`${date}T${hh}:${mm}:00+02:00`).toISOString();
}

function plusMinutes(iso: string, minutes: number) {
  return new Date(new Date(iso).getTime() + minutes * 60000).toISOString();
}

export function publicHappenings(): { events: ChurchEvent[]; sermon: Sermon } {
  const launchA = sast("2026-09-06", 8, 30);
  const launchB = sast("2026-09-06", 10, 30);
  const sun = sast("2026-09-13", 9, 30);
  const homes = sast("2026-09-10", 19, 0);

  const events: ChurchEvent[] = [
    {
      id: 1,
      title: "Launch Sunday · 08:30",
      description: "The first gathering. Coffee, worship, and a word for a church just being born.",
      location: CHURCH_ADDRESS,
      startsAt: launchA,
      endsAt: plusMinutes(launchA, 90),
      visibility: "public",
      kind: "sunday",
      capacity: 400,
      ticketCents: 0,
      imageKey: "sanctuary",
      going: 0,
      mine: false,
    },
    {
      id: 2,
      title: "Launch Sunday · 10:30",
      description: "The later launch gathering — same table, same hope. Kids and teens are especially welcome.",
      location: CHURCH_ADDRESS,
      startsAt: launchB,
      endsAt: plusMinutes(launchB, 90),
      visibility: "public",
      kind: "sunday",
      capacity: 400,
      ticketCents: 0,
      imageKey: "exterior",
      going: 0,
      mine: false,
    },
    {
      id: 3,
      title: "Life together",
      description: "Homes, not a programme. A midweek table for people learning to belong.",
      location: "Homes across the Constantia valley",
      startsAt: homes,
      endsAt: plusMinutes(homes, 120),
      visibility: "public",
      kind: "midweek",
      capacity: 40,
      ticketCents: 0,
      imageKey: "study",
      going: 0,
      mine: false,
    },
    {
      id: 4,
      title: "Sunday gathering · 09:30",
      description: "Every Sunday after launch. One gathering, one family.",
      location: CHURCH_ADDRESS,
      startsAt: sun,
      endsAt: plusMinutes(sun, 90),
      visibility: "public",
      kind: "sunday",
      capacity: 400,
      ticketCents: 0,
      imageKey: "arch",
      going: 0,
      mine: false,
    },
  ];

  const sermon: Sermon = {
    id: 1,
    title: "All things new",
    speaker: "Terran Williams",
    series: "All Things New",
    scripture: "Revelation 21:5",
    preachedAt: "2026-08-23",
    durationSeconds: 1860,
    description: "A launch-team word on the God who still makes all things new — including Cape Town, including you.",
    imageKey: "arch",
    transcript: "",
  };

  return { events, sermon };
}
