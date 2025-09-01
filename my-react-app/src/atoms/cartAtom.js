import { atom } from "jotai";


// Store items in cart
export const itemQuantityAtom = atom({});

// Derived atom -> calculates total quantity
export const cartQuantityAtom = atom((get) => {
    const items = get(itemQuantityAtom);
    return Object.values(items).filter(value => value > 0).length;
});


