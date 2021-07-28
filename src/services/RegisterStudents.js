class RegisterStudents {
  constructor(validatedArgs) {}

  async call() {
    const student = await User.create({ name: "Jane" });
  }
}

module.exports = RegisterStudents;
