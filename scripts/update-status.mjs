// Reescreve a tabela entre <!-- STATUS:START --> e <!-- STATUS:END --> no README.
// Usa só repositórios públicos, para não expor nomes de projetos privados.
import { readFile, writeFile } from "node:fs/promises";

const USER = "PedrooMota";
const LIMIT = 6;
const DAY = 86_400_000;

const res = await fetch(
  `https://api.github.com/users/${USER}/repos?type=owner&sort=pushed&per_page=100`,
  { headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github+json" } }
);
if (!res.ok) throw new Error(`GitHub API ${res.status}: ${await res.text()}`);

const repos = (await res.json())
  .filter((r) => !r.fork && !r.archived && r.name !== USER)
  .slice(0, LIMIT);

const age = (d) => {
  const days = Math.floor((Date.now() - new Date(d)) / DAY);
  if (days < 1) return "<1d";
  if (days < 60) return `${days}d`;
  if (days < 730) return `${Math.floor(days / 30)}mo`;
  return `${Math.floor(days / 365)}y`;
};

const phase = (d) => {
  const days = (Date.now() - new Date(d)) / DAY;
  if (days < 30) return "🟢 Running";
  if (days < 180) return "🟡 Idle";
  return "⚪ Completed";
};

const rows = repos.map(
  (r) => `| [${r.name}](${r.html_url}) | ${phase(r.pushed_at)} | ${r.language ?? "—"} | ⭐ ${r.stargazers_count} | ${age(r.pushed_at)} |`
);

const table = [
  "| NAME | STATUS | LANG | STARS | AGE |",
  "|---|---|---|---|---|",
  ...rows,
  "",
  `<sub>Atualizado em ${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC pelo GitHub Actions</sub>`,
].join("\n");

const readme = await readFile("README.md", "utf8");
const next = readme.replace(
  /<!-- STATUS:START -->[\s\S]*<!-- STATUS:END -->/,
  `<!-- STATUS:START -->\n${table}\n<!-- STATUS:END -->`
);
await writeFile("README.md", next);
console.log(next === readme ? "Sem mudanças" : "README atualizado");
