/* 
  NOTE: Add your own code and validations as needed.
*/

import { SayHello, SayHelloDOM } from "./models/models";
import { getHelloByLanguage } from "./utils/utils";

export class Sample {

  constructor() { }

  sayHelloConsole(
    params: SayHello,
  ) {
    const word = getHelloByLanguage(params?.language);
    console.log(`${word} ${params?.name}`);
  }

  sayHelloDOM(
    params: SayHelloDOM,
  ) {
    const element = document.querySelector(`#${params?.elementId}`);

    if (element) {

      const word = getHelloByLanguage(params?.language);

      element.innerHTML = `
        <p>${word} ${params?.name}</p>
      `
    }
  }

}

