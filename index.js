//    __               __       
//   / /_  ____ ______/ /_      
//   / __ \/ __ `/ ___/ __ \    
//  / / / / /_/ (__  ) / / /  
// /_/ /_/\__,_/____/_/ /_/  v0.0.1


var hashtagExp = /#\w+/g;

function hashtags(content) {
  
  var tags = content.match(hashtagExp);
  return tags;
  
}

module.exports = hashtags;

