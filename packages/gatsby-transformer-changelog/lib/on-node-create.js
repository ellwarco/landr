const crypto = require('crypto');
const changelogParser = require('./parser');
const _ = require('lodash');


module.exports = async function onNodeCreate(
  { node, getNode, loadNodeContent, boundActionCreators },
  pluginOptions
) {
  const { createNode, createParentChildLink } = boundActionCreators;
  // We are only concerned with changelog
  if (node.name !== 'CHANGELOG') {
    return;
  }

  // We only care about markdown content
  if (node.internal.mediaType !== 'text/x-markdown') {
    return;
  }

  const content = await loadNodeContent(node);
  const entries = changelogParser(content, pluginOptions.headerDepth || 2);

  const EntryNodes = entries.map((obj, i) => {
    const objStr = JSON.stringify(obj);
    const contentDigest = crypto.createHash('md5').update(objStr).digest(`hex`);

    return {
      ...obj,
      id: obj.id ? obj.id : `${node.id} [${i}] >>> changelog`,
      children: [],
      parent: node.id,
      internal: {
        contentDigest,
        type: 'Changelog',
        content: objStr
      }
    };
  });

  _.each(EntryNodes, j => {
    createNode(j);
    createParentChildLink({ parent: node, child: j });
  });

  const oldNodes = node.children.filter(n => {
    return _.some(EntryNodes, ['id', n.id]);
  });

  return;
};
