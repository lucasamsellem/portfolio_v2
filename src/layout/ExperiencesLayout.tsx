import Image from 'next/image';
import Link from 'next/link';
import HardSkill from '../components/server/HardSkill';

const EXPERIENCES = [
  {
    company: 'TheCrossProduct',
    website: 'https://www.thecrossproduct.com/',
    logo: 'tcp-logo.png',
    location: 'Fontainebleau',
    period: '2025/2026',
    contract: 'Alternance',
    role: 'Développeur front-end',
    tasks: [
      'Conception de l’architecture front-end et mise en place de bonnes pratiques de structuration du code (modularité, réutilisabilité, maintenabilité)',
      'Développement d’interfaces graphiques avec React, TypeScript, Tailwind et intégration fidèle des maquettes Figma',
      'Création de composants UI réutilisables et optimisés pour la performance et la maintenabilité',
      'Collaboration avec l’équipe backend pour l’intégration et l’amélioration d’API REST',
      'Gestion du state management et synchronisation des différentes vues applicatives et 3D',
      'Création et manipulation d’annotations géoréférencées dans des environnements 3D (CesiumJS)',
      'Optimisation des rendus 3D et amélioration continue des performances globales du produit',
    ],
    missions: [
      {
        title: 'Interface utilisateur TheCrossProduct',
        about:
          'J’ai eu pour première mission de développer la V2 du SaaS The Cross Product, en prenant en charge l’ensemble du front-end — de l’architecture à l’interface utilisateur — et en contribuant à l’amélioration de l’API existante afin d’en renforcer la structure et la maintenabilité.',
      },
      {
        title: 'Logiciel de visualisation 3D (TCP Studio)',
        about:
          "J’ai également participé à la création d’un logiciel de visualisation de nuages de points 3D (TCP Studio) en utilisant la bibliothèque géospatiale CesiumJS, dans le cadre d’un partenariat avec Bentley Systems. Ce projet m’a permis d’appliquer des notions avancées de géométrie 3D (coordonnées, points, axes x, y, z) pour représenter les données dans l'espace.",
      },
    ],
  },
];

export default function ExperiencesLayout() {
  return (
    <div>
      <h2 className='text-3xl font-bold mb-15 underline underline-offset-5'>
        Expériences professionnelles
      </h2>

      <ul>
        {EXPERIENCES.map(
          ({ company, website, location, period, contract, logo, missions, role, tasks }) => (
            <li key={company} className='space-y-10'>
              <header className='flex items-center justify-between'>
                <div className='flex items-center gap-x-5'>
                  <Link href={website} target='_blank'>
                    <Image
                      src={`/logos/${logo}`}
                      width={250}
                      height={250}
                      alt={`${company} Logo`}
                    />
                  </Link>
                  <span>&bull;</span>
                  <h4 className='font-bold text-2xl'>{role}</h4>
                </div>

                <div className='flex gap-x-5 bg-light-gray text-black border border-gray-200 py-2 px-4 rounded-lg items-center'>
                  <Specs icon='calendar-icon.svg' label={period} />
                  <hr className='w-px h-5 bg-gray-300 rounded-full' />
                  <Specs icon='location-icon.svg' label={location} />
                  <hr className='w-px h-5 bg-gray-300 rounded-full' />
                  <Specs icon='document-icon.svg' label={contract} />
                </div>
              </header>

              <main className='flex flex-col gap-y-5'>
                {missions.map(({ title, about }) => (
                  <div key={title} className='flex flex-col gap-y-3'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='text-lg'>{about}</p>
                  </div>
                ))}
              </main>

              <ul className='list-disc list-inside space-y-1'>
                {tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

function Specs({ icon, label }: { icon: string; label: string }) {
  return (
    <span className='flex items-center gap-x-2'>
      <Image src={`/icons/${icon}`} width={20} height={20} alt={`${label} icon`} />
      {label}
    </span>
  );
}
