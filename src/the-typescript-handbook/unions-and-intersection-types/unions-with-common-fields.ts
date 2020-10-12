interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();

/*
 * If we have a value that is a union type, we can only access members that are common to all
 * types in the union.
 * TSError: Property 'swim' does not exist on type 'Bird | Fish'.
 */
// pet.swim();
