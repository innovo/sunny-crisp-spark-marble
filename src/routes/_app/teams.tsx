import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { joinTeam, listAvailability, listTeams, setAvailability } from "@/lib/church/api";
import type { Team } from "@/lib/church/types";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_app/teams")({ component: TeamsPage });

function upcomingSundays(n = 8) {
  const days: string[] = [];
  const d = new Date();
  const add = (7 - d.getDay()) % 7;
  d.setDate(d.getDate() + add);
  for (let i = 0; i < n; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i * 7);
    days.push(x.toISOString().slice(0, 10));
  }
  return days;
}

function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);

  function reload() {
    listTeams().then(setTeams);
  }
  useEffect(reload, []);

  return (
    <div>
      <PageHeader
        kicker="Serve"
        title="Teams"
        description="Say when you can serve. Leads see the calendar; the Sunday roster is built from it."
      />
      <div className="space-y-4">
        {teams.map((t) => (
          <article key={t.id} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-medium">{t.name}</h2>
                <p className="mt-1 text-sm text-muted">{t.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.members.map((m) => (
                    <Badge key={m.peopleId} tone={m.seat === "lead" ? "primary" : "muted"}>
                      {m.name}
                      {m.seat === "lead" ? " · lead" : ""}
                    </Badge>
                  ))}
                </div>
              </div>
              {t.mine ? (
                <Button variant="outline" onClick={() => setOpenId(openId === t.id ? null : t.id)}>
                  {openId === t.id ? "Hide calendar" : "My availability"}
                </Button>
              ) : (
                <Button
                  onClick={async () => {
                    await joinTeam({ data: t.id });
                    reload();
                  }}
                >
                  Join team
                </Button>
              )}
            </div>
            {openId === t.id && t.mine ? <Availability teamId={t.id} /> : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function Availability({ teamId }: { teamId: number }) {
  const days = upcomingSundays();
  const [map, setMap] = useState<Record<string, string>>({});

  useEffect(() => {
    listAvailability({ data: teamId }).then((rows) => {
      const next: Record<string, string> = {};
      for (const r of rows) next[r.day] = r.status;
      setMap(next);
    });
  }, [teamId]);

  async function cycle(day: string) {
    const cur = map[day];
    const next = cur === "available" ? "unavailable" : cur === "unavailable" ? "maybe" : "available";
    setMap({ ...map, [day]: next });
    await setAvailability({ data: { teamId, day, status: next as "available" | "unavailable" | "maybe" } });
  }

  return (
    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {days.map((day) => {
        const status = map[day] || "unset";
        const label = new Date(day + "T12:00:00").toLocaleDateString("en-ZA", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        return (
          <button
            key={day}
            type="button"
            onClick={() => cycle(day)}
            className="rounded-lg border border-border px-3 py-3 text-left text-sm hover:bg-secondary"
          >
            <p className="font-medium">{label}</p>
            <p className="mt-1 capitalize text-muted">{status === "unset" ? "tap to set" : status}</p>
          </button>
        );
      })}
    </div>
  );
}
