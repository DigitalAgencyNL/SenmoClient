import { Image } from '@mantine/core';
import styles from './senmo-logo.module.css';
import logo from '../assets/secondhome_logo.svg'
import { JSX } from 'react';

export interface SenmoLogoProps {
  width?: number | string;
  height?: number | string;
  size?: number | string; // Use size for both width and height
  className?: string;
  alt?: string;
  onClick?: () => void;
  loading?: 'eager' | 'lazy';
  unoptimized?: boolean;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  inverted?: boolean;
  style?: React.CSSProperties;
}

/**
 * SenmoLogo component displays the Senmo logo.
 * @param {SenmoLogoProps} props - The properties for the SenmoLogo component.
 * @returns {JSX.Element} The rendered Senmo logo.
 */

export function SenmoLogo({ width, height, inverted, style }: SenmoLogoProps): JSX.Element {
  return (
    <Image
      w='auto'
      h={height}
      style={{
        ...style,
        filter: inverted ? 'invert(1)' : undefined,
      }}
      src={logo}
      alt="Senmo Logo"
      className={styles.logo}
    />
  );
}

export default SenmoLogo;
