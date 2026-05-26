const props = (className) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className,
});

const Caja = ({ className }) => (
  <svg {...props(className)}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const Cafe = ({ className }) => (
  <svg {...props(className)}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const Libro = ({ className }) => (
  <svg {...props(className)}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const Audifonos = ({ className }) => (
  <svg {...props(className)}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const Planta = ({ className }) => (
  <svg {...props(className)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const Taza = ({ className }) => (
  <svg {...props(className)}>
    <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="5" />
    <line x1="10" y1="2" x2="10" y2="5" />
    <line x1="14" y1="2" x2="14" y2="5" />
  </svg>
);

const Camiseta = ({ className }) => (
  <svg {...props(className)}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

const Vela = ({ className }) => (
  <svg {...props(className)}>
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const Botella = ({ className }) => (
  <svg {...props(className)}>
    <path d="M15 2H9" />
    <path d="M15 2v3.13a2 2 0 0 0 .5 1.32L17.5 9.13a2 2 0 0 1 .5 1.32V22H6V10.45a2 2 0 0 1 .5-1.32L8.5 6.45A2 2 0 0 0 9 5.13V2" />
    <path d="M9 22V10.45" />
  </svg>
);

const Paleta = ({ className }) => (
  <svg {...props(className)} strokeWidth={1.5}>
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export const ICONOS = {
  caja:      { label: 'Caja',      Comp: Caja },
  cafe:      { label: 'Café',      Comp: Cafe },
  libro:     { label: 'Libro',     Comp: Libro },
  audifonos: { label: 'Audífonos', Comp: Audifonos },
  planta:    { label: 'Planta',    Comp: Planta },
  taza:      { label: 'Taza',      Comp: Taza },
  camiseta:  { label: 'Ropa',      Comp: Camiseta },
  vela:      { label: 'Vela',      Comp: Vela },
  botella:   { label: 'Botella',   Comp: Botella },
  paleta:    { label: 'Arte',      Comp: Paleta },
};

export function IconoProducto({ id, className = 'h-10 w-10' }) {
  const icono = ICONOS[id] ?? ICONOS.caja;
  const { Comp } = icono;
  return <Comp className={className} />;
}
