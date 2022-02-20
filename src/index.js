import "./styles/index.scss";
import $ from "jquery";
import "bootstrap";

const userStack = {
  language: "JavaScript",
  framework: "Vue",
};

const user = {
  name: "Marcus",
  age: "33",
  ...userStack,
};

$(".block").html("jQuery is working");
$(".block").addClass("primary");

console.log(user);
