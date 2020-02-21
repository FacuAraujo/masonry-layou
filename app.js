'use strict'

function masonryLayout(containerEl, itemsEl, columns) {    
    containerEl.classList.add('masonry-layout', `columns-${columns}`)
    let masonryColumns = []

    for (let i = 1; i <= columns; i++) { 
        let column = document.createElement('div')
        column.classList.add("masonry-column", `column-${i}`) 
        containerEl.appendChild(column)
        masonryColumns.push(column) 
    } 
    
    for (let m = 0; m < Math.ceil(itemsEl.length / columns); m++) { 
        for(let n = 0; n < columns; n++){ 
            let item = itemsEl[m * columns + n] 
            if(item){
                masonryColumns[n].appendChild(item)
                item.classList.add('masonry-item')
            } 
        } 
    }    
}

const gallery = document.getElementById('gallery') 
const cards = document.querySelectorAll('.card') 

masonryLayout(gallery, cards, 3)