export class MyExeption extends Error {

}

export const callMe = (name) => {
  if (name === "thariq") {
    throw new MyExeption("ups my exeption happen");
  } else {
    return "OK";
  }
}