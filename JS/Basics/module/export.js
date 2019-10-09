function add(n1, n2){
	return n1 + n2;
}
//原先使用export default add語法無法成功匯出
//會出現以下報錯Uncaught SyntaxError: The requested module './export.js' does not provide an export named 'add'
export {add}