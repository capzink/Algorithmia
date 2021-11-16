console.clear()


const findCenter =(edges) =>{
    let fullArray =[]
    edges.forEach(Element => Element.forEach(subElement =>fullArray.push(subElement)));
    const node = fullArray.filter((findnode, index) => fullArray.indexOf(findnode)!== index)
    return node.pop()

    
}

console.log(findCenter([[1,2],[5,1],[1,3],[1,4]]))

//solucion mas sencilla

const findcenter2 = (edges) => edges[0].filter(node => edges[1].includes(node));
console.log(findcenter2([[1,2],[5,1],[1,3],[1,4]]))