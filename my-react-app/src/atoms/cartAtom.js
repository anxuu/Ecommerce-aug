import { atom } from "jotai";


// Store items in cart
export const itemQuantityAtom = atom([]);

// Derived atom -> calculates total quantity
export const cartQuantityAtom = atom((get) => {
    const items = get(itemQuantityAtom);
    return items.length;
});


