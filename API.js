function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
httpGet("http://azbook.vn/?fbclid=IwAR2Bo-Onomvlc3H9sfCe4SYmMwgI_OhKOLfE_ysdjUf8hlMdH5DGcLzUu-A")