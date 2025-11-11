/* SPDX-License-Identifier: MIT */
/**
 * License policy checker
 * Fails CI if any dependency uses a disallowed license.
 */

const fs = require('fs');
const path = require('path');

const disallowedList = (process.argv[2] || '')
  .split(/\s+/)
  .map((s) => s.trim())
  .filter(Boolean);

if (!disallowedList.length) {
  console.log('No disallowed licenses configured — skipping.');
  process.exit(0);
}

const jsonPath = path.join('third_party_licenses', 'dependencies.json');

if (!fs.existsSync(jsonPath)) {
  console.error(`Missing ${jsonPath}. Run license checker first.`);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const offenders = [];

for (const [pkgName, meta] of Object.entries(data)) {
  const lic = String(meta.licenses || '');
  for (const bad of disallowedList) {
    if (lic.includes(bad)) {
      offenders.push({ name: pkgName, license: lic });
      break;
    }
  }
}

if (offenders.length) {
  console.error('❌ Disallowed licenses found:');
  for (const o of offenders) {
    console.error(`- ${o.name}: ${o.license}`);
  }
  process.exit(1);
}

console.log('✅ License policy check passed.');
