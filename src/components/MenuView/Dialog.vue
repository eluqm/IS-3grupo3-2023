<template>
    
    <div id="dialog-overlay">
    <div id="dialog-box">
        <h2>Diálogo</h2>
        <p>Contenido del diálogo...</p>
        <button id="close-dialog">Cerrar</button>
    </div>
    </div>
</template>

<script>
export default {
    name: "Dialog"
}
</script>

<style scoped>
#dialog-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

#dialog-box {
  width: 400px;
  background-color: #fff;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#dialog-box h2 {
  margin-top: 0;
}

#close-dialog {
  margin-top: 10px;
}
</style>