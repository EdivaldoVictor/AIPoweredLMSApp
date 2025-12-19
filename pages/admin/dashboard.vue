<script setup>
    
    definePageMeta({
        layout: 'admin'
    })
    
 
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

</script>

<template>
    <div>
     {{ user?.publicMetadata }}
        <h1 @click="updateRole">Dashboard</h1>
        <UserButton />
    </div>
</template>