const startTime = performance.now();

const fs = require("fs");
const path = require("path");

// Tạo thư mục 'output' nếu nó không tồn tại
const outputDir = path.join(__dirname, "metadata");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let i = 0;
let e = 9999;
const arrNum = [];
const arrProducts = [];
let count = 0;

let commonQty = Math.floor(e * 0.4);
const rareQty = Math.floor(e * 0.25);
const epicQty = Math.floor(e * 0.2);
const legendQty = Math.floor(e * 0.15);

const commonCheckpoint = commonQty;
const rareCheckpoint = commonCheckpoint + rareQty;
const epicCheckpoint = rareCheckpoint + epicQty;
const legendCheckpoint = epicCheckpoint + legendQty;

const total = commonQty + rareQty + epicQty + legendQty;

function randomNumber(max) {
  const result = Math.floor(Math.random() * (max + 1));
  return result;
}

const common = [
  {
    name: "Groot Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/groot-ape.png",
    rarity: "Common",
    hat: "Lava Snapback",
    earrings: "Huggie",
    clothes: "Rattan Necklace",
    background: "Morning Blue",
  },
  {
    name: "Frozen Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/frozen-ape.png",
    rarity: "Common",
    hat: "Ice Ushanka",
    earrings: "Cluster",
    clothes: "Brocade",
    background: "Iguana Green",
  },
  {
    name: "Bullseye Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/bullseye-ape.png",
    rarity: "Common",
    hat: "Monstermotor",
    earrings: "Stud",
    clothes: "Ton Cape",
    background: "Eucalyptus",
  },
];
const rare = [
  {
    name: "Mushroom Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/mushroom-ape.png",

    rarity: "Rare",
    hat: "Inferno Snapback",
    earrings: "Mushroom",
    clothes: "Nude",
    background: "Grullo",
  },
  {
    name: "Sleepy Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/sleepy-ape.png",

    rarity: "Rare",
    hat: "Freaky Cap",
    earrings: "Plug",
    clothes: "Eerie Knit",
    background: "Maize",
  },
];
const epic = [
  {
    name: "Titanic Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/titanic-ape.png",
    rarity: "Epic",
    hat: "Sailor Cap",
    earrings: "Hoop",
    clothes: "Sailor shirt",
    background: "Blue Jeans",
  },
  {
    name: "Pirate Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/pirate-ape.png",
    rarity: "Epic",
    hat: "Nightmare Chains",
    earrings: "Ton Drop",
    clothes: "Kraken Jacket",
    background: "Blue Jeans",
  },
];
const legendary = [
  {
    name: "Addict Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/addict-ape.png",
    rarity: "Legendary",
    hat: "Fusion Snapback",
    earrings: "Teardrop",
    clothes: "Gemstone Shirt",
    background: "Citrine",
  },
  {
    name: "Infected Ape",
    images:
      "https://thetonape.mypinata.cloud/ipfs/QmPegRZVAkYuR3MfZze6LiPG2wyuYrXJm2x5rHeDoFvupj/infected-ape.png",
    rarity: "Legendary",
    hat: "Raff Radiance",
    earrings: "Diamond Plug",
    clothes: "Bone Commander Jacket",
    background: "American Blue",
  },
];

let tolerance;

if (e - total > 0) {
  tolerance = e - total;
  commonQty = commonQty + tolerance;
} else {
  tolerance = (e - total) * -1;
  commonQty = commonQty + tolerance;
}

const fillInfo = (id, rank) => {
  return {
    name: `${rank.name} #${id}`,
    description:
      "Dive into a one-of-a-kind Mutant Ape NFT collection on the TON blockchain. Each artwork is a digital masterpiece waiting to be explored and collected. Experience the future of digital art today!",
    image: rank.images,
    attributes: [
      {
        trait_type: "Rarity",
        value: rank.rarity,
      },
      {
        trait_type: "Hat",
        value: rank.hat,
      },
      {
        trait_type: "Earrings",
        value: rank.earrings,
      },
      {
        trait_type: "Clothes",
        value: rank.clothes,
      },
      {
        trait_type: "Background",
        value: rank.background,
      },
    ],
  };
};

for (count = 0; count <= e; ) {
  let newNum = Math.floor(Math.random() * (e - i + 1)) + i;
  if (!arrNum.includes(newNum + 1)) {
    arrNum.push(newNum + 1);
    if (count <= commonCheckpoint) {
      const num = randomNumber(common.length - 1);
      arrProducts.push(fillInfo(arrNum[count], common[num]));
    } else if (count > commonCheckpoint && count <= rareCheckpoint) {
      const num = randomNumber(rare.length - 1);
      arrProducts.push(fillInfo(arrNum[count], rare[num]));
    } else if (count > rareCheckpoint && count <= epicCheckpoint) {
      const num = randomNumber(epic.length - 1);
      arrProducts.push(fillInfo(arrNum[count], epic[num]));
    } else if (count > epicCheckpoint && count <= legendCheckpoint) {
      const num = randomNumber(legendary.length - 1);
      arrProducts.push(fillInfo(arrNum[count], legendary[num]));
    } else {
      const num = randomNumber(common.length - 1);
      arrProducts.push(fillInfo(arrNum[count], common[num]));
    }

    count++;
  }
}

arrProducts.forEach((item, index) => {
  console.log(index);
  const json_data = JSON.stringify(item, null, 2); // Thêm tham số thứ hai và thứ ba để làm đẹp JSON
  const filePath = path.join(outputDir, `${arrNum[index] - 1}.json`);
  fs.writeFileSync(filePath, json_data);
});

const endTime = performance.now(); // Lấy thời gian sau khi vòng lặp kết thúc với độ chính xác cao
const timeTaken = endTime - startTime; // Tính toán thời gian chênh lệch
console.log(`Thời gian vòng lặp chạy: ${timeTaken / 1000}s`);
