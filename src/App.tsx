import { Heart, Moon, Sun, MessageCircle, Star, Clock, Baby, Sparkles, Phone, MessageSquare } from "lucide-react";
import Tarifs from "./components/Tarifs";

import heroSleepImg from "./assets/hero-sleep.jpg";
import moonImg from "./assets/moon-decoration.jpg";
import nurseryImg from "./assets/nursery.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Intro />
      <Approach />
      <Situations />
      <Expectations />
      <Philosophy />
      <Tarifs />
      <Contact />
      <Footer />
    </div>
  );
}

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Douce Nuit
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-foreground md:flex">
          <a href="#approche" className="transition-colors hover:text-primary">Approche</a>
          <a href="#situations" className="transition-colors hover:text-primary">Situations</a>
          <a href="#tarifs" className="transition-colors hover:text-primary">Tarifs</a>
          <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
        </div>
        <a href="#contact" className="btn-sage text-sm">
          Prendre rendez-vous
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
      <div className="order-2 md:order-1">
        <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
          Accompagnement au sommeil
        </span>
        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Retrouvez des nuits <span className="text-primary">sereines</span> en famille
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Les nuits hachées, les endormissements difficiles, les réveils multiples… Je vous accompagne avec douceur pour comprendre les besoins de votre enfant et retrouver le sommeil.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-sage">
            <Sparkles className="h-4 w-4" />
            Prendre rendez-vous
          </a>
          <a href="#approche" className="btn-sage-outline">
            Découvrir l'approche
          </a>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img src={heroSleepImg} alt="Maman tenant son bébé endormi doucement" width={1024} height={1024} className="h-auto w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Moon className="mx-auto mb-6 h-10 w-10 text-primary" />
        <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
          Les troubles du sommeil peuvent vite devenir épuisants pour toute la famille
        </h2>
        <p className="mt-4 text-muted-foreground">
          En tant qu&apos;auto-entrepreneur spécialisé(e) dans l&apos;accompagnement du sommeil de l&apos;enfant, je vous aide à comprendre les besoins de votre bébé ou de votre enfant et à mettre en place des solutions adaptées, respectueuses de son rythme et de votre parentalité.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  const steps = [
    { icon: MessageCircle, title: "L'écoute de votre situation", description: "Chaque famille est unique. Nous commençons par un échange approfondi pour comprendre votre quotidien." },
    { icon: Star, title: "L'analyse des habitudes de sommeil", description: "Nous examinons ensemble les rythmes, l'environnement et les besoins spécifiques de votre enfant." },
    { icon: Sun, title: "Des conseils concrets et applicables", description: "Vous repartez avec des outils clairs, adaptés à votre vie et à la personnalité de votre enfant." },
  ];
  return (
    <section id="approche" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Mon approche</span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Une approche douce et personnalisée</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Chaque enfant est unique. C&apos;est pourquoi je propose un accompagnement sur mesure, sans imposer de méthode stricte. Mon objectif est de vous guider vers des solutions durables et bienveillantes, sans laisser pleurer votre enfant.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <step.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Situations() {
  const situations = [
    { icon: Clock, text: "Des difficultés d'endormissement" },
    { icon: Moon, text: "Des réveils fréquents la nuit" },
    { icon: Sun, text: "Des siestes courtes ou irrégulières" },
    { icon: Baby, text: "Un bébé qui ne s'endort qu'au bras ou au sein" },
    { icon: Heart, text: "Une fatigue importante chez les parents" },
  ];
  return (
    <section id="situations" className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl">
          <img src={nurseryImg} alt="Chambre de bébé chaleureuse et apaisante" width={1024} height={512} loading="lazy" className="h-auto w-full object-cover" />
        </div>
        <div>
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Pour quelles situations ?</span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Je peux vous accompagner si vous rencontrez…</h2>
          <ul className="mt-8 space-y-4">
            {situations.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground">{s.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Expectations() {
  const benefits = [
    { icon: Sparkles, title: "Mieux comprendre le sommeil", desc: "Apprenez le fonctionnement du sommeil de votre enfant et ses besoins spécifiques." },
    { icon: Heart, title: "Retrouver des routines apaisées", desc: "Des rituels doux et cohérents pour des soirées et des nuits plus calmes." },
    { icon: Moon, title: "Améliorer la qualité des nuits", desc: "Des nuits plus longues et réparatrices pour toute la famille." },
    { icon: Star, title: "Gagner en confiance", desc: "Avancez sereinement dans vos choix de parents, sans culpabilité." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 text-center">
        <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Résultats</span>
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Ce que vous pouvez attendre</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-base font-semibold text-foreground">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-primary/10 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row">
        <div className="md:w-1/2">
          <img src={moonImg} alt="Illustration douce d'une lune endormie avec des étoiles" width={512} height={512} loading="lazy" className="mx-auto w-full max-w-sm rounded-2xl" />
        </div>
        <div className="md:w-1/2">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Philosophie</span>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Un soutien sans jugement</h2>
          <p className="mt-4 text-muted-foreground">
            Parce que la fatigue peut être intense et que chaque famille fait de son mieux, je vous propose un espace d&apos;échange bienveillant, sans culpabilisation. Ensemble, nous trouvons ce qui fonctionne pour vous.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const whatsappNumber = "33607440175";
  const whatsappMsg = encodeURIComponent("Bonjour, je souhaite un premier échange concernant le sommeil de mon enfant.");
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
      <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-primary">Contact</span>
      <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Prendre rendez-vous</h2>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        L&apos;accompagnement se déroule entièrement à distance, par téléphone ou via WhatsApp. Aucun déplacement nécessaire&nbsp;: vous restez chez vous, dans votre environnement.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="btn-sage text-base">
          <MessageSquare className="h-5 w-5" />
          Écrire sur WhatsApp
        </a>
        <a href="tel:+33607440175" className="btn-sage-outline text-base">
          <Phone className="h-5 w-5" />
          Appeler directement
        </a>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">Réponse sous 24h</p>
      <div className="mt-12 grid gap-6 rounded-2xl border border-border bg-card p-8 text-left sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-foreground">Téléphone</p>
            <p className="text-sm text-muted-foreground">+33 6 07 44 01 75<br />Sur rendez-vous</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-foreground">WhatsApp Business</p>
            <p className="text-sm text-muted-foreground">Échanges écrits, vocaux ou visio</p>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Envie de connaître le déroulé et les formules&nbsp;?{" "}
        <a href="#tarifs" className="font-medium text-primary underline-offset-4 hover:underline">Voir les tarifs</a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <span className="font-heading text-sm font-semibold text-foreground">Douce Nuit</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Douce Nuit — Accompagnement au sommeil de l&apos;enfant. Tous droits réservés.
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Mentions légales</a>
          <a href="#" className="hover:text-foreground">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
