export default {
  actions: {
    saveCourse(ctx, course) {
      ctx.commit('SAVE_COURSE', course);
    }
  },
  mutations: {
    SAVE_COURSE(state, course) {
      state.course = course
    }
  },
  state: {
    courses: [
      {
        id: 11,
        courseName: "",
        shortDescription: "",
        skills: [{name: "Test"}, {name: "Test"}],
        roadMap: [
          {
            number: 0,
            name: "First",
            theoreticalSkills: "",
            practicalSkills: "",
            tasks: [],
          },
          {
            number: 1,
            name: "Second",
            theoreticalSkills: "",
            practicalSkills: "",
            tasks: [],
          }
        ]
      }
    ]
  },
  getters: {
    // getTodoById: (state) => (id) => {
    //   return state.todos.find(todo => todo.id === id)
    // },
    getCourseById: (state) => (id) => {
      return state.courses.find(course => course.id === id)
    },
    getCourse(state) {
      return state.course;
    }
  },
}
