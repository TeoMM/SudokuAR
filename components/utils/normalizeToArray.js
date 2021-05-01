//array input type
//070000043040009610800634900094052000358460020000800530080070091902100005007040802

function normalizeToArray(sudokuString) {
  let aux = sudokuString;
  let result = [];
  for (let i = 0; i < 81; i += 9) {
    result.push(aux.slice(i, i + 9));
  }
  return result;
}
export default normalizeToArray;