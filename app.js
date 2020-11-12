function chessTable() {
    const tableBlock = document.querySelector('.globalTable')
    let flag = true
    let cubClass =[]
    let figurStatikBlock =[]
    let figursCub =[]
    let figurWidth = []
    let figurBlack = []

    for( i=1; i<=8; i++){
        for(j=1; j<=8; j++){
                        
            let cubClass = `cub-${i}${j}`
            if(j==1) flag=!flag
                block = document.createElement('div')
            if (flag) block.className=`block black ${cubClass}`
            else block.className=`block width ${cubClass}`
                tableBlock.appendChild(block)
                if(i==1 || i==8 || i== 2 || i==7){    
                    let allFigur =document.querySelector(`.${cubClass}`)  
                    const figurBlock = document.createElement('div')
                    // const imgElement = document.createElement('img')
                    // figurBlock.appendChild(imgElement)
                    if(i<= 2) {
                        let startCubsWidth =document.querySelector(`.${cubClass}`)
                        figurBlock.className='widthRook block figurWidth'
                        
                        startCubsWidth.appendChild(figurBlock)
                        startCubsWidth.appendChild(figurBlock)
                        figurWidth.push(startCubsWidth)
                    }else {
                        let startCubsBlack =document.querySelector(`.${cubClass}`)
                        figurBlock.className='widthRook block figurBlack'
                        
                        startCubsBlack.appendChild(figurBlock)
                        figurBlack.push(startCubsBlack)
                       
                    } 

                    //let startCubs =document.querySelector(`.${cubClass}`)
                    
                    //figurBlock.className='widthRook block'
                    
                    
                    //startCubs.appendChild(figurBlock)
                    figurStatikBlock.push(allFigur)
                    figursCub.push(cubClass)
                    //figurWidth.push(startCubsWidth)
                    //figurBlack.push(startCubsBlack)
                    // console.log(figurBlack)
                    // (i==2) ? console.log(cubClass)
                }

            //console.log(cubClass)

            flag =!flag
        }
        
    }
    //console.log(figurWidth[1])
    console.log(figurBlack)
    figurBlack.reverse()
    figursW =['wr', 'wn', 'wb', 'wq', 'wk', 'wp']
    figursB =['br', 'bn', 'bb', 'bk', 'bq', 'bp']
    for(key= 0; key<=15; key++){

                    if(key >=5 && key<= 7){
                        const reverseFigursW = figursW.slice(0, 3).reverse()
                        const reverseFigursB = figursB.slice(0, 3).reverse()

                        let keyFigur = key - 5
                        console.log(keyFigur)
                        figurWidth[key].firstChild.classList.add(reverseFigursW[keyFigur])
                        figurBlack[key].firstChild.classList.add(reverseFigursB[keyFigur])

                    }else if (key <=2) {
                        figurWidth[key].firstChild.classList.add(figursW[key])
                        figurBlack[key].firstChild.classList.add(figursB[key])

                    }else if (key == 3 || key == 4){
                        figurWidth[key].firstChild.classList.add(figursW[key])
                        figurBlack[key].firstChild.classList.add(figursB[key])

                    }else {
                        figurWidth[key].firstChild.classList.add(figursW[5])
                        figurBlack[key].firstChild.classList.add(figursB[5])

                    }
                    
                    console.log()
    }
     //console.log(figursCub)
    //  figursCub.forEach(classNames => {
    //      const indexNumberCub =classNames.charAt(4)
    //      if(indexNumberCub <= 2){
    //         console.log(classNames)

    //      }
    //  })
    // figurWidth.forEach(element => {
    //    //figurElementClass = element.classList
       
    //    console.log(element.classList)
       
    // })
    // const elementBlock = tableBlock.querySelectorAll('div')
    // for (var cub = elementBlock.length - 2; cub >= 0; cub--) {
    //     tableBlock.appendChild(elementBlock[cub]);
    //   }

}
chessTable()

function rookAddTable(){
    const startCub=document.querySelector('.cub-11')
    const figurBlock = document.createElement('div')
    figurBlock.className='widthRook block'
    const imgElement = document.createElement('img')
    imgElement.src='img/width_rook.png'
    figurBlock.appendChild(imgElement)
    startCub.appendChild(figurBlock)
    //console.log(figurBlock)
}

//rookAddTable()