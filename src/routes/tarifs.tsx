import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone, MessageSquare, MessageCircle, ClipboardList, Sparkles, LifeBuoy, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs et formules — Accompagnement sommeil de l'enfant" },
      { name: "description", content: "Découvrez les formules d'accompagnement au sommeil de l'enfant : séance unique à 80€, suivi personnalisé, par téléphone ou WhatsApp." },
      { property: "og:title", content: "Tarifs et formules — Accompagnement sommeil" },
      { property: "og:description", content: "Séances d'accompagnement au sommeil de l'enfant à partir de 80€, à distance par téléphone ou WhatsApp." },
    ],
  }),
  component: TarifsPage,
});

function TarifsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Header />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
      <Foot />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Douce Nuit
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-primary">Accueil</Link>
          <Link to="/tarifs" className="text-primary">Tarifs</Link>
        </div>
        <Link to="/" hash="contact" className="btn-sage text-sm">
          Prendre rendez-vous
        </Link>
      </div>
    </nav>
  );
}

function Header() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Retour à l&apos;accueil
      </Link>
      <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Tarifs &amp; formules</span>
      <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
        Un accompagnement <span className="text-primary">clair</span> et transparent
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        Toutes les séances se déroulent à distance, par téléphone ou via WhatsApp Business. Vous choisissez le format qui correspond à votre situation et à votre rythme.
      </p>
    </section>
  );
}

function Process() {
  const steps = [
    { icon: MessageCircle, title: "1. Premier contact", desc: "Échange gratuit de 15 minutes par téléphone ou WhatsApp pour cerner vos besoins et vérifier que mon accompagnement vous correspond." },
    { icon: ClipboardList, title: "2. Questionnaire préalable", desc: "Vous remplissez un questionnaire détaillé sur les habitudes, le rythme et l'environnement de sommeil de votre enfant." },
    { icon: Sparkles, title: "3. Séance d'accompagnement", desc: "Un rendez-vous d'environ 1h pour analyser ensemble la situation et construire un plan d'action sur mesure." },
    { icon: LifeBuoy, title: "4. Suivi écrit", desc: "Un compte-rendu personnalisé et un suivi par messages WhatsApp pendant 7 jours pour ajuster si besoin." },
  ];
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Déroulé</span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Comment se passe l&apos;accompagnement ?
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const formulas = [
    {
      name: "Premier échange",
      price: "Offert",
      duration: "15 minutes",
      desc: "Pour faire connaissance et déterminer si mon accompagnement répond à votre situation.",
      features: ["Appel téléphonique ou WhatsApp", "Aucun engagement", "Réponse à vos premières questions"],
      cta: "Réserver l'échange",
      highlighted: false,
    },
    {
      name: "Séance d'accompagnement",
      price: "80 €",
      duration: "Environ 1 heure",
      desc: "La formule la plus demandée. Un rendez-vous complet avec un plan d'action personnalisé.",
      features: [
        "Questionnaire préalable détaillé",
        "Séance d'1h par téléphone ou WhatsApp",
        "Plan d'action écrit et personnalisé",
        "Suivi par messages pendant 7 jours",
      ],
      cta: "Choisir cette formule",
      highlighted: true,
    },
    {
      name: "Suivi prolongé",
      price: "Sur devis",
      duration: "À définir ensemble",
      desc: "Pour les situations complexes ou si vous souhaitez un accompagnement sur plusieurs semaines.",
      features: [
        "Séance initiale incluse",
        "Points de suivi réguliers",
        "Ajustements du plan d'action",
        "Disponibilité étendue",
      ],
      cta: "Demander un devis",
      highlighted: false,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Formules</span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Choisissez ce qui vous convient
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Des tarifs simples et transparents, sans frais cachés. Paiement en ligne ou par virement après la séance.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {formulas.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-2xl border p-8 ${
              f.highlighted
                ? "border-primary bg-card shadow-lg ring-2 ring-primary/20"
                : "border-border bg-card"
            }`}
          >
            {f.highlighted && (
              <span className="mb-4 inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                Le plus choisi
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-foreground">{f.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-heading text-4xl font-bold text-foreground">{f.price}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{f.duration}</p>
            <p className="mt-4 text-sm text-muted-foreground">{f.desc}</p>
            <ul className="mt-6 space-y-3">
              {f.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/"
              hash="contact"
              className={`mt-8 ${f.highlighted ? "btn-sage" : "btn-sage-outline"}`}
            >
              {f.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Les séances ont-elles lieu en présentiel ?",
      a: "Non, tout se fait à distance : par téléphone ou via WhatsApp Business (appel, message vocal ou visio). Vous restez confortablement chez vous, à un moment qui vous convient.",
    },
    {
      q: "Comment se déroule le paiement ?",
      a: "Le paiement s'effectue avant la séance par virement bancaire ou lien de paiement sécurisé. Une facture vous est transmise systématiquement.",
    },
    {
      q: "À quel âge l'accompagnement est-il adapté ?",
      a: "J'accompagne les familles avec des enfants de la naissance jusqu'à environ 6 ans. Chaque approche est adaptée à l'âge et au stade de développement.",
    },
    {
      q: "Combien de séances faut-il prévoir ?",
      a: "Une séance suffit pour la majorité des familles. Pour les situations plus complexes, je peux proposer un suivi prolongé après le premier rendez-vous.",
    },
  ];
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Questions fréquentes</span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Vos questions sur les tarifs
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((it, i) => (
            <details key={i} className="group rounded-xl border border-border bg-card p-6">
              <summary className="cursor-pointer font-heading font-semibold text-foreground marker:hidden">
                {it.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const whatsappNumber = "33600000000";
  const whatsappMsg = encodeURIComponent("Bonjour, je souhaite un premier échange concernant le sommeil de mon enfant.");
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
        Prêt(e) à retrouver des nuits sereines ?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Commencez par un échange gratuit de 15 minutes. Sans engagement, simplement pour faire connaissance.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="btn-sage text-base">
          <MessageSquare className="h-5 w-5" />
          Écrire sur WhatsApp
        </a>
        <a href="tel:+33600000000" className="btn-sage-outline text-base">
          <Phone className="h-5 w-5" />
          Appeler directement
        </a>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-heading text-sm font-semibold text-foreground">Douce Nuit</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Douce Nuit — Accompagnement au sommeil de l&apos;enfant.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link to="/tarifs" className="hover:text-foreground">Tarifs</Link>
          <a href="#" className="hover:text-foreground">Mentions légales</a>
        </div>
      </div>
    </footer>
  );
}
