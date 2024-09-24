const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.get("/api/get-data", (req, res) => {
  res.json([
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
    },
  ]);
});

app.get("/api/get-animal-data", (req, res) => {
  res.json([
    {
      title: "Cheetah",
      description:
        "Cheetahs are the fastest land titles, capable of reaching speeds up to 75 mph.",
      image: "/images/6.svg",
      id: 1,
    },
    {
      title: "Koala",
      description:
        "Koalas sleep around 20 hours a day and are known for their eucalyptus diet.",
      image: "/images/3.svg",
      id: 2,
    },
    {
      title: "Elephant",
      description:
        "Elephants have the largest brains among land titles and demonstrate remarkable intelligence.",
      image: "/images/1.svg",
      id: 3,
    },
    {
      title: "Zebra",
      description:
        "Zebras have distinctive black and white stripes that act as a natural defense against predators.",
      image: "/images/7.svg",
      id: 4,
    },
    {
      title: "Horse",
      description:
        "Horses have excellent memory and are capable of recognizing human emotions.",
      image: "/images/5.svg",
      id: 5,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
