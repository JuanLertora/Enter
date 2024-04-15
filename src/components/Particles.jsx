import { useEffect } from 'react';
import { particlesData } from './utils';

const ParticleComponent = () => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    particlesJS('particles-js', particlesData);
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticleComponent;
