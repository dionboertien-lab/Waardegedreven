
const FEEDS = [
  { name: 'Google AI Blog', url: 'https://ai.googleblog.com/atom.xml', enabled: true },
  { name: 'Hugging Face Blog', url: 'https://huggingface.co/blog/feed.xml', enabled: true },
  { name: 'OpenAI Blog (onzeker RSS)', url: 'https://openai.com/blog/rss', enabled: false }
];
const feedEl = document.getElementById('feed');
const maxInput = document.getElementById('maxItems');
const reloadBtn = document.getElementById('reloadBtn');
async function fetchFeed(url){
  const proxied = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
  const res = await fetch(proxied);
  if (!res.ok) throw new Error('Netwerkfout');
  const data = await res.json();
  const xml = new window.DOMParser().parseFromString(data.contents, 'text/xml');
  const items = [...xml.querySelectorAll('item, entry')].slice(0,20).map(node=>({
    title: node.querySelector('title')?.textContent?.trim()||'Zonder titel',
    link: node.querySelector('link')?.getAttribute('href')||node.querySelector('link')?.textContent||'#',
    date: node.querySelector('pubDate, updated, published')?.textContent||''
  }));
  return items;
}
async function loadFeeds(){
  feedEl.innerHTML='<p>Bezig met laden…</p>';
  const enabled = FEEDS.filter(f=>f.enabled);
  const list=[];
  for (const f of enabled){
    try{
      const items = await fetchFeed(f.url);
      items.forEach(it=>list.push({ ...it, source:f.name }));
    }catch(e){ console.warn('Feed mislukt', f.name, e); }
  }
  list.sort((a,b)=> new Date(b.date)-new Date(a.date));
  const max = parseInt(maxInput.value,10)||20;
  const subset = list.slice(0,max);
  if (!subset.length){ feedEl.innerHTML='<p>Geen items gevonden.</p>'; return; }
  feedEl.innerHTML = subset.map(renderCard).join('');
}
function renderCard(item){
  const date = item.date ? new Date(item.date).toLocaleString('nl-NL',{dateStyle:'medium'}) : '';
  return `<article class="feed-card"><h3><a href="${item.link}" target="_blank" rel="noopener">${escapeHtml(item.title)}</a></h3><p><small>${item.source}${date?' • '+date:''}</small></p></article>`;
}
function escapeHtml(str){ return str.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
reloadBtn?.addEventListener('click', loadFeeds);
maxInput?.addEventListener('change', loadFeeds);
window.addEventListener('DOMContentLoaded', loadFeeds);
