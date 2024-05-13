async function getRegions() {
  const response = await fetch("https://geo.api.gouv.fr/regions");
  return response.json();
}
(async () => {
  try {
    const regions = await getRegions();
    console.log(`regions`, regions);
  } catch (error) {
    console.log(`Erreur attrapée :`, error);
  }
})()
