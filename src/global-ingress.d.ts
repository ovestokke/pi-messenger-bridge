/**
 * Type declaration for the pi-messenger-bridge ingress hook.
 *
 * Other extensions can register a function on globalThis to receive
 * structured ExternalMessage metadata before the bridge formats it
 * into a tagged prefix string.
 *
 * This is intentionally a loose coupling — the bridge does not import
 * or depend on any extension that registers this hook.
 */
declare global {
  // eslint-disable-next-line no-var
  var __piHubIngress: ((message: import("./types.js").ExternalMessage) => void) | undefined;
}

export {};