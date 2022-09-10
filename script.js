// These imports are actually used in the real project
import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
