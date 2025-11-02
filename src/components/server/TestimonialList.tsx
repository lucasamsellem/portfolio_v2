import Testimonial from './Testimonial';

const TESTIMONIALS = [
  {
    author: 'Guillaume Beseme',
    avatar: 'guillaume-beseme.jpeg',
    job: 'Apporteur de solutions selleries 2CV',
    date: 'Le 15 novembre 2024, Guillaume a été le/la client(e) de Lucas',
    content:
      'Après le lancement de mon activité d’auto-entrepreneur en sellerie automobile pour 2CV et dérivés (« SELL-DEUCHE-77 »), je recherchais un intervenant compétent pour développer et mettre en ligne un site Internet dédié. Lucas a parfaitement su répondre à mes besoins en terme de visibilité et de mise en avant des contenus que je souhaitais y mettre, et se montre réactif lorsque j’ai besoin de mises à jour et d’améliorations, tant sur la forme que sur le fond. Tout à fait satisfait de ses prestations qui correspondent tout à fait à ma demande !',
    website: 'https://sell-deuche-77.fr/',
    linkedinUrl: 'https://www.linkedin.com/in/guillaume-beseme-56641b153/',
  },
  {
    author: 'Marie Rolland',
    avatar: 'marie-rolland.jpeg',
    job: 'Photographe | Artists manager',
    date: 'Le 26 février 2025, Marie a été le/la client(e) de Lucas',
    content:
      "Lucas a réalisé mon site web de photographie professionnelle. Il a été très attentif à mes besoins et y a répondu avec technique, précision et savoir-faire. Très souple et toujours près à relever de nouveaux défis, il a également été force de proposition et a proposé des solutions pertinentes pour répondre à différents problèmes. Le site est à la fois beau graphiquement, fluide et pratique d'utilisation. Je ne peux que recommander !",
    website: 'https://marie-rolland.com/',
    linkedinUrl: 'https://www.linkedin.com/in/marie-rolland-8b133841/',
  },
  {
    author: 'Christophe Ghedin',
    avatar: 'blank-profile-picture.png',
    job: 'Assistant de production chez Hermes sellier',
    date: 'Le 11 mars 2025, Christophe a été le/la client(e) de Lucas',
    content:
      'Lucas m’a récemment aidé à résoudre des problèmes informatiques, et il a fait preuve d’une grande rapidité d’analyse et d’efficacité. Il a su identifier l’origine des dysfonctionnements et appliquer les bonnes solutions avec clarté et précision. Je recommande !',
    website: null,
    linkedinUrl: 'https://www.linkedin.com/in/christophe-ghedin-647a6931/',
  },
];

export default function TestimonialList() {
  return (
    <ul className='flex flex-col gap-5 items-center'>
      {TESTIMONIALS.map((t) => (
        <Testimonial key={t.author} testimonial={t} />
      ))}
    </ul>
  );
}
