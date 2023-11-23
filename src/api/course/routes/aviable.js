module.exports = {
  routes: [
    {
      method: "GET",
      path: "/courses/aviable",
      handler: "course.getAviableCourses",
    },
  ],
};
