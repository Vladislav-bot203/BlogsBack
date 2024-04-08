const dummy = (blogs) => {
  return 1;
};


const totalLikes = (blogs) => {
  return blogs.reduce((sum, currentBlog) => {
    return sum += currentBlog.likes;
  },0)
}

const favoriteBlog = (blogs) => {
  const copyBlogs = [...blogs];
  copyBlogs.sort((a,b) => {
    return b.likes-a.likes;
  })
  return copyBlogs[0];
}

const mostBlogs = (blogs) => {
  const copyBlogs = [...blogs];
 const mostBlog = copyBlogs
  .reduce(({sums,most}, {likes, author}) => {
    sums[author] = likes = (sums[author] || 0) + likes;
    if (likes > most.likes) most = {author,likes};
    return {sums,most};
  }, {sums: {}, most: {likes:0} })
  .most;
  return mostBlog;
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};
