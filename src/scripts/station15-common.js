async function main() {
    //console.log("A");
    const results = await getData();
    //console.log("G");
    //なんで上でawaitしているのに以降の行が先に走るのかわからない
    //https://qiita.com/cheez921/items/41b744e4e002b966391a#asyncawait%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%82%82%E3%81%A3%E3%81%A8%E7%B0%A1%E6%BD%94%E3%81%
    const elem = document.getElementById("result");
    results.forEach(result => {
        let li = document.createElement('li');
        let text = document.createTextNode(result.full_name);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
