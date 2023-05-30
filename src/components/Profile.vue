<template>
    <div class="top">
        <button class="menu-btn" id="menu-btn">
            <i class="material-symbols-sharp">menu</i>
        </button>
        <div class="theme-toggler">
            <i class="material-symbols-sharp active">light_mode</i>
            <i class="material-symbols-sharp">dark_mode</i>
        </div>
        <div class="profile">
            <div class="info">
                <p>Hey, <b>Daniel</b></p>
                <small class="text-muted">Admin</small>
            </div>
            <div class="profile-photo">
                <img src="../assets/profile-1.jpg" alt="#">
            </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Profile',

}
</script>
<style scoped>
.top{
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
}
.top button{
  display: none;
}
.top .theme-toggler{
  width: 4.2rem;
  height: 1.6rem;
  background: var(--color-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: var(--border-radius-1);
  /*color: var(--color-dark);*/
}

.top .theme-toggler i{
  font-size: 1.2rem;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.top .theme-toggler i.active{
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: var(--border-radius-1);
}

.top .profile{
  display: flex;
  gap: 2rem;
  text-align: right;
}
.profile-photo{
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
}
</style>