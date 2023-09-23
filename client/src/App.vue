<template>
  <div class="container">
    <!-- <div class="row"> -->
      <div class="mb-3"></div>
      <div class="mb-6 ">
        <div class="card border-dark">
        <div class="card-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input
                id="nombre"
                v-model="formData.nombre"
                type="text"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label for="contacto" class="form-label">Contacto</label>
              <input
                id="contacto"
                v-model="formData.contacto"
                type="text"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label for="correo" class="form-label">Correo</label>
              <input
                id="correo"
                v-model="formData.correo"
                type="email"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label for="contrasena" class="form-label">Contraseña</label>
              <input
                id="contrasena"
                v-model="formData.contrasena"
                type="text"
                class="form-control"
                :pattern="passwordPattern"
                title="La contraseña debe tener entre 10 y 15 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un símbolo(# NO esta permitido)."
                required
              />
            </div>

            <div class="mb-3">
              <label for="repetirContrasena" class="form-label">Repetir Contraseña</label>
              <input
                id="repetirContrasena"
                v-model="formData.repetirContrasena"
                type="text"
                class="form-control"
                required
              />
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
      </div>
      <div class="mb-3"></div>
      
    </div>
    
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const api_url: string = 'http://localhost:3000/api/'


interface FormaData {
  nombre:string
  contacto: string
  correo: string
  contrasena: string,
  repetirContrasena: string,
}
const formData = ref<FormaData>({
  nombre: '',
  contacto: '',
  correo: '',
  contrasena: '',
  repetirContrasena: '',
});

const passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{10,15}$';
console.log({passwordPattern});

const submitForm = async() => {
  console.log({formData})
  let sendData: FormaData = { ...formData.value }
  console.log({sendData});
  
  // Aquí puedes agregar la lógica para procesar el formulario
  // Por ejemplo, puedes validar las contraseñas aquí antes de enviar el formulario
  if (sendData.contrasena !== sendData.repetirContrasena) {
    alert('Las contraseñas no coinciden');
  } else {
    const resolveSaveForm = await axios.post(
              `${api_url}usuarios`,
              sendData,
              {
                  headers:{
                      'Content-Type': 'application/json'
                  }
              }
              )
              .then((response)=>{
                  alert('Usuarios registrado, se envio correo al nuevo usuario');

                  console.log({response});
                  return response
              })
              .catch((e)=>{
                console.log({e});
                alert('Error de servidor')
              });
        
        console.log({resolveSaveForm});
  }
}
</script>

<style scoped>
/* Agrega estilos personalizados aquí si es necesario */
</style>

