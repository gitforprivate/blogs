import { algoliasearch } from "algoliasearch";

const client = algoliasearch("VES9YGQAQD", "538265daebb565e8cf149e5f33977b6c");

// Fetch and index objects in Algolia
const processRecords = async () => {
  const datasetRequest = await fetch(
    "https://dashboard.algolia.com/sample_datasets/movie.json"
  );
  const movies = await datasetRequest.json();
  return await client.saveObjects({
    indexName: "movies_index",
    objects: movies,
  });
};

processRecords()
  .then(() => console.log("Successfully indexed objects!"))
  .catch((err) => console.error(err));
