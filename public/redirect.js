(function() {
    var redirectMap = {
      '/pae-docs': '/pae-docs/fr/',
      '/pae-docs/': '/pae-docs/fr/',
      '/pae-docs/guides': '/pae-docs/fr/',
      '/pae-docs/fr/guides': '/pae-docs/fr/',
      '/pae-docs/en/guides': '/pae-docs/en/'
    };
    
    var path = window.location.pathname;
    
    // Function to check if the current path is already a destination
    function isDestinationPath(path) {
      return Object.values(redirectMap).some(dest => 
        path === dest || path === dest + '/' || path + '/' === dest
      );
    }

    // Don't redirect if we're already at a destination path
    if (isDestinationPath(path)) {
      return;
    }

    // Check for exact matches first (with or without trailing slash)
    var redirectPath = redirectMap[path] || redirectMap[path + '/'] || redirectMap[path.slice(0, -1)];
    if (redirectPath) {
      window.location.href = redirectPath;
      return;
    }
    
    // If no exact match, check for partial matches
    for (var key in redirectMap) {
      if (path.startsWith(key) && path !== key && path !== key + '/') {
        window.location.href = redirectMap[key];
        return;
      }
    }
})();