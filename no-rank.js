const startTime = performance.now();

const fs = require("fs");
const path = require("path");

// Tạo thư mục 'output' nếu nó không tồn tại
const outputDir = path.join(__dirname, "metadata-final");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

let i = 0;
let e = 10000; // Cập nhật số lượng phần tử
const arrNum = [];
const arrProducts = [];
let count = 0;
// Tạo 24 loại mới
const types = [
  {
    name: "Denmark",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/denmark.png",
  },
  {
    name: "Albania",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/albania.png",
  },
  {
    name: "Austria",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/austria.png",
  },
  {
    name: "Belgium",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/belgium.png",
  },
  {
    name: "Croatia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/croatia.png",
  },
  {
    name: "Czechia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/czechia.png",
  },
  {
    name: "England",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/england.png",
  },
  {
    name: "France",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/france.png",
  },
  {
    name: "Georgia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/georgia.png",
  },
  {
    name: "Germany",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/germany.png",
  },
  {
    name: "Hungary",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/hungary.png",
  },
  {
    name: "Italy",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/italy.png",
  },
  {
    name: "Netherlands",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/netherlands.png",
  },
  {
    name: "Poland",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/poland.png",
  },
  {
    name: "Portugal",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/portugal.png",
  },
  {
    name: "Romania",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/romania.png",
  },
  {
    name: "Scotland",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/scotland.png",
  },
  {
    name: "Serbia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/serbia.png",
  },
  {
    name: "Slovakia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/slovakia.png",
  },
  {
    name: "Slovenia",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/slovenia.png",
  },
  {
    name: "Spain",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/spain.png",
  },
  {
    name: "Switzerland",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/switzerland.png",
  },
  {
    name: "Turkey",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/turkey.png",
  },
  {
    name: "Ukraine",
    images:
      "https://tonfantoken.mypinata.cloud/ipfs/QmWjkMRdhK9f5zFfPA7VYnVpAneWc3tKxGNvamVzU2xWsP/ukraine.png",
  },
];

const fillInfo = (id, type) => {
  return {
    name: `${type.name} #${id}`,
    description:
      "Each NFT in the collection is designed with unique images, colors, and details, accurately reflecting the identity and history of each team. This not only creates diversity but also allows the owner to possess a small yet distinctive part of European football.",
    image: type.images,
    attributes: [
      {
        trait_type: "Country",
        value: type.name,
      },
    ],
  };
};

function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

const typeQty = Math.floor(e / types.length);
const remainder = e % types.length;

for (let i = 0; i < typeQty * types.length; i++) {
  let newNum;
  do {
    newNum = Math.floor(Math.random() * e) + 1;
  } while (arrNum.includes(newNum));
  arrNum.push(newNum);
  const typeIndex = Math.floor(i / typeQty);
  arrProducts.push(fillInfo(arrNum[i], types[typeIndex]));
}

for (let i = 0; i < remainder; i++) {
  let newNum;
  do {
    newNum = Math.floor(Math.random() * e) + 1;
  } while (arrNum.includes(newNum));
  arrNum.push(newNum);
  const typeIndex = randomNumber(types.length - 1);
  arrProducts.push(
    fillInfo(arrNum[typeQty * types.length + i], types[typeIndex])
  );
}

arrProducts.forEach((item, index) => {
  console.log(index);
  const json_data = JSON.stringify(item, null, 2); // Thêm tham số thứ hai và thứ ba để làm đẹp JSON
  const filePath = path.join(outputDir, `${arrNum[index] - 1}.json`);
  //   const filePath = path.join(outputDir, `${arrProducts[index].name}.json`);
  fs.writeFileSync(filePath, json_data);
});

const endTime = performance.now(); // Lấy thời gian sau khi vòng lặp kết thúc với độ chính xác cao
const timeTaken = endTime - startTime; // Tính toán thời gian chênh lệch
console.log(`Thời gian vòng lặp chạy: ${timeTaken / 1000}s`);
