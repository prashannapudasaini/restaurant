const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.connect({ browserURL: 'http://localhost:9222' });
    const pages = await browser.pages();
    const page = pages.find(p => p.url().includes('localhost:5173'));
    
    if (!page) {
      console.log("Could not find localhost:5173 page.");
      process.exit(1);
    }
    
    const result = await page.evaluate(() => {
      const wrappers = document.querySelectorAll('.sticky-image-wrapper');
      if (wrappers.length < 2) return "Not enough wrappers found";
      
      const states = Array.from(wrappers).map((w, i) => ({
        index: i,
        zIndex: window.getComputedStyle(w).zIndex,
        clipPath: window.getComputedStyle(w).clipPath,
        webkitClipPath: window.getComputedStyle(w).webkitClipPath
      }));
      
      return JSON.stringify(states, null, 2);
    });
    
    console.log("DOM States:", result);
    process.exit(0);
  } catch (err) {
    console.log("Error:", err.message);
  }
})();
