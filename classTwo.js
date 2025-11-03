import classOne from "./classOne";
const classOne = new classOne();

class ClassTwo {
  classTwoFunction() {
    classOne.one();
  }
}
