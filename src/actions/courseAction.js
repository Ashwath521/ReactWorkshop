export function createCourse(course) {
  return { type: "CREATE_COURSE", course: course };
}

// CREAT_COURSE- it is the name of the action will be triggered when the user is clicking
// course is a data which is captured in the textbox
