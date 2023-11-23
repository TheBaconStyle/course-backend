module.exports = {
  routes: [
    {
      method: "GET",
      path: "/tests/course/:course",
      handler: "test.getAviableCourseTests",
    },
  ],
};
