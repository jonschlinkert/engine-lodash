exports.readme = [
  '<% _.each(files, function(file) { %>' +
  '<% _.each(file.comments, function(comments) { %>',
  '<% _.each(comments, function(comment) { %>',
  '',
  '<%= comment.title || comment.method || comment.class %>',
  '',
  '<%= comment.lead %>',
  '<%= comment.description %>',
  '<% _.each(comment.params, function(param) { %>',
  '* `<%= param.name %>` **{<%= param.type %>}**<%= param.description ? ": " : "" %><%= param.description %>' +
  '<% }); %>',
  '<% if (comment.returns && comment.returns.length > 0) { %>',
  '<% _.each(comment.returns, function(param) { %>',
  '* `<%= param.name %>` **{<%= param.type %>}**<%= param.description ? ": " : "" %><%= param.description %>' +
  '<% }); %>' +
  '<% } %>' +
  '<% }); %>' +
  '<% }); %>' +
  '<% }); %>'
].join('\n');