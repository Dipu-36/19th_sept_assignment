
function speak(greeting, name) {
    console.log(`${greeting}, ${this.name}!`);
  }
  
  const person1 = {
    name: "Adi"
  };
  
  const person2 = {
    name: "Aliya"
  };
  
  
  person1.greet = speak;
  person1.greet("Hello"); 
  
  speak.call(person2, "Hi"); 
  
  
  const greetings = ["Good morning", "John"];
  speak.apply(person1, greetings); 
  
  const boundGreet = speak.bind(person2, "Nice to meet you");
  boundGreet(); 