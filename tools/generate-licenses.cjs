/* SPDX-License-Identifier: MIT */
/**
 * Generate summarized third-party license notice based on license-checker output.
 * Input: third_party_licenses/dependencies.json (from `npx license-checker --json`)
 * Output: NOTICE-3RD-PARTY.txt (summary table)
 */

const fs = require('fs');
const path = require('path');

const INPUT = path.join('third_party_licenses', 'dependencies.json');
const OUTPUT = 'NOTICE-3RD-PARTY.txt';

function main() {
  if (!fs.existsSync(INPUT)) {
    console.error(`Missing ${INPUT}. Run "yarn licenses:scan" first.`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(INPUT, 'utf8'));

  // Count license families
  const counts = new Map();
  for (const meta of Object.values(data)) {
    const lic = String(meta.licenses || 'UNKNOWN').trim();
    counts.set(lic, (counts.get(lic) || 0) + 1);
  }

  const lines = [];
  lines.push('Third-Party Licenses (auto-generated summary)');
  lines.push('=============================================');
  lines.push('');
  lines.push('This product bundles third-party open-source components.');
  lines.push('For full texts see `third_party_licenses/` and package metadata.');
  lines.push('');
  lines.push('License Families Summary');
  lines.push('------------------------');

  for (const [lic, cnt] of Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`${lic}: ${cnt}`);
  }

  lines.push('');
  lines.push('Attribution Notes');
  lines.push('-----------------');
  lines.push(
    '- CC-BY-3.0 / CC-BY-4.0: attribution is required (author/name, source/URL, license).',
  );
  lines.push(
    '- (MIT OR CC0-1.0): we elect to use the more permissive option when allowed and document it.',
  );
  lines.push('- LGPL/GPL/AGPL: should not appear in distributed artifacts (policy-guarded in CI).');
  lines.push(
    '- Custom licenses: see `third_party_licenses/<pkg>-LICENSE.txt` and follow its terms.',
  );
  lines.push('');
  lines.push('No trademark rights are granted under this notice.');

  fs.writeFileSync(OUTPUT, lines.join('\n'), 'utf8');
  console.log(`✅ Wrote ${OUTPUT}`);
}

main();
