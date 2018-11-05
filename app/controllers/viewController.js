//this module/controller is just to render the posts view with the data saved in response.locals

module.exports = {
  showPosts(req, res) {
    res.render('posts', {
      posts: res.locals.posts
    });
  }
};