import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (error) {
    throw new Error(error);
  }
})();
