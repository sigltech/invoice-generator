const carwashBtn = document.getElementById('carwash-btn')
const mowlawnBtn = document.getElementById('mowlawn-btn')
const pullweedsBtn = document.getElementById('pullweeds-btn')
const tasks = document.getElementById('tasks')
const total = document.getElementById('total')
let remove1 = document.getElementById('remove1')
let remove2 = document.getElementById('remove2')
let remove3 = document.getElementById('remove3')
let totalSum = document.getElementById('total-sum')
const clearBtn = document.getElementById('reset-btn')
let sum  = 0

const services = {
  washCar: 10,
  mowLawn: 20,
  pullWeeds: 30
}

carwashBtn.addEventListener('click',function() {
  tasks.innerHTML += `<li id="car-wash-li">Wash Car <span class="removers" id="remove1" onclick="remover1()">remove</span></li>`
  total.innerHTML += `<li id="car-wash-total"><span>$</span>${services.washCar}</li>`
  sum = sum + services.washCar
  totalSum.textContent = sum
  carwashBtn.disabled = true
})

mowlawnBtn.addEventListener('click',function() {
  tasks.innerHTML += `<li id="mow-lawn-li">Mow Lawn <span class="removers" id="remove2" onclick="remover2()">remove</span></li>`
  total.innerHTML += `<li id="mow-lawn-total"><span>$</span>${services.mowLawn}</li>`
  sum = sum + services.mowLawn
  totalSum.textContent = sum
  mowlawnBtn.disabled = true
})

pullweedsBtn.addEventListener('click',function() {
  tasks.innerHTML += `<li id="pull-weeds-li">Pull Weeds <span class="removers" id="remove3" onclick="remover3()">remove</span></li>`
  total.innerHTML += `<li id="pull-weeds-total"><span>$</span>${services.pullWeeds}</li>`
  sum = sum + services.pullWeeds
  totalSum.textContent = sum
  pullweedsBtn.disabled = true
})


clearBtn.addEventListener('click',function() {
    tasks.innerHTML = ""
    total.innerHTML = ""
    sum = 0
    totalSum.textContent = 0
    carwashBtn.disabled = false
    mowlawnBtn.disabled = false
    pullweedsBtn.disabled = false
})

function remover1() {
  const carWashLi = document.getElementById('car-wash-li')
  const carWashTotal = document.getElementById('car-wash-total')
  carWashLi.remove()
  carWashTotal.remove()
  sum = sum - services.washCar
  totalSum.textContent = sum
  carwashBtn.disabled = false
}

function remover2() {
  const mowLawnLi = document.getElementById('mow-lawn-li')
  const mowLawnTotal = document.getElementById('mow-lawn-total')
  mowLawnLi.remove()
  mowLawnTotal.remove()
  sum = sum - services.mowLawn
  totalSum.textContent = sum
  mowlawnBtn.disabled = false
}

function remover3() {
  const pullWeedLi = document.getElementById('pull-weeds-li')
  const pullWeedTotal = document.getElementById('pull-weeds-total')
  pullWeedLi.remove()
  pullWeedTotal.remove()
  sum = sum - services.pullWeeds
  totalSum.textContent = sum
  pullweedsBtn.disabled = false
}
