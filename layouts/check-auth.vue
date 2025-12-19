<script setup lang="ts">
import { USER_ROLE } from '~/utils/types/user-role';


  const {isSignedIn, user, isLoaded} = useUser();
 async function updateRole() {
  const userId=user.value?.id
  console.log(userId)
    const { data } = await useFetch('/api/auth/update-role', {
      query: {
        userId: userId,
      }
      });
      console.log(data)
    }


 async function checkRole() {
  const role=user.value?.publicMetadata?.role

  if(typeof role==='undefined') {
    await updateRole()
  }else if(role===USER_ROLE.LEARNER){
    window.location.href='/learner/dashboard'

  }
}
  
    
</script>

<template>

    <Protect>
    <template #fallback>
        <RedirectToLogin />
    </template>
   <div class="bg-slate-200 h-screen">
      <!-- navbar-->
       
        <!-- slot -->
         <NuxtPage />
    </div>
  </Protect>
    
</template>