export class MyExeption extends Error {

}

export const callMe = (name) => {
  if (name === "thariq") {
    throw new MyExeption("ups my exception happen");
  } else {
    return "OK";
  }
}