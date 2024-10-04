// redirect.js
(function() {
    var redirectMap = {
      '/pae-docs': '/pae-docs/fr/',
      '/pae-docs/': '/pae-docs/fr/',
      '/pae-docs/guides': '/pae-docs/fr/',
      '/pae-docs/fr/guides': '/pae-docs/fr/',
      '/pae-docs/en/guides': '/pae-docs/en/'
    };
    
    var path = window.location.pathname;
    var redirect = redirectMap[path];
    if (redirect) {
      window.location.href = redirect;
    }
  })();