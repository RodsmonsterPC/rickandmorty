const baseURL = "https://rickandmortyapi.com/api/character/";

const getCharacters = async () => {
  try {
    const response = await fetch(baseURL);
    const CharactersData = await response.json();
    return CharactersData;
  } catch (error) {
    Messageerror("Hubo un Errro");
  }
};

const getCharacterId = async (id) => {
  try {
    const response = await fetch(baseURL + id);
    const CharacterFound = await response.json();
    return CharacterFound;
  } catch (error) {
    Messageerror("Hubo un error");
  }
};

const Messageerror = (message) => {
  console.log(message);
};

export { getCharacters, getCharacterId };
