export type BentoVariant = "large" | "small";

export type BentoItem = {
  title: string;
  tags: string[];
  image: string;
};

export type BentoRowLayout = {
  columns: string;                // CSS grid-template-columns
  variants: BentoVariant[];       // Variant per column
};