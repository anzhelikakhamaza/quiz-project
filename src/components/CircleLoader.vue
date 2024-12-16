<script setup>
var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar-line"></div>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
  background-color: grey;
}

.progress-bar-line {
  width: 1%;
  height: 30px;
  background-color: green;
}
</style>