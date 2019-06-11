<template>
  <div @click="closePopup()" v-show="toggle" class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div @click.stop class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button @click="closePopup()" type="button" class="close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>{{title}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "popup",
  props: ["title", "toggle"],
  methods: {
    closePopup() {
        this.$emit('closePopup')
    }
  }
};
</script>