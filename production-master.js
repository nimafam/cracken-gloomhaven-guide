/* Totals remain incomplete until every required component quantity is known. */
function summarize(rows) {
  let pieces = 0, grams = 0, missing = 0;
  for (const row of rows) {
    if (!Number.isInteger(row.quantity) || row.quantity < 0 ||
        !Number.isFinite(row.unitGrams) || row.unitGrams < 0) { missing++; continue; }
    pieces += row.quantity;
    grams += row.quantity * row.unitGrams;
  }
  return {pieces, grams, missing, purchaseGrams: grams * (1 + SAFETY_MARGIN)};
}
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mass = grams => `${grams.toLocaleString('en', {maximumFractionDigits: 1})} g`;
const allRows = productionPacks.flatMap(p => p.components);
const total = summarize(allRows);
const mismatches = productionPacks.filter(p => { const t = summarize(p.components); return !t.missing && t.pieces !== p.expectedPieces; });
const ready = !total.missing && !mismatches.length && total.pieces === EXPECTED_PIECES;
document.querySelector('#margin-label').textContent = `${SAFETY_MARGIN * 100}% safety margin`;
document.querySelector('#bom-status').textContent = ready
  ? `Quantity check passed: ${total.pieces} production pieces. Purchase weights include estimates; verify before ordering.`
  : `DRAFT · Not ready for purchasing. ${total.missing} component rows need exact quantities or weights. Pack totals from the customer guide sum to ${productionPacks.reduce((n,p)=>n+p.expectedPieces,0)} pieces; the requested target is ${EXPECTED_PIECES}. Component allocations and measured weights from the prior conversation are pending.${mismatches.length ? ' Pack count mismatch: '+mismatches.map(p=>p.sku).join(', ') : ''}`;
function weightCell(summary, purchase = false) {
  if (summary.missing) return 'Pending BOM';
  return mass(purchase ? summary.purchaseGrams : summary.grams);
}
document.querySelector('#material-totals').innerHTML = ['PLA','Standard resin','Transparent resin'].map(material => {
  const summary = summarize(allRows.filter(r=>r.material===material));
  return `<div class="material-total">${material}<strong>${weightCell(summary,true)}</strong><small>Including ${SAFETY_MARGIN*100}% margin${ready ? '' : ' · draft'}</small></div>`;
}).join('');
const groups = new Map();
allRows.forEach(row=>{const key=`${row.material} / ${row.color}`; if(!groups.has(key)) groups.set(key,[]); groups.get(key).push(row);});
document.querySelector('#purchase-rows').innerHTML = [...groups].sort(([a],[b])=>a.localeCompare(b)).map(([key,rows])=>{
  const s=summarize(rows);
  return `<tr><th scope="row">${escapeHTML(key)}</th><td>${s.missing?'Pending BOM':s.pieces}</td><td>${weightCell(s)}</td><td>${weightCell(s,true)}</td></tr>`;
}).join('');
document.querySelector('#catalog').innerHTML = productionPacks.map(pack=>{
  const summary=summarize(pack.components);
  const labels=pack.components.map((row,i)=>`<a href="#${pack.sku}-${i+1}"><b>${i+1}</b> ${escapeHTML(row.name)}</a>`).join('');
  const rows=pack.components.map((row,i)=>`<tr id="${pack.sku}-${i+1}"><th scope="row">${i+1}. ${escapeHTML(row.name)}</th><td>${row.quantity===null?'Pending':row.quantity}</td><td>${escapeHTML(row.material)}<small>${escapeHTML(row.color)}</small></td><td>${mass(row.unitGrams)}<small class="estimated">${row.weightStatus==='measured'?'Measured':'Conservative estimate'}</small><small>${escapeHTML(row.weightSource)}</small></td></tr>`).join('');
  const search=escapeHTML([pack.sku,pack.title,...pack.components.flatMap(r=>[r.name,r.material,r.color])].join(' ').toLowerCase());
  return `<article class="card" data-search="${search}" aria-labelledby="${pack.sku}-title"><div class="content head"><div><div class="sku">${pack.sku}</div><h2 id="${pack.sku}-title">${escapeHTML(pack.title)}</h2></div><span class="stat"><b>${pack.expectedPieces}</b> pieces</span></div><div class="card-layout"><figure class="visual"><img src="assets/gu-concepts/${pack.sku.toLowerCase()}-concept.webp" alt="Existing concept cover for ${escapeHTML(pack.title)}" loading="eager" decoding="async"><span class="ai-tag">Existing concept · not a part diagram</span><figcaption class="cover-labels">${labels}</figcaption></figure><div class="content"><p class="subtitle">Component schedule · one color per part</p><div class="table-scroll"><table><caption>Weights per piece, before safety margin</caption><thead><tr><th scope="col">Component</th><th scope="col">Qty</th><th scope="col">Suggested material / color</th><th scope="col">Unit weight</th></tr></thead><tbody>${rows}</tbody></table></div><p class="note">Pack net: ${weightCell(summary)} · with margin: ${weightCell(summary,true)}. Labels identify component families in this cover; exact geometry and counts must follow the final BOM.</p></div></div></article>`;
}).join('');
function filterPacks() {
  const query=document.querySelector('#search').value.trim().toLowerCase();
  let count=0;
  document.querySelectorAll('.card').forEach(card=>{card.hidden=!card.dataset.search.includes(query);if(!card.hidden) count++;});
  document.querySelector('#search-status').textContent=count ? `${count} of 13 packs shown · printing includes all packs and the complete purchase worksheet.` : 'No matching packs. Clear search to show all 13.';
}
function clearSearch(){document.querySelector('#search').value='';filterPacks();}
document.querySelector('#search').addEventListener('input',filterPacks);
filterPacks();
