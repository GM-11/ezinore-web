import { writable } from "svelte/store";

export const calcOutput = writable({ val: 0 });

export function displayOutput(o: object) {
  calcOutput.set({ val: 1, ...o });
}

export function crossOffOutput() {
  calcOutput.set({ val: 0 });
}
