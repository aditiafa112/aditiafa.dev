/** First CSV field on a line (supports quoted fields with commas). */
function parseCsvFirstField(line: string): string {
  const t = line.trim();
  if (t.length === 0) return "";

  if (t.startsWith('"')) {
    let i = 1;
    let out = "";
    while (i < t.length) {
      const c = t[i];
      if (c === '"') {
        if (t[i + 1] === '"') {
          out += '"';
          i += 2;
          continue;
        }
        break;
      }
      out += c;
      i++;
    }
    return out;
  }

  const comma = t.indexOf(",");
  if (comma === -1) return t;
  return t.slice(0, comma);
}

function isHeaderRow(firstCell: string): boolean {
  const n = firstCell.trim().toLowerCase();
  return n === "name" || n === "nama" || n === "guest" || n === "tamu";
}

/**
 * Extracts one name per row from CSV text (first column). Skips empty lines
 * and a typical header row (name, nama, …).
 */
export function parseNamesFromCsv(text: string): string[] {
  const lines = text.split(/\r?\n/);
  const names: string[] = [];
  let isFirstNonEmpty = true;

  for (const line of lines) {
    const cell = parseCsvFirstField(line);
    const trimmed = cell.trim();
    if (!trimmed) continue;

    if (isFirstNonEmpty && isHeaderRow(trimmed)) {
      isFirstNonEmpty = false;
      continue;
    }
    isFirstNonEmpty = false;
    names.push(trimmed);
  }

  return names;
}
