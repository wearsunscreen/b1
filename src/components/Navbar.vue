<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/297-2978257_comfy-chair-cliparts-cartoon-comfy-chairs.png" alt="Comfy Chair">
      <h1><router-link :to="{ name: 'Home' }">Bingeables</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click="handleClick">Log out</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useLogout } from '@/composables/useLogout';
import { useRouter } from 'vue-router';
import { getUser } from '@/composables/getUser';

export default {
  setup() {
    const { error, logout, isPending } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const handleClick = async () => {
      console.log('logging out');
      try {
        await logout();
        router.push({ name: 'Login' });
        console.log('logout successful');
      } catch (err) {
        console.log(err.message);
      }
    }
    return { handleClick, user };
  }
}
</script>


<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

nav img {
  max-height: 60px;
}

nav h1 {
  margin-left: 20px;
}

nav .links {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
</style>