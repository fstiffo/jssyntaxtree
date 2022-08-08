// jsSyntaxTree - A syntax tree graph generator
// (c)2019 Andre Eisenbach <andre@ironcreek.net>

'use strict';

const tips = [
  'Click on the syntax tree image to download a copy.',
  'jsSyntaxTree works offline, instantly updates and handles unicode fonts.',
  'You can right-click the image and copy &amp; paste the graph into your document editor.',
  'The graph will update automatically once a matching number of brackets is detected.',
  'Add manual subscripts to nodes using an ¬ character.<br />' +
      'Example: <a href="?[N¬s%20Dogs]">[N¬s Dogs]</a>',
  'You can add spaces to nodes by putting them inside back quotes.<br />' +
      'Example: <a href="?[`Main%20clause`%20[S][V][O]]">[`Main clause` [S][V][O]]</a>',
  'Add arrows to a node by using an -&gt;, &lt- or &lt;&gt; arrow followed by column number.<br />' +
      'Example: <a href="?[A%20[B%20C][D%20E][F%20G%20->#1]]">[A [B C][D E][F G ->#1]]</a>'
];

let tip_idx = Math.floor(Math.random() * tips.length);

export default function rotateTip() {
  document.getElementById('tip').innerHTML =
      '<strong>Tip:</strong> ' + tips[tip_idx++ % tips.length];
}
