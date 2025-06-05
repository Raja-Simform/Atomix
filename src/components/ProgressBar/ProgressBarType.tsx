export interface ProgressBarProps {
  domSelector: string;
  height?: number;
  color?: string;
  top?: number;
  left?: number;
  onBottom?: () => void;
}
