import { createClerkClient } from '@clerk/backend'
import { USER_ROLE } from '../../../utils/types/user-role'



export default defineEventHandler(async (event) => {
try{

    const query= getQuery(event)
    const userId=query?.userId as string
    console.log(userId)

  const config=useRuntimeConfig()
  const secretKey=config.NUXT_CLERK_SECRET_KEY
    const clerkClient = createClerkClient({ secretKey: secretKey })


    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
            role:USER_ROLE.LEARNER
        },
    })

    return { 
        message: 'User role updated successfully' 
    }

}catch(error){
    throw createError({
        message: 'Failed to update user role',
        statusCode: 500,
    })
}
})