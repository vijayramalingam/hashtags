function findHashtags(content) {
  var s = content.match(/#\w+/g);
  return s;
}

module.exports = findHashtags;


