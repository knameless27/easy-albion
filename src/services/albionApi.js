import axios from "axios";
import items from "@/services/items.json"

const api = "https://west.albion-online-data.com/api/v2/";

const getItems = () => {
    return items
}

const getGold = async () => {
  return await axios
    .get(`${api}stats/gold`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
};

const makeItemList = (listItems, locations, qualities) => {
  return `${listItems}?locations=${locations}&qualities=${qualities}`;
};

const getPrices = async ({ listItems, locations = "", qualities = "" }) => {
  const itemList = makeItemList(listItems, locations, qualities);
  return await axios
    .get(`${api}stats/prices/${itemList}.JSON`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return e;
    });
};

export default {
  getGold,
  getPrices,
  getItems
};
