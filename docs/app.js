(() => {
  const config = window.SITE_CONFIG || {};
  const toast = document.getElementById('toast');
  let timer;
  function announce(message) {
    toast.textContent = message;
    clearTimeout(timer);
    timer = setTimeout(() => { toast.textContent = ''; }, 3500);
  }

  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copy);
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        announce('Prompt copié. Vous pouvez le coller dans Codex.');
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(target);
        selection.removeAllRanges();
        selection.addRange(range);
        announce('Sélectionnez « Copier » dans votre navigateur pour copier le prompt.');
      }
    });
  });

  document.querySelectorAll('.pole-link').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.open = true;
    });
  });
  function openHashRole() {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (target?.classList.contains('role-group')) target.open = true;
  }
  addEventListener('hashchange', openHashRole);
  openHashRole();

  function publicUrl(value, githubOnly = false) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:' || url.username || url.password) return null;
      if (githubOnly && url.hostname !== 'github.com') return null;
      return url.href;
    } catch { return null; }
  }
  function activate(selector, url, text, rel) {
    document.querySelectorAll(selector).forEach(button => {
      const link = document.createElement('a');
      link.className = button.className;
      link.href = url;
      link.textContent = text;
      link.rel = rel;
      button.replaceWith(link);
    });
  }
  const github = publicUrl(config.githubUrl, true);
  if (github) {
    activate('[data-github]', github, 'Télécharger le ZIP v0.1.0 ↗', 'noopener noreferrer');
    document.getElementById('github-note').textContent = 'Préversion v0.1.0 · ZIP gratuit · Connexions personnelles à activer.';
  }
  const affiliate = publicUrl(config.ranxplorerAffiliateUrl);
  if (affiliate) {
    document.querySelectorAll('[data-ranxplorer]').forEach(link => {
      link.href = affiliate;
      link.rel = 'sponsored noopener noreferrer';
    });
    document.querySelectorAll('[data-ranxplorer-label]').forEach(label => {
      label.textContent = 'Lien affilié / sponsorisé';
    });
    document.getElementById('affiliate-note').textContent = 'Un abonnement souscrit via ces liens peut rémunérer WebSolution24. Vérifiez l’accès API et les crédits adaptés à votre usage.';
    document.getElementById('affiliate-disclosure').textContent = 'Transparence : les boutons Ranxplorer de cette page sont des liens affiliés / sponsorisés. WebSolution24 peut percevoir une commission. Les rôles restent utilisables avec vos exports, sans connexion Ranxplorer.';
  }
})();
