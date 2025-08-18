import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';
import { Calendar, CheckSquare, CreditCard, FileText } from 'lucide-react';
import * as THREE from 'three';

// Module tile component
const ModuleTile = ({ 
  position, 
  icon: Icon, 
  label, 
  onClick, 
  isHovered, 
  onHover 
}: {
  position: [number, number, number];
  icon: React.ComponentType<any>;
  label: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.1;
      
      // Lift on hover
      if (isHovered) {
        meshRef.current.position.y += 0.2;
      }
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => onHover(true)}
        onPointerOut={() => onHover(false)}
        castShadow
      >
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial 
          color={isHovered ? "#FFD840" : "#FFFFFF"}
          transparent
          opacity={isHovered ? 0.9 : 0.8}
        />
      </mesh>
      
      {/* Icon overlay */}
      <Html center distanceFactor={10}>
        <div className={`
          flex flex-col items-center justify-center w-12 h-12 
          transition-transform duration-200 
          ${isHovered ? 'scale-110' : 'scale-100'}
          pointer-events-none
        `}>
          <Icon 
            size={24} 
            color={isHovered ? "#2E2E2E" : "#2E2E2E"} 
            strokeWidth={2}
          />
        </div>
      </Html>
    </group>
  );
};

// Smartphone component
const Smartphone = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      // Gentle floating
      meshRef.current.position.y = Math.sin(Date.now() * 0.0008) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[1.2, 2.4, 0.15]} />
      <meshStandardMaterial color="#2E2E2E" />
      
      {/* Screen */}
      <mesh position={[0, 0, 0.08]}>
        <boxGeometry args={[1, 2.2, 0.02]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      
      {/* Screen content */}
      <mesh position={[0, 0, 0.09]}>
        <boxGeometry args={[0.9, 2.1, 0.01]} />
        <meshStandardMaterial color="#FFD840" />
      </mesh>
    </mesh>
  );
};

// Main 3D scene
const Scene3D = ({ onModuleClick }: { onModuleClick: (module: string) => void }) => {
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Auto-rotation when not being controlled
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const modules = [
    { 
      id: 'planning', 
      icon: Calendar, 
      label: 'Planning', 
      position: [-2.5, 1, 0] as [number, number, number] 
    },
    { 
      id: 'todo', 
      icon: CheckSquare, 
      label: 'To-Do', 
      position: [2.5, 1, 0] as [number, number, number] 
    },
    { 
      id: 'finances', 
      icon: CreditCard, 
      label: 'Finances', 
      position: [-2.5, -1, 0] as [number, number, number] 
    },
    { 
      id: 'documents', 
      icon: FileText, 
      label: 'Documents', 
      position: [2.5, -1, 0] as [number, number, number] 
    },
  ];

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0, 0, 5]} intensity={0.3} color="#FFD840" />

      {/* Main group for rotation */}
      <group ref={groupRef}>
        {/* Smartphone in center */}
        <Smartphone />
        
        {/* Module tiles */}
        {modules.map((module) => (
          <ModuleTile
            key={module.id}
            position={module.position}
            icon={module.icon}
            label={module.label}
            onClick={() => onModuleClick(module.id)}
            isHovered={hoveredModule === module.id}
            onHover={(hovered) => setHoveredModule(hovered ? module.id : null)}
          />
        ))}
      </group>

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.5}
        autoRotate={false}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
};

// Fallback component for unsupported devices or reduced motion
const FallbackHero = ({ onModuleClick }: { onModuleClick: (module: string) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-background to-muted/20 rounded-xl p-8">
      <div className="relative">
        {/* Central phone icon */}
        <div className="w-24 h-40 bg-card border-2 border-border rounded-2xl flex items-center justify-center mb-8 shadow-skoolife">
          <div className="w-20 h-32 bg-primary rounded-lg"></div>
        </div>
        
        {/* Floating module icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[
            { icon: Calendar, position: 'top-0 left-0', id: 'planning' },
            { icon: CheckSquare, position: 'top-0 right-0', id: 'todo' },
            { icon: CreditCard, position: 'bottom-0 left-0', id: 'finances' },
            { icon: FileText, position: 'bottom-0 right-0', id: 'documents' },
          ].map(({ icon: Icon, position, id }) => (
            <button
              key={id}
              onClick={() => onModuleClick(id)}
              className={`
                absolute ${position} w-12 h-12 bg-card border border-border 
                rounded-xl flex items-center justify-center shadow-skoolife 
                hover:bg-primary hover:text-primary-foreground transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-ring
              `}
              aria-label={`Module ${id}`}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground text-center mt-4">
        Quatre modules essentiels pour gérer votre vie étudiante
      </p>
    </div>
  );
};

// Main component
export const Skoolife3DHero = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setIsWebGLSupported(!!gl);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const scrollToSection = (sectionId: string) => {
    let targetId = 'modules';
    
    // Map module IDs to sections
    switch (sectionId) {
      case 'planning':
      case 'todo':
      case 'finances':
      case 'documents':
        targetId = 'modules';
        break;
      default:
        targetId = 'modules';
    }
    
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const shouldUseFallback = !isWebGLSupported || prefersReducedMotion;

  return (
    <div className="w-full h-72 md:h-96 lg:h-[420px] mx-auto">
      {shouldUseFallback ? (
        <FallbackHero onModuleClick={scrollToSection} />
      ) : (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 50 }}
          className="cursor-grab active:cursor-grabbing"
          aria-label="Animation 3D des 4 modules Skoolife : Planning, To-Do, Finances, Documents"
          role="img"
        >
          <Suspense fallback={null}>
            <Scene3D onModuleClick={scrollToSection} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};