const person = {
  firstname: "Christopher",
  lastname: "Fiallos",
  get name() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Fullstack Developer | Cloud Engineer",
  avatar: "",
  location: "CST",
  languages: ["English", "Spanish"],
};

export { person };
