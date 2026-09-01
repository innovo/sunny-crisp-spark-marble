import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { publicHappenings } from "@/lib/church/public-content";
import {
  CHURCH_ADDRESS,
  CHURCH_CITY,
  CHURCH_EMAIL,
  CHURCH_MAP,
  CHURCH_NAME,
  CHURCH_TAGLINE,
  CHURCH_WEBSITE,
  CHURCH_WHATSAPP,
  CORE_VALUES,
  LAUNCH_TIMES,
  SUNDAY_TIME,
  imageSrc,
} from "@/lib/church/types";
import { Button } from "@/components/ui/button";
import { NovaMark } from "@/components/nova-mark";
import { formatWhen } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Landing });

function Landing() {
  const { user, isPending } = useCurrentUserState();
  const { events, sermon } = publicHappenings();

  if (!isPending && user) return <Navigate to="/home" />;

  return (
    <main className="bg-bg text-fg">
      <header className="flex items-center justify-between px-5 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-fg">
            <NovaMark />
          </span>
          <span className="font-display text-xl leading-none">Nova</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/login">Join us</Link>
          </Button>
        </div>
      </header>

      <section className="relative mx-4 overflow-hidden rounded-2xl md:mx-10">
        <img
          src="/images/exterior.jpg"
          alt="Nova Church at 5 Eskol Avenue, Constantia"
          className="h-[28rem] w-full object-cover sm:h-[36rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-fg/80 via-fg/30 to-fg/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-primary-fg sm:p-10">
          <p className="text-xs tracking-[0.22em] uppercase opacity-80">
            Launch Sunday · 6 September 2026
          </p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.05] font-medium sm:text-6xl">
            Fancy a fresh start?
          </h1>
          <p className="mt-3 max-w-lg text-sm text-primary-fg/85 sm:text-base">{CHURCH_TAGLINE}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild size="lg" variant="onDark">
              <Link to="/login">
                Enter church <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghostDark">
              <a href="#gatherings">Launch Sunday</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-5 py-12 md:grid-cols-3 md:px-10">
        <Fact
          kicker="Launch · 6 September"
          title={LAUNCH_TIMES}
          body={`Thereafter every Sunday at ${SUNDAY_TIME}. Coffee, worship, the Word.`}
        />
        <Fact
          kicker="Find us"
          title="5 Eskol Avenue"
          body={`${CHURCH_ADDRESS}. Off Strawberry Lane in the Constantia valley.`}
        />
        <Fact
          kicker="Kids"
          title="Especially welcome"
          body="Little Lights adjoining the hall. Nova Kids upstairs to Grade 7. Teens with us."
        />
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">New here? Us too.</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          A church family just getting started.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {CHURCH_NAME} is a growing community of ordinary people who share this conviction: God is still
          making all things new. Even you? Yes, absolutely. Whether you live close by or beyond the
          boerewors curtain — you are welcome to join us as we join the One who renews all things.
        </p>
        <p className="mt-3 font-display text-2xl italic text-primary">All things new.</p>
      </section>

      <section id="gatherings" className="mx-auto max-w-5xl px-5 pb-16 md:px-10">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">Open to the city</p>
        <h2 className="mt-2 font-display text-3xl font-medium">Coming up</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {events.map((ev) => (
            <article key={ev.id} className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-card)]">
              <img src={imageSrc(ev.imageKey)} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-display text-xl font-medium">{ev.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <Clock className="size-4" /> {formatWhen(ev.startsAt)}
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                  <MapPin className="size-4" /> {ev.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:px-10">
        <p className="text-[11px] font-medium tracking-[0.16em] text-muted uppercase">The foundations</p>
        <h2 className="mt-2 font-display text-3xl font-medium">How we hope to live</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {CORE_VALUES.map((v) => (
            <div key={v.title} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-display text-xl font-medium">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-4 mb-16 overflow-hidden rounded-2xl bg-primary text-primary-fg md:mx-10">
        <div className="grid md:grid-cols-2">
          <img src={imageSrc(sermon.imageKey)} alt="" className="h-56 w-full object-cover md:h-full" />
          <div className="p-8">
            <p className="text-[11px] tracking-[0.16em] uppercase opacity-70">Meet our pastors</p>
            <h2 className="mt-2 font-display text-3xl font-medium">Terran & Julie Williams</h2>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              Married over twenty years, parents of five, and church planters who have spent most of
              their adult lives in ministry. Nova is the new thing God is calling them to pioneer and
              co-lead — alongside A2, a global family of Acts 2 churches.
            </p>
            <p className="mt-3 text-sm italic opacity-80">
              {sermon.speaker} · {sermon.title} · {sermon.scripture}
            </p>
            <Button asChild variant="secondary" className="mt-6">
              <Link to="/login">Listen inside Nova</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 grid max-w-5xl gap-4 px-5 md:grid-cols-3 md:px-10">
        <a
          href={CHURCH_MAP}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]"
        >
          <MapPin className="size-4 text-primary" />
          <h3 className="mt-3 font-display text-xl font-medium">Find the land</h3>
          <p className="mt-1 text-sm text-muted">{CHURCH_ADDRESS}</p>
        </a>
        <a
          href={CHURCH_WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]"
        >
          <MessageCircle className="size-4 text-primary" />
          <h3 className="mt-3 font-display text-xl font-medium">Follow along</h3>
          <p className="mt-1 text-sm text-muted">Join the WhatsApp list for news about Nova.</p>
        </a>
        <a href={`mailto:${CHURCH_EMAIL}`} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]">
          <Mail className="size-4 text-primary" />
          <h3 className="mt-3 font-display text-xl font-medium">Say hello</h3>
          <p className="mt-1 text-sm text-muted">{CHURCH_EMAIL}</p>
        </a>
      </section>

      <footer className="border-t border-border px-5 py-10 text-sm text-muted md:px-10">
        <p className="font-display text-lg text-fg">{CHURCH_NAME}</p>
        <p className="mt-1">
          {CHURCH_ADDRESS} · {CHURCH_CITY}
        </p>
        <p className="mt-3">
          Sundays at {SUNDAY_TIME}
          {" · "}
          Launch Sunday 6 September: {LAUNCH_TIMES}
        </p>
        <p className="mt-3">
          <a href={CHURCH_WEBSITE} className="underline decoration-border underline-offset-4 hover:text-fg">
            novachurch.co.za
          </a>
          {" · "}
          <a href={`mailto:${CHURCH_EMAIL}`} className="hover:text-fg">
            {CHURCH_EMAIL}
          </a>
        </p>
        <p className="mt-4 italic">All things new.</p>
      </footer>
    </main>
  );
}

function Fact({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-card)]">
      <p className="text-[11px] tracking-[0.16em] text-muted uppercase">{kicker}</p>
      <h3 className="mt-2 font-display text-2xl font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted">{body}</p>
    </div>
  );
}
