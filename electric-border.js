(function(){
  var EB_COUNTER = 0;
  function ensureSVG(host, opts){
    var svg = host.querySelector(':scope > .eb-svg');
    if(!svg){
      var fid = 'eb-filter-' + (++EB_COUNTER);
      svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
      svg.classList.add('eb-svg');
      svg.setAttribute('aria-hidden','true');
      svg.setAttribute('focusable','false');
      svg.dataset.ebFilterId = fid;
      svg.innerHTML = '<defs><filter id="'+fid+'"><feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />\
<feOffset in="noise1" dx="0" dy="0" result="offsetNoise1"><animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" /></feOffset>\
<feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />\
<feOffset in="noise2" dx="0" dy="0" result="offsetNoise2"><animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" /></feOffset>\
<feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise3" seed="2" />\
<feOffset in="noise3" dx="0" dy="0" result="offsetNoise3"><animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" /></feOffset>\
<feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise4" seed="2" />\
<feOffset in="noise4" dx="0" dy="0" result="offsetNoise4"><animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" /></feOffset>\
<feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />\
<feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />\
<feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />\
<feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="30" xChannelSelector="R" yChannelSelector="B" /></filter></defs>';
      host.appendChild(svg);
    }
    return svg;
  }
  function applyBorder(el, opts){
    opts = opts || {};
    if(!el.classList.contains('electric-border')) el.classList.add('electric-border');
    if(opts.color) el.style.setProperty('--electric-border-color', opts.color);
    if(opts.thickness) el.style.setProperty('--eb-border-width', opts.thickness + 'px');

  var svg = ensureSVG(el, opts);

    var layers = el.querySelector(':scope > .eb-layers');
    if(!layers){
      layers = document.createElement('div');
      layers.className = 'eb-layers';
      layers.innerHTML = '<div class="eb-stroke"></div><div class="eb-glow-1"></div><div class="eb-glow-2"></div><div class="eb-background-glow"></div>';
      el.appendChild(layers);
    }

    var content = el.querySelector(':scope > .eb-content');
    if(!content){
      content = document.createElement('div');
      content.className = 'eb-content';
      while(el.firstChild && !el.firstChild.classList?.contains('eb-layers') && !el.firstChild.classList?.contains('eb-svg')){
        content.appendChild(el.firstChild);
      }
      el.insertBefore(content, layers);
    }

    // Apply the SVG filter to the stroke layer so displacement animation is visible
    var strokeEl = el.querySelector(':scope > .eb-layers > .eb-stroke');
    if(strokeEl){
      var fid = (svg && (svg.dataset ? svg.dataset.ebFilterId : svg.getAttribute('data-eb-filter-id'))) || 'eb-filter-1';
      strokeEl.style.filter = 'url(#'+fid+')';
    }

    // Speed/chaos handled via updating animate durations and feDisplacement scale each resize
    function update(){
      var svg = el.querySelector(':scope > .eb-svg');
      var dyAnims = svg.querySelectorAll('feOffset > animate[attributeName="dy"]');
      var dxAnims = svg.querySelectorAll('feOffset > animate[attributeName="dx"]');
      var baseDur = 6; var speed = (opts.speed==null?1:opts.speed); var dur = Math.max(0.001, baseDur / speed);
      dyAnims.forEach(a=>a.setAttribute('dur', dur+'s'));
      dxAnims.forEach(a=>a.setAttribute('dur', dur+'s'));
      var disp = svg.querySelector('feDisplacementMap');
      if(disp){ var chaos = (opts.chaos==null?1:opts.chaos); disp.setAttribute('scale', String(30 * chaos)); }
    }
    update();

    var ro = new ResizeObserver(update); ro.observe(el);
  }

  window.ElectricBorder = { apply: applyBorder };
})();
