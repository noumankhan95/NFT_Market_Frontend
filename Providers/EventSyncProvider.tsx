// components/EventSyncProvider.tsx
"use client";

import { useListedNFTs } from "@/hooks/listEvent";

export function EventSyncProvider() {
  useListedNFTs(); // this internally mounts the listener and fetches logs
  return null; // no UI, just logic
}
