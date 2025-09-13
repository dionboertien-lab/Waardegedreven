
const form = document.getElementById('promptForm');
const out = document.getElementById('promptOut');
const copyBtn = document.getElementById('copyBtn');
const buildBtn = document.getElementById('buildBtn');
const suggestBtn = document.getElementById('suggestBtn');
const suggestions = document.getElementById('suggestions');
function buildPrompt(){
  const data = Object.fromEntries(new FormData(form).entries());
  const lines = [];
  if (data.role) lines.push(`Role: ${data.role}`);
  if (data.task) lines.push(`Task: ${data.task}`);
  if (data.context) lines.push(`Context: ${data.context}`);
  if (data.constraints) lines.push(`Constraints: ${data.constraints}`);
  if (data.format) lines.push(`Output format: ${data.format}`);
  if (data.style && data.style !== 'Neutraal') lines.push(`Stijl: ${data.style}`);
  if (data.lang) lines.push(`Taal: ${data.lang}`);
  if (data.examples) lines.push('
Voorbeelden (few-shot):
' + data.examples.trim());
  out.textContent = lines.join('
');
}
buildBtn?.addEventListener('click', buildPrompt);
copyBtn?.addEventListener('click', async ()=>{
  await navigator.clipboard.writeText(out.textContent);
  copyBtn.textContent='Gekopieerd!';
  setTimeout(()=>copyBtn.textContent='Kopieer',1200);
});
suggestBtn?.addEventListener('click',()=>{
  const blocks=[
`Refine
— Verduidelijk het doel + 2–3 acceptatiecriteria.
— Noem expliciet doelgroep en toon.`,
`Expand
— Voeg 3 concrete voorbeelden toe.
— Verwijs naar 2 recente bronnen.`,
`Reduce
— Beperk tot 120 woorden.
— Max 5 bullets met werkwoorden vooraan.`,
`Reframe
— Herschrijf voor andere doelgroep.
— Verander format naar stappenplan/checklist.`
  ];
  suggestions.innerHTML='<pre class="codeblock">'+blocks.join('

')+'</pre>';
  suggestions.hidden=!suggestions.hidden;
});
window.addEventListener('DOMContentLoaded',()=>{
  form.task.value='Maak een korte handleiding (150 woorden) met 3 bullets en een afsluitende tip.';
  form.role.value='Je bent een Nederlandse AI-trainer.';
  form.context.value='Voor marketingprofessionals die ChatGPT gebruiken. Focus op duidelijkheid en toepasbaarheid.';
  form.constraints.value='Max 150 woorden, neutrale toon, citeer indien relevant.';
  form.format.value='Markdown met H2 en bullets.';
});
