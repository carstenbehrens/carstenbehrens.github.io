// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api
const fs = require("fs");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = function(api, options) {
  const searchData = {
    posts: [],
  };

  api.loadSource((store) => {});

  api.onCreateNode((options) => {
    if (options.internal.typeName === "Post") {
      const { title, summary, tags } = options;
      const post = {
        title,
        summary,
        tags,
      };
      searchData.posts.push(post);
    }
  });

  api.afterBuild(() => {
    fs.writeFile(
      "./static/searchData.json",
      JSON.stringify(searchData),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  });
};
