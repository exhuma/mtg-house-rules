module.exports = function manaPlugin(md, options = {}) {
  // Allow passing pathPrefix from Eleventy config
  const pathPrefix = options.pathPrefix || '/';
  md.inline.ruler.after('emphasis', 'mana', function(state, silent) {
    const start = state.pos;
    const src = state.src;

    if (src.substr(start, 6) !== '<mana>') return false;
    const end = src.indexOf('</mana>', start);
    if (end === -1) return false;

    if (!silent) {
      const content = src.substring(start + 6, end);

      // Split into individual mana symbols (e.g., "2BU" => ["2", "B", "U"])
      const matches = content.match(/(\d+|[A-Z])/g);
      if (matches) {
        matches.forEach(symbol => {
          const token = state.push('html_inline', '', 0);
          if (/^\d+$/.test(symbol) || symbol === 'X') {
            // Render numbers and X as styled span
            token.content = `<span class=\"mana-number-symbol\">${symbol}</span>`;
          } else {
            // Render other symbols as images
            token.content = `<img class=\"mana-symbol\" src=\"${pathPrefix}assets/mana/${symbol}.webp\" alt=\"${symbol}\" />`;
          }
        });
      }
    }

    state.pos = end + 7; // Move past </mana>
    return true;
  });
};