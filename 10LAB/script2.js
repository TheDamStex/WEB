let userRole = "Адміністратор";

switch (userRole) {
  case "Адміністратор":
    console.log("У вас є права адміністратора");
    break;
  case "Користувач":
    console.log("У вас є основні права");
    break;
  case "Модератор":
    console.log("У вас є права модератора");
    break;
  default:
    console.log("Роль невідома");
}
