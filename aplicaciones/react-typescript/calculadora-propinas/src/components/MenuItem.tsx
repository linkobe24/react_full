import type { MenuItem } from "../types";

type MenuItemProp = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export default function MenuItem({ item, addItem }: MenuItemProp) {
  const { name, price } = item;

  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 cursor-pointer"
      onClick={() => addItem(item)}
    >
      <p>{name}</p>
      <p className="font-black">${price}</p>
    </button>
  );
}
