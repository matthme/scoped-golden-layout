import { GoldenLayout } from 'golden-layout';
import { createContext } from '@lit-labs/context';

export const goldenLayoutContext =
  createContext<GoldenLayout>('golden-layout/root');
