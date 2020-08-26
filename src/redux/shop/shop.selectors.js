import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

const COLLECTION_ID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectCollectionsForPreview = createSelector( 
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
) 
// takes the url of the target collections page
// and return the corresponding ID from the ID_MAP
// 2020-08-20 : applied data normalization. It is more efficient to store
// lists of objects as elements instead of arrays
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(collection => collections.id === COLLECTION_ID_MAP[collectionUrlParam])
  );