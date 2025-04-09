import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestión Simple de Turnos',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nuestro sistema está diseñado para que la carga y administración de turnos
        sea rápida e intuitiva. Ideal para profesionales que buscan eficiencia sin complicaciones.
      </>
    ),
  },
  {
    title: 'Panel de Administración',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        El perfil de administrador permite controlar usuarios, servicios, horarios y estadísticas
        en tiempo real, todo desde una interfaz clara y moderna.
      </>
    ),
  },
  {
    title: 'Pensado para Profesionales',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cada profesional puede acceder a su agenda personalizada, gestionar sus propios horarios
        y mantenerse sincronizado con sus pacientes o clientes al instante.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
