const SLEEP_TIME = process.env.SLEEP_TIME || 5000;
const CONTAINER = process.env.CONTAINER || "";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`${CONTAINER} containers rule!`);
    await sleep(SLEEP_TIME);
  }
}

main();
