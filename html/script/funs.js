let container = document.querySelector('.container')
export function findRoad() {
    let roadLine = [
        '沿这条路走到头',
        '右转',
        '直行穿过第一个十字路口',
        '在第三个十字路口处左转',
        '继续走 300 米,学校就在你的右手边'
    ]

    let ol = document.createElement('ol')
    container.appendChild(ol)
    roadLine.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        li.setAttribute('class', 'items')
        ol.appendChild(li)
    })
}
export function cookingFood(desText, foodMaterials, cookingSteps, title, MaterialsTitle, StepsTitle) {
    let headTitle = document.createElement('h1')
    let foodMaterialsTitle = document.createElement('h2')
    let cookingStepsTitle = document.createElement('h2')
    headTitle.textContent = title
    container.appendChild(headTitle)
    desText.forEach(item => {
        let pText = document.createElement('p')
        pText.textContent = item
        container.appendChild(pText)
    })
    foodMaterialsTitle.textContent = MaterialsTitle
    container.appendChild(foodMaterialsTitle)
    let ul = document.createElement('ul')
    foodMaterials.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    })
    container.appendChild(ul)
    cookingStepsTitle.textContent = StepsTitle
    container.appendChild(cookingStepsTitle)
    let ol = document.createElement('ol')
    cookingSteps.forEach(item => {
        let li = document.createElement('li')
        li.textContent = item
        ol.appendChild(li)
    })
    container.appendChild(ol)
}