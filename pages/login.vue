<script setup lang="ts">
import valideEmail from "~/utils/valide-email";

definePageMeta({
  layout: "auth",
});

const formData: Ref<{ email: string; password: string }> = ref({
  email: "",
  password: "",
});

const validateForm = (): void => {
  if (valideEmail(formData.value.email) && formData.value.password.length > 0) {
    // TODO : send data to server
    console.log("form is valid");
  }
};
</script>

<template>
  <div class="w-full h-full p-4 xl:flex gap-4">
    <div
      class="xl:block hidden w-1/2 h-full rounded overflow-hidden bg-black relative drop-shadow-lg"
    >
      <client-only>
        <img
          class="h-full w-full opacity-50 object-cover"
          :src="`/${randomBackground()}`"
          alt="plants"
        />
        <div
          class="p-4 left-0 h-full top-0 flex flex-col justify-between absolute max-w-[50%]"
        >
          <div
            class="text-white w-full text-balance tracking-wider flex items-center gap-4 font-boska"
          >
            <a href="http://google.com/">Entreprise</a>
            <div class="w-full h-[1px] bg-white" />
          </div>

          <div class="text-white text-balance tracking-wider">
            <h1 class="text-5xl font-boska">Yaku.</h1>
            <p class="text-xs">
              Réserve ton créneaux en agence, et viens profiter de tes collègues
              !
            </p>
          </div>
        </div>
      </client-only>
    </div>
    <div
      class="xl:w-1/2 w-full h-full flex flex-col items-center justify-between p-4"
    >
      <div class="p-4 w-fit font-bold font-boska text-3xl">
        <p>約</p>
      </div>

      <div class="xl:px-20">
        <div class="mb-5">
          <p class="font-boska text-3xl text-center">Welcome Back</p>
          <p class="text-center text-xs tracking-wider">
            Entrez votre adresse mail ainsi que votre mot de passe pour vous
            connecter.
          </p>
        </div>
        <form @submit.prevent="validateForm">
          <label class="block text-xs font" for="">Email</label>
          <input
            v-model="formData.email"
            placeholder="Entrez votre email"
            class="bg-[#F5F7FA] placeholder:text-xs placeholder:tracking-wider text-xs px-3 py-2 w-full rounded-md"
            type="text"
          />
          <label class="block text-xs font mt-3" for="">Mot de passe</label>
          <input
            v-model="formData.password"
            placeholder="Entrez votre mot de passe"
            class="bg-[#F5F7FA] placeholder:text-xs placeholder:tracking-wider text-xs px-3 py-2 w-full rounded-md"
            type="password"
          />

          <button
            type="submit"
            class="w-full bg-black mt-5 py-2 text-white text-sm rounded-md"
          >
            Connexion
          </button>
          <div class="flex items-center gap-3 mt-3">
            <div class="h-[1px] w-full bg-[#F5F7FA]" />
            <p class="text-xs font-bold">OU</p>
            <div class="h-[1px] w-full bg-[#F5F7FA]" />
          </div>
          <button
            @click.prevent=""
            class="w-full border border-black mt-3 py-2 text-black text-sm rounded-md"
          >
            Inscription
          </button>
        </form>
      </div>

      <div></div>
    </div>
  </div>
</template>
