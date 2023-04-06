const email = document.getElementsByName('email')[0]
const message = document.getElementsByName('message')[0]
const submit = document.getElementsByTagName('button')[0]

const storageItemTitle = "feedback-form-state"
const storageItem = JSON.parse(localStorage.getItem(storageItemTitle))

email.value = storageItem?.email || ''
message.value = storageItem?.message || ''

function updateStorage(){
  const newStorageItem = {
    email: email.value,
    message: message.value
  }

  localStorage.setItem(storageItemTitle, JSON.stringify(newStorageItem))
}

email.addEventListener('input', updateStorage)
message.addEventListener('input', updateStorage)

function onSubmit(){
  const values = JSON.parse(localStorage.getItem(storageItemTitle))
  console.log(values)

  localStorage.clear()
}

submit.addEventListener('click', onSubmit)


