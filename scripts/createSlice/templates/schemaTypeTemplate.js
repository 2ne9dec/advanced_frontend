import firstCharUpperCase from '../firstCharUpperCase';

export default (sliceName) => `export interface ${firstCharUpperCase(sliceName)}Schema {
  
}`;
