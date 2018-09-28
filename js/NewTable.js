function addTable() {
    let body = document.querySelector("body"),

        tr = "",
        td = "",
        firstTable = document.querySelector("table");

    console.log(row);
    console.log(collum);

    table = document.createElement("table");
    table.setAttribute("border", "2px");


    for (let i = 0; i < row; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < collum; j++) {
            td = document.createElement("td");
            td.id = (i + 1) + "." + (j + 1);

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }



    if (firstTable == null) {
        return body.appendChild(table);
    } else {
        let newTable = body.appendChild(table);
        return document.body.replaceChild(newTable, firstTable);
    }


}