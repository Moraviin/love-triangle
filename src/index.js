/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let SpichoneesLovesTriangle=0;
  let SpichoneeUnique=[];
  for(let i=0; i<preferences.length; i++)
  {
    if (preferences[i]==preferences[preferences[preferences[preferences[i]-1]-1]-1])
    {
      if(SpichoneeUnique.indexOf(preferences[i])==-1)
      {
        SpichoneeUnique.push(preferences[i]);
      }
    } 
  }
  SpichoneesLovesTriangle=(SpichoneeUnique.length/3);
  return Math.floor(SpichoneesLovesTriangle);
  // your implementation
};
