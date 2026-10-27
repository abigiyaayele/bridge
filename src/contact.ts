export const CONTACT_EMAIL = "info@thebridgeethiopia.com";

// The site has no backend yet, so forms hand off to the visitor's email app
// with the message already filled in.
export function openEmail(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim() !== "")
    .map(([label, value]) => `${label}:\n${value.trim()}`)
    .join("\n\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
