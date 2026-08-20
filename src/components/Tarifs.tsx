import { MessageCircle, ClipboardList, Sparkles, LifeBuoy, Check } from "lucide-react";
import { calButtonProps } from "@/lib/cal";

export default function Tarifs() {
  return (
    <section id="tarifs">
      <Pricing />
      <FAQ />
    </section>
  );
}

function Pricing() {
  const formulas = [
    {
      name: "Suivi",
      price: "80 €",
      duration: "Environ 1 heure",
      desc: "Un rendez-vous complet avec un plan d'action personnalisé.",
      features: [
        "Séance d'1h par téléphone ou WhatsApp",
        "Plan d'action personnalisé",
        "Suivi par messages",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Tarifs</span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Séance d'accompagnement
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Paiement en ligne ou par virement avant la séance.
        </p>
      </div>
      <div className="grid gap-8">
        {formulas.map((f, i) => (
          <div
            key={i}
            className="flex flex-col rounded-2xl border p-8 border-primary bg-card shadow-lg ring-2 ring-primary/20"
          >
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
            <button {...calButtonProps} className="mt-8 btn-sage">
              Prendre rendez-vous
            </button>
          </div>
        ))}
      </div>
    </div>
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
      a: "J'accompagne les familles avec des enfants de la naissance jusqu'à environ 2 ans. Chaque approche est adaptée à l'âge et au stade de développement.",
    },
    {
      q: "Combien de séances faut-il prévoir ?",
      a: "Une séance suffit pour la majorité des familles. Pour les situations plus complexes, je peux proposer un suivi prolongé après le premier rendez-vous.",
    },
  ];
  return (
    <div className="bg-secondary/30 py-16 md:py-24">
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
    </div>
  );
}
