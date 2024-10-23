import { interpolate } from "flubber";
import { useTransform } from "framer-motion";

// Helper to get the index of the current path
export const getIndex = (_, index) => index;

// Custom hook that uses Flubber to interpolate between paths
export function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0 })
  });
}
