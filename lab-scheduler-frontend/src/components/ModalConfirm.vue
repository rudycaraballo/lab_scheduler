<script setup>

let showModal = false
let closeModal = () => {
      this.showModal = false;
   }
</script>


<template>
    <div>
      <!-- Trigger Button -->
      <button @click="showModal = true" class="btn btn-primary">Open Modal</button>
  
      <!-- Modal -->
      <div class="modal fade" :class="{ show: showModal }" style="display: none;" v-show="showModal" @click.self="closeModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal Title</h5>
              <button type="button" class="close" @click="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Backdrop -->
      <div class="modal-backdrop fade" :class="{ show: showModal }" v-show="showModal"></div>
    </div>
  </template>
  