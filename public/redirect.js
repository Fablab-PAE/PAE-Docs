(function() {
    var redirectMap = {
      '/pae-docs': '/pae-docs/fr/',
      '/pae-docs/': '/pae-docs/fr/',
      '/pae-docs/guides': '/pae-docs/fr/',
      '/pae-docs/fr/guides': '/pae-docs/fr/',
      '/pae-docs/en/guides': '/pae-docs/en/'
    };
    
    var path = window.location.pathname;
    
    // Check for exact matches first
    if (redirectMap[path]) {
      window.location.href = redirectMap[path];
      return;
    }
    
    // If no exact match, check for partial matches
    for (var key in redirectMap) {
      if (path.startsWith(key)) {
        window.location.href = redirectMap[key];
        return;
      }
    }
})();