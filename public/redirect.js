(function() {
    var redirectMap = {
      '/pae-docs': '/pae-docs/fr/',
      '/pae-docs/': '/pae-docs/fr/',
      '/pae-docs/guides': '/pae-docs/fr/',
      '/pae-docs/guides/': '/pae-docs/fr/',
      '/pae-docs/fr/guides': '/pae-docs/fr/',
      '/pae-docs/fr/guides/': '/pae-docs/fr/',
      '/pae-docs/en/guides': '/pae-docs/en/',
      '/pae-docs/en/guides/': '/pae-docs/en/'
    };
    
    var path = window.location.pathname;
    
    // Check for exact matches only
    if (redirectMap.hasOwnProperty(path)) {
      window.location.href = redirectMap[path];
    }
})();